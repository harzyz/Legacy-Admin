"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";

const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
  const [filterType, setFilterType] = useState("Exercise");
  const [editItem, setEditItem] = useState(null);
  const [activity, setActivity] = useState(false);

  const [active, setActive] = useState(false);
  const [isActive, setIsActive] = useState(0);

  const toggleMenu = () => {
    setActive(!active);
    activeLevel(6)
  };

  const activeLevel = (key) =>{
    setIsActive(key)
  }

  const router = useRouter();

  const generateMonthlyStructure = () => {
    const days = {};
    for (let i = 1; i <= 30; i++) {
      days[i] = [];
    }
    return days;
  };

  const [admin, setAdmin] = useState({
    beginners: {
      exercise: generateMonthlyStructure(),
      drills: generateMonthlyStructure(),
      moves: generateMonthlyStructure(),
    },
    intermediate: {
      exercise: generateMonthlyStructure(),
      drills: generateMonthlyStructure(),
      moves: generateMonthlyStructure(),
    },
    expert: {
      exercise: generateMonthlyStructure(),
      drills: generateMonthlyStructure(),
      moves: generateMonthlyStructure(),
    },
    elite: {
      exercise: generateMonthlyStructure(),
      drills: generateMonthlyStructure(),
      moves: generateMonthlyStructure(),
    },
  });

  async function loginAdmin(email, password) {
    const params = {
      email: email,
      password: password,
    };
    try {
      await axios
        .post("https://legacy-backend-zmmd.onrender.com/admin/login", params)
        .then((response) => {
          if (response.data.token !== "") {
            // localStorage.setItem("userToken", response.data.token);
            document.cookie = `userToken=${response.data.token}; path=/;`;
            router.push("/dashboard");
          }
        });
    } catch (error) {
      console.error(error, "this is the error");
    }
  }

  const addDayItem = (level, activityType, day, newActivity) => {
    setAdmin((prevAdmin) => {
      const newState = { ...prevAdmin };

      newState[level] = {
        ...newState[level],
        [activityType]: {
          ...newState[level][activityType],
          [day]: [...newState[level][activityType][day], newActivity],
        },
      };
      return newState;
    });
  };

  const updateDayItem = (level, activityType, day, updatedItem) => {
    setAdmin((prevAdmin) => {
      const newState = { ...prevAdmin };

      const updatedActivities = newState[level][activityType][day].map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );

      newState[level] = {
        ...newState[level],
        [activityType]: {
          ...newState[level][activityType],
          [day]: updatedActivities,
        },
      };

      return newState;
    });
    setEditItem(null);
    setActivity(false);
  };

  const deleteDayItem = (level, activityType, day, id) => {
    setAdmin((prevAdmin) => {
      const newState = { ...prevAdmin };

      const updatedActivities = newState[level][activityType][day].filter(
        (item) => item.id !== id
      );

      newState[level] = {
        ...newState[level],
        [activityType]: {
          ...newState[level][activityType],
          [day]: updatedActivities,
        },
      };

      return newState;
    });
    setEditItem(null);
    setActivity(false);
  };

  return (
    <LevelContext.Provider
      value={{
        admin,
        setAdmin,
        filterType,
        setFilterType,
        deleteDayItem,
        updateDayItem,
        setEditItem,
        editItem,
        activity,
        setActivity,
        addDayItem,
        loginAdmin,
        active,
        toggleMenu,
        isActive,
        activeLevel
      }}
    >
      {children}
    </LevelContext.Provider>
  );
};

export default LevelContext;

"use client"
import { createContext, useState } from "react";

const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
  const [filterType, setFilterType] = useState("Exercise");
  const [editItem, setEditItem] = useState(null);
  const [activity, setActivity] = useState(false);
  

  const generateMonthlyStructure = () => {
    const days = {};
    for (let i = 1; i <= 30; i++) {
      days[i] = []
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
  })


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
  
      const updatedActivities = newState[level][activityType][day].filter((item) => item.id !== id)
  
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
  
  return <LevelContext.Provider value={{
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
    addDayItem
  }}>
    {children}
  </LevelContext.Provider>
};


export default LevelContext

"use client"
import { createContext, useState } from "react";

const LevelContext = createContext();

export const LevelProvider = ({ children }) => {
  const [filterType, setFilterType] = useState("Exercise");
  

  const generateMonthlyStructure = () => {
    const days = {};
    for (let i = 1; i <= 30; i++) {
      days[i] = []
    }
    return days;
  };

  // const initialState = {
  //   beginners: {
  //     exercise: generateMonthlyStructure(),
  //     drills: generateMonthlyStructure(),
  //     moves: generateMonthlyStructure(),
  //   },
  //   intermediate: {
  //     exercise: generateMonthlyStructure(),
  //     drills: generateMonthlyStructure(),
  //     moves: generateMonthlyStructure(),
  //   },
  //   expert: {
  //     exercise: generateMonthlyStructure(),
  //     drills: generateMonthlyStructure(),
  //     moves: generateMonthlyStructure(),
  //   },
  //   elite: {
  //     exercise: generateMonthlyStructure(),
  //     drills: generateMonthlyStructure(),
  //     moves: generateMonthlyStructure(),
  //   },
  // };

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
  
  return <LevelContext.Provider value={{
    admin,
    setAdmin,
    filterType,
    setFilterType
  }}>
    {children}
  </LevelContext.Provider>
};


export default LevelContext

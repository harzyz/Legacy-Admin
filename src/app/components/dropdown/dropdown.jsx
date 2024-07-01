"use-client"
import React, { useState } from "react";

const Dropdown = ({options}) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const selectOption = (option) => {
    setSelectedOption(option)
    setIsOpen(false)
    // isOpen.value = false;
    // emit("select-option", optionId);
  };

  const toggleDropDown = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <button onClick={toggleDropDown}>{selectedOption || "All Categories"}</button>

      {isOpen && <ul>
        {options.map((item) => (
          <li onClick={() => selectOption(item)} key={item}>{item}</li>
        ))}
      </ul>}
    </div>
  );
};

export default Dropdown;

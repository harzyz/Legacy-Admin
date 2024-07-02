"use client";
import React from "react";
import Image from "next/image";
import styles from "../beginners/beginners.module.scss";
import { VscAccount } from "react-icons/vsc";
import Frames from "../../../../public/assets/Frame 10.svg";
import { MdArrowDropDown } from "react-icons/md";
import Timmy from "../../../../public/assets/Timmysmall.svg";
import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import plus from "../../../../public/assets/Plus.svg";
import { useState } from "react";
import Link from "next/link";
import TimmyDetails from "./TimmyDetails";
import Move from "@/app/components/move/move";
import Dropdown from "@/app/components/dropdown/dropdown";
import Drills from "@/app/components/drills/drills";
import Exercise from "@/app/components/exercise/exercise";
import caret from '../../../../public/assets/caret.svg'
// import '../../styles//globals.scss';

export default function Beginners() {
  const [down, setDown] = useState(false);
  const [exercise, setExercise] = useState('default');

  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setExercise(option)
    // isOpen.value = false;
    // emit("select-option", optionId);
  };

  const toggleDropDown = () => {
    setIsOpen(!isOpen);
  };

  const more = ["Moves", "Drills", "Exercise"];

  const toggleMenu = () => {
    setDown((open) => !open);
  };

  const timmyHead = [
    {
      id: 1,
      name: "Neck Stretch",
      // text: "10 Neck Stretch",
      description: "10 Neck Stretch",
      time: "01:59",
      day: "01",
      src: Timmy,
      animation: "Lorem ipsum dolor...",
    },

    {
      id: 2,
      name: "Neck Stretch",
      // text: "10 Neck Stretch",
      description: "20 Neck Stretch",
      time: "01:59",
      day: "01",
      src: Timmy,
      animation: "Lorem ipsum dolor...",
    },

    {
      id: 3,
      name: "Neck Stretch",
      // text: "10 Neck Stretch",
      description: "10 Neck Stretch",
      time: "01:59",
      day: "01",
      src: Timmy,
      animation: "Lorem ipsum dolor...",
    },

    {
      id: 4,
      name: "Neck Stretch",
      // text: "10 Neck Stretch",
      description: "10 Neck Stretch",
      time: "01:59",
      day: "01",
      src: Timmy,
      animation: "Lorem ipsum dolor...",
    },

    {
      id: 5,
      name: "Neck Stretch",
      // text: "10 Neck Stretch",
      description: "10 Neck Stretch",
      time: "01:59",
      day: "01",
      src: Timmy,
      animation: "Lorem ipsum dolor...",
    },
  ];

  return (
    <section className={styles.Beginners_Container}>
      <div className={styles.Admin_Wrapper}>
        <div className={styles.Admin_Text}>
          <VscAccount className={styles.Admin_Icon} />
          <p>Hello Admin</p>
        </div>
        <Image
          src={Frames}
          alt="plus"
          width={50}
          height={50}
          className={styles.Admin_Img}
        />
      </div>
      <div className={styles.cat_container}>
        <div>
          <button className={styles.selected_option} onClick={toggleDropDown}>
            {selectedOption || "All Categories"} <Image src={caret} />
          </button>

          {isOpen && (
            <ul className={styles.dropdown_options}>
              {more.map((item) => (
                <li className={exercise=== item ? styles.dropdown_options_listr : styles.dropdown_options_list} onClick={() => selectOption(item)} key={item}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {exercise === 'default' && 
        <section className={styles.Activity_Container}>
          <div className={styles.Animation_Wrapper}>
            <ul>
              <li>Animation</li>
              <li>Activity Name</li>
              <li>Description</li>
              <li>Duration</li>
              <li>Day</li>
              <li>Animation URL</li>
            </ul>
          </div>
          <div className={styles.Activty_Container}>
            <div className={styles.Activty_Form}>
              <ul>
                <li>
                  <div className={styles.Timmy_Head}>
                    <input type="checkbox" className={styles.Timmy_Input} />
                    <Image
                      src={Timmy}
                      width={50}
                      height={50}
                      alt="timmy"
                      className={styles.Timmy_Img}
                    />
                  </div>
                </li>
                <li>Neck Strech</li>
                <li>10 Neck Strech</li>
                <li>01:51</li>
                <li>01</li>
                <li>Lorem ipsum dolor...</li>
                <li>
                  <div className={styles.Edit_Box}>
                    <RiEdit2Line className={styles.Edit_Icon} />
                    <RiDeleteBin6Line className={styles.Edit_Icon} />
                  </div>
                </li>
              </ul>

              {timmyHead.map((timmy) => (
                <div key={timmy.id}>
                  <TimmyDetails
                    imageProp={Timmy}
                    page={timmy.name}
                    description={timmy.description}
                    text={timmy.time}
                    day={timmy.day}
                    animation={timmy.animation}
                  />
                </div>
              ))}

              <div className={styles.Plus_Wrapper}>
                <Link href={"/levels/beginners/activity"}>
                  <div className={styles.Plus}>
                    <Image src={plus} alt="plus" width={30} height={30} />
                    <p>Add More Fields</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      }
      {exercise === 'Moves' && <Move />}
      {exercise === 'Drills' && <Drills />}
      {exercise === 'Exercise' && <Exercise />}
    </section>
  );
}

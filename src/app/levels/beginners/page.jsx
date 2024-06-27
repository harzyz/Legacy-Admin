"use client"
import React from 'react';
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
import Link from 'next/link';
import { useSavedData } from '../../../../context/SavedDataContext'; 

 const Beginners = () =>{
  const [down, setDown] = useState(false);
  const { savedData } = useSavedData();

  const toggleMenu = () => {
    setDown((open) => !open);
  };

  return (
    <section className={styles.Beginners_Container}>
      <div className={styles.Admin_Wrapper}>
        <div className={styles.Admin_Text}>
          <VscAccount className={styles.Admin_Icon} />
          <p>Hello Admin</p>
        </div>
        <Image
          src={Frames}
          width={50}
          height={50}
          className={styles.Admin_Img}
        />
      </div>
      <div className={styles.Categories_Container}>
        <div className={styles.Categories} onClick={toggleMenu}>
          <p>All Categories</p>
          <MdArrowDropDown className={styles.Thick_Down_Icon} />
        </div>
        <div className={down ? styles.drills : styles.drills_block}>
          <ul>
            <Link href={"/levels/beginners/exercise"}>
              <li>Exercise</li>
            </Link>
            <Link href={"/levels/beginners/drills"}>
              <li>Drills</li>
            </Link>
            <Link href={"/levels/beginners/move"}>
              <li>Moves</li>
            </Link>
          </ul>
        </div>
      </div>
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
          {savedData.map((item, index) => (
            <div key={index} className={styles.Activty_Form}>
              <ul>
                <li>
                  <div className={styles.Timmy_Head}>
                    <input type='checkbox' className={styles.Timmy_Input} />
                    <Image
                      src={Timmy}
                      width={50}
                      height={50}
                      alt='timmy'
                      className={styles.Timmy_Img}
                    />
                  </div>
                </li>
                <li>{item.animationName}</li>
                <li>{item.description}</li>
                <li>{item.timeMin}:{item.timeSec}</li>
                <li>01</li>
                <li>{item.animationImages}</li>
                <li>
                  <div className={styles.Edit_Box}>
                    <RiEdit2Line className={styles.Edit_Icon} />
                    <RiDeleteBin6Line className={styles.Edit_Icon} />
                  </div>
                </li>
              </ul>

              <div className={styles.Timmy_Head_Two}>
                <div className={styles.Timmy_Head}>
                  <input type='checkbox' className={styles.Timmy_Input} />
                  <Image
                    src={Timmy}
                    width={50}
                    height={50}
                    alt='timmy'
                    className={styles.Timmy_Img}
                  />
                </div>

                <div className={styles.Strech_One}>
                  <p>{item.animationName}</p>
                </div>
                <div className={styles.Strech_Two}>
                  <p>{item.description}</p>
                </div>
                <div className={styles.Strech_Three}>
                  <p>{item.timeMin}:{item.timeSec}</p>
                </div>
                <div className={styles.Strech_Four}>
                  <p>01</p>
                </div>
                <div className={styles.Strech_Five}>
                  <p>{item.animationImages}</p>
                </div>
                <div className={styles.Edit_Box}>
                  <RiEdit2Line className={styles.Edit_Icon} />
                  <RiDeleteBin6Line className={styles.Edit_Icon} />
                </div>
              </div>
            </div>
          ))}

          <div className={styles.Plus_Wrapper}>
            <Link href={"/levels/beginners/activity"} >
              <div className={styles.Plus}>
                <Image
                  src={plus}
                  width={30}
                  height={30}
                />
                <p>Add More Fields</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
}
export default Beginners
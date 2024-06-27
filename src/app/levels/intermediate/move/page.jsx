"use client"
import React from 'react'
import Image from "next/image";
import styles from "../move/move.module.scss";
import { VscAccount } from "react-icons/vsc";
import Framess from "../../../../../public/assets/Frame 10.svg";
import { MdArrowDropDown } from "react-icons/md";
import Timmy from "../../../../../public/assets/Timmysmall.svg";
import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import plus from "../../../../../public/assets/Plus.svg";
import { useState } from "react";
import Link from 'next/link';
import TimmyDetails from '../../beginners/TimmyDetails';

export default function Beginners() {

  const [down, setDown] = useState(false);

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
          src={Framess}
          alt='plus'
          width={50}
          height={50}
          className={styles.Admin_Img}
           />
        </div>
        <div className={styles.Categories_Container}>
          <div className={styles.Categories} onClick={toggleMenu}>
            <p>Moves</p>
            <MdArrowDropDown className={styles.Thick_Down_Icon} />
          </div>
          <div className={down ? styles.drills : styles.drills_block}>
              <ul>
              <Link href={"/levels/intermediate"}>
                    <li>
                        All Categories
                    </li>
                  </Link>
                  <Link href={"/levels/intermediate/exercise"}>
                    <li>
                    Exercises
                    </li>
                  </Link>
                  <Link href={"/levels/intermediate/drills"}>
                    <li>
                    Drills
                    </li>
                  </Link>
                  {/* <li>Moves</li> */}
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
            <div className={styles.Activty_Form}>
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
                  <Link href={"/levels/intermediate/activity"} >
                      <div className={styles.Plus}>
                        <Image 
                        src={plus}
                        alt='plus'
                        width={30}
                        height={30}
                        />
                          <p>Add More Fields</p>
                      </div>
                    </Link>
                  </div>
            </div>
          </div>
        </section>
    </section>
  )
}

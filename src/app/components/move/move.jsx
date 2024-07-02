"use client"
import Image from 'next/image';
import Link from 'next/link';
import Framess from "../../../../public/assets/Frame 10.svg";
import Timmy from "../../../../public/assets/Timmysmall.svg";
import plus from "../../../../public/assets/Plus.svg";
import styles from "./move.module.scss"
import React, { useState } from 'react'
import { MdArrowDropDown } from 'react-icons/md';
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri';
import { VscAccount } from 'react-icons/vsc';

const Move = () => {
    const [down, setDown] = useState(false);

    const toggleMenu = () => {
      setDown((open) => !open);
    };
  
  
  
    return (
      <section className={styles.Beginners_Container}>
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
  
                {/* {timmyHead.map((timmy) => (
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
              ))} */}
  
                    <div className={styles.Plus_Wrapper}>
                    <Link href={"/levels/activity"} >
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

export default Move

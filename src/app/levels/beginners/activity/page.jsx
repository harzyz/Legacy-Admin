
'use client'
import React, { useState } from 'react';
import React from 'react'
import styles from "../activity/activity.module.scss";
import Image from "next/image";
import { VscAccount } from "react-icons/vsc";
import note from "../../../../../public/assets/Frame 10.svg";
import notes from "../../../../../public/assets/Timmysmall.svg";
import { useSavedData } from '../../../../../context/SavedDataContext';

 const Activity = () => {
  const [formData, setFormData] = useState({
    animationImages: '',
    animationVideos: '',
    animationName: '',
    description: '',
    timeMin: '',
    timeSec: ''
  });

  const { addSavedData } = useSavedData();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    addSavedData(formData);
    setFormData({
      animationImages: '',
      animationVideos: '',
      animationName: '',
      description: '',
      timeMin: '',
      timeSec: ''
    });
  };


const Activity = () => {

    const [timmyDetail, setTimmyDetail] = useState({
        name: "",
        text: "",
        time: "",
        description: "",
        src: null,
        video: "",
      });

      const timmy = {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTimmyDetail({
      ...timmyDetail,
      [name] : value
    });
  };

  return (
    <section className={styles.Activity_Container}>
      <div className={styles.Admin_Wrapper}>
        <div className={styles.Admin_Text}>
          <VscAccount className={styles.Admin_Icon} />
          <p>Hello Admin</p>
        </div>
        <Image
          src={note}
          width={50}
          height={50}
          className={styles.Admin_Img}
          alt=''
        />
      </div>
      <div className={styles.Add_New_Activity}>
        <h4>Add new activity</h4>
      </div>
      <section className={styles.Activity_Wrapper}>
        <h4>Basic information new account</h4>
        <div className={styles.Activity_Head}>
          <p>Animation images <span>*</span></p>
          <div className={styles.Activity_Form}>
            <Image
              src={notes}
              width={50}
              height={50}
              className={styles.Animation_Img}
            />
            <input
              type='text'
              name='animationImages'
              className={styles.Activity_Input}
              placeholder='Input URL'
              value={formData.animationImages}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.Activity_Head}>
          <p>Animation Videos<span>*</span></p>
          <div className={styles.Activity_Form}>
            <input
              type='text'
              name='animationVideos'
              className={styles.Activity_Input}
              placeholder='Input URL'
              value={formData.animationVideos}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.Activity_Head}>
          <p>Animation Name<span>*</span></p>
          <div className={styles.Activity_Form}>
            <input
              type='text'
              name='animationName'
              className={styles.Activity_Input}
              value={formData.animationName}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.Activity_Head}>
          <p>Description<span>*</span></p>
          <div className={styles.Activity_Form}>
            <input
              type='text'
              name='description'
              className={styles.Activity_Input}
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className={styles.Activity_Head}>
          <p>Time<span>*</span></p>
          <div className={styles.Activity_Form_two}>
            <input
              type='time'
              name='timeMin'
              className={styles.Activity_Input}
              value={formData.timeMin}
              onChange={handleInputChange}
            />
            <p>Min</p>
            <input
              type='time'
              name='timeSec'
              className={styles.Activity_Input}
              value={formData.timeSec}
              onChange={handleInputChange}
            />
            <p>Sec</p>
          </div>
        </div>
        <div className={styles.Button_One}>
          <div className={styles.Button_Two}>
            <button className={styles.Cancel_btn}>Cancel</button>
            <button className={styles.Save_btn} onClick={handleSave}>Save</button>
          </div>
        </div>

      </section>
        <section className={styles.Activity_Wrapper}>
            <h4>Basic information</h4>
            <div className={styles.Activity_Head}>
                <p>Animation images<span>*</span></p>
                <div className={styles.Activity_Form}>
                    <Image 
                    src={notes}
                    width={50}
                    height={50}
                    className={styles.Animation_Img}
                    />
                    <input type='text' className={styles.Activity_Input} onChange={handleChange}  placeholder='Input URL' />
                </div>
            </div>
            <div className={styles.Activity_Head}>
                <p>Animation Videos<span>*</span></p>
                <div className={styles.Activity_Form}>
                    <input type='text' className={styles.Activity_Input} onChange={handleChange} placeholder='Input URL' />
                </div>
            </div>
            <div className={styles.Activity_Head}>
                <p>Animation Name<span>*</span></p>
                <div className={styles.Activity_Form}>
                    <input type='text' className={styles.Activity_Input} onChange={handleChange} />
                </div>
            </div>
            <div className={styles.Activity_Head}>
                <p>Description<span>*</span></p>
                <div className={styles.Activity_Form}>
                    <input type='text' className={styles.Activity_Input} onChange={handleChange} />
                </div>
            </div>
            <div className={styles.Activity_Head}>
                <p>Time<span>*</span></p>
                <div className={styles.Activity_Form_two}>
                    <input type='time' className={styles.Activity_Input} />
                    <p>Min</p>
                    <input type='time' className={styles.Activity_Input} />
                    <p>Sec</p>
                </div>
            </div>
            <div className={styles.Button_One}>
                <div className={styles.Button_Two}>
                    <button className={styles.Cancel_btn}>Cancel</button>
                    <button className={styles.Save_btn}>Save</button>
                </div>
            </div>
        </section>
    </section>
  );
}}

export default Activity
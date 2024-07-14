"use-client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import notes from "/public/assets/Timmysmall.svg";
import styles from "./activity.module.scss";
import LevelContext from "@/context/LevelContext";

const Activity = ({level, day, type}) => {
  const { addDayItem, editItem, setActivity, updateDayItem } = useContext(LevelContext);
  const [timmyDetail, setTimmyDetail] = useState({
    id: new Date(),
    anime_image_url: "",
    anime_video_url: "",
    anime_name: "",
    description: "",
    minute: '',
    seconds: '',
  });

  const { anime_image_url, anime_video_url, anime_name, description, minute, seconds, } = timmyDetail;

  useEffect(() => {
    if (editItem) {
      setTimmyDetail(editItem);
    }
  }, [editItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTimmyDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const submit = (e) => {
    e.preventDefault();
    if (editItem) {
      updateDayItem(level, type, day, timmyDetail);
    } else {
      addDayItem(level, type, day, timmyDetail);
      setActivity(false);
    }
  };


  const handleTimeChange = (e) => {
    const { value, name } = e.target;
    if (/^\d{0,2}$/.test(value)) {
        setTimmyDetail((prev) => ({
          ...prev,
          [name]: value,
        }));
    }
  };

  return (
    <div className={styles.Activity_Container}>
      <div className={styles.Add_New_Activity}>
      <b>{editItem ? 'Edit Activity' : `Add new activity / ${type}`}</b>
      </div>
      <form onSubmit={submit} className={styles.Activity_Wrapper}>
        <h4>Basic information</h4>
        <div className={styles.Activity_Head}>
          <p>
            Animation images<span>*</span>
          </p>
          <div className={styles.Activity_Form}>
            <Image
              src={notes}
              alt="plus"
              width={50}
              height={50}
              className={styles.Animation_Img}
            />
            <input
              type="text"
              id="anime_image_url"
              name="anime_image_url"
              value={anime_image_url}
              className={styles.Activity_Input}
              onChange={handleChange}
              placeholder="Input URL"
            />
          </div>
        </div>
        <div className={styles.Activity_Head}>
          <p>
            Animation Videos<span>*</span>
          </p>
          <div className={styles.Activity_Form}>
            <input
              type="text"
              id="anime_video_url"
              name="anime_video_url"
              value={anime_video_url}
              className={styles.Activity_Input}
              onChange={handleChange}
              placeholder="Input URL"
            />
          </div>
        </div>
        <div className={styles.Activity_Head}>
          <p>
            Animation Name<span>*</span>
          </p>
          <div className={styles.Activity_Form}>
            <input
              type="text"
              id="anime_name"
              name="anime_name"
              value={anime_name}
              className={styles.Activity_Input}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.Activity_Head}>
          <p>
            Description<span>*</span>
          </p>
          <div className={styles.Activity_Form}>
            <input
              id="description"
              name="description"
              value={description}
              type="text"
              className={styles.Activity_Input}
              onChange={handleChange}
            />
          </div>
        </div>
       
        <div className={styles.Activity_Head}>
          <p>
            Time<span>*</span>
          </p>
          <div className={styles.Activity_Form_two}>
            <input type="text" value={minute} id="minute" name="minute" maxLength="2" onChange={handleTimeChange}  className={styles.Activity_Input} />
            {/* <p>Min</p> */}
            <input type="text" value={seconds} id="seconds" name="seconds" maxLength="2" onChange={handleTimeChange} className={styles.Activity_Input} />
            {/* <p>Sec</p> */}
          </div>
        </div>
        <div className={styles.Button_One}>
          <div className={styles.Button_Two}>
            <button onClick={() => setActivity(false)} className={styles.Cancel_btn}>Cancel</button>
            <button type="submit" className={styles.Save_btn}>
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Activity;

"use-client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { VscAccount } from "react-icons/vsc";
import note from "../../../../public/assets/Frame 10.svg";
import notes from "../../../../public/assets/Timmysmall.svg";
import styles from "./activity.module.scss";

const Activity = ({collect, editItem, setActivity, handleUpdate}) => {
  const [timmyDetail, setTimmyDetail] = useState({
    id: new Date(),
    anime_image_url: "",
    anime_video_url: "",
    anime_name: "",
    description: "",
    type: "",
    minute: '',
    seconds: '',
  });

  const { anime_image_url, anime_video_url, anime_name, description, minute, seconds, type } = timmyDetail;

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
    // console.log(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    if (editItem) {
      handleUpdate(timmyDetail);
    } else {
      collect((prev) => [timmyDetail, ...prev]);
      setActivity(false);
    }
    console.log(timmyDetail)
  };


  const handleTimeChange = (e) => {
    const { value, name } = e.target;
    // Only allow digits and limit to 2 characters
    if (/^\d{0,2}$/.test(value)) {
        // setMinute(value)
        setTimmyDetail((prev) => ({
          ...prev,
          [name]: value,
        }));
    }
  };

  const types = [
    {
      id: 1,
      type: 'Moves',
      value: 'move'
    },
    {
      id: 2,
      type: 'Drills',
      value: 'drills'
    },
    {
      id: 3,
      type: 'Exercise',
      value: 'exercise'
    },
  ];

  return (
    <div className={styles.Activity_Container}>
      <div className={styles.Add_New_Activity}>
      <b>{editItem ? 'Edit Activity' : 'Add new activity / Exercise'}</b>
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
            Type<span>*</span>
          </p>
          <div className={styles.Activity_Form}>
            <select onChange={handleChange} name="type" id="type">
              <option>Select type</option>
              {types.map(item => (
                <option key={item.id} value={item.value}>{item.type}</option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.Activity_Head}>
          <p>
            Time<span>*</span>
          </p>
          <div className={styles.Activity_Form_two}>
            <input type="text" value={minute} id="minute" name="minute" maxLength="2" onChange={handleTimeChange}  className={styles.Activity_Input} />
            {/* <p>Min</p> */}
            {/* <input type="text" value={seconds} id="seconds" name="seconds" maxLength="2" onChange={handleTimeChange} className={styles.Activity_Input} /> */}
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

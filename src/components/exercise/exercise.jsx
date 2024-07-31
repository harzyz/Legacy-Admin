"use client";
import React, { useContext, useEffect } from "react";
import Image from "next/image";
import styles from "./exercise.module.scss";
import Timmy from "/public/assets/Timmysmall.svg";
import plus from "/public/assets/Plus.svg";
import Activity from "@/components/activity/activity";
import TimmyDetails from "@/levels/beginners/TimmyDetails";
import LevelContext from "@/context/LevelContext";
import Spinner from "../spinner";

export default function Exercise({ level, day }) {
  const {
    deleteDayItem,
    setEditItem,
    activity,
    setActivity,
    elite,
    fetchAllExercises,
  } = useContext(LevelContext);

  useEffect(() => {
    setActivity(false)
    fetchAllExercises(day, 'exercise', level)
  }, [])
  

  const addNewField = () => {
    setActivity(true);
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setActivity(true);
  };

  

  return (
    <section className={styles.Beginners_Container}>
      <Spinner />
      {!activity && (
        <div>
          <section className={styles.Activity_Container}>
            <div className={styles.Animation_Wrapper}>
              <ul>
                <li></li>
                <li></li>
                <li>Animation</li>
                <li>Activity Name</li>
                <li>Description</li>
                <li>Duration</li>
                <li>Animation URL</li>
              </ul>
            </div>
            <div className={styles.Activty_Container}>
              <div className={styles.Activty_Form}>
                {elite?.length == 0 && (
                  <div className={styles.No_Activities}>No Activites Yet</div>
                )}
                {elite?.map((timmy) => (
                  <div key={timmy._id}>
                    <TimmyDetails
                      imageProp={Timmy}
                      animationName={timmy.displayName}
                      animation={timmy.videoUrl}
                      description={timmy.description}
                      minute={timmy.duration.minutes}
                      seconds={timmy.duration.seconds}
                      onDelete={() => deleteDayItem(level, 'exercise', day, timmy.id)}
                      onEdit={() => handleEdit(timmy)}
                    />
                  </div>
                ))}

                <div onClick={addNewField} className={styles.Plus_Wrapper}>
                  <div className={styles.Plus}>
                    <Image src={plus} alt="plus" width={30} height={30} />
                    <p>Add More Fields</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      {activity && <Activity type="Exercises" day={day} level={level} />}
    </section>
  );
}

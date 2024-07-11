"use-client";
import TimmyDetails from "@/app/levels/beginners/TimmyDetails";
import Activity from "@/app/levels/elite/activity/page";
import Image from "next/image";
import React, { useState } from "react";
import Timmy from "../../../../public/assets/Timmysmall.svg";
import plus from "../../../../public/assets/Plus.svg";
import styles from './drills.module.scss'

const Drills = () => {
  const [activity, setActivity] = useState(false);
  const [moves, setMoves] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [editItem, setEditItem] = useState(null);

  const handleEdit = (item) => {
    setEditItem(item);
    setActivity(true);
  };

  const addNewField = () => {
    setActivity(true);
  };

  const deleteMove = (id) => {
    setMoves(moves.filter((move) => move.id !== id));
  };

  const handleUpdate = (updatedItem) => {
    setMoves((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditItem(null);
    setActivity(false);
  };

  return (
    <div className={styles.Beginners_Container}>
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
            {moves.length === 0 && (
              <div className={styles.No_Activities}>No Activites Yet</div>
            )}
            {moves.map((timmy) => (
              <div key={timmy.id}>
                <TimmyDetails
                  imageProp={Timmy}
                  animationName={timmy.anime_name}
                  animation={timmy.anime_image_url}
                  description={timmy.description}
                  minute={timmy.minute}
                  seconds={timmy.seconds}
                  onDelete={() => deleteMove(timmy.id)}
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
      {activity && (
        <Activity
          collect={setMoves}
          editItem={editItem}
          handleUpdate={handleUpdate}
          setActivity={setActivity}
        />
      )}
    </div>
  );
};

export default Drills;

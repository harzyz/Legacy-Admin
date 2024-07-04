"use client";
import React from "react";
import Image from "next/image";
import styles from "../elite/elite.module.scss";
import { VscAccount } from "react-icons/vsc";
import Frames from "../../../../public/assets/Frame 10.svg";
import Timmy from "../../../../public/assets/Timmysmall.svg";
import plus from "../../../../public/assets/Plus.svg";
import { useState } from "react";
import Activity from "@/app/components/activity/activity";
import TimmyDetails from "../beginners/TimmyDetails";

export default function Elite() {
  const [activity, setActivity] = useState(false);
  const [moves, setMoves] = useState([]);
  const [filterType, setFilterType] = useState("");
  const [editItem, setEditItem] = useState(null);
  

  const more = [
  
    {
      id: 1,
      gg: "Exerscise",
      value: "move",
    },
    {
      id: 2,
      gg: "Drills",
      value: "drills",
    },
    {
      id: 3,
      gg: "Moves",
      value: "exercise",
    },
  ];

  const addNewField = () => {
    setActivity(true);
  };

  const filterByMoves = (type) => {
    if (type === "") {
      return moves;
    }
    return moves.filter((move) => move.type === type);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  const deleteMove = (id) => {
    setMoves(moves.filter((move) => move.id !== id));
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setActivity(true);
  };

  const handleUpdate = (updatedItem) => {
    setMoves((prev) =>
      prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    setEditItem(null);
    setActivity(false);
  };

  const filteredMoves = filterByMoves(filterType);

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
      {!activity && (
        <div>
          <div className={styles.cat_container}>
            {more.map((item) => (
              <div
                key={item.id}
                onClick={() => handleFilterChange(item.value)}
                className={styles.selected_option}
              >
                {item.gg}
              </div>
            ))}
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
                {filteredMoves.length === 0 && <div className={styles.No_Activities}>No Activites Yet</div>}
                {filteredMoves.map((timmy) => (
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
        </div>
      )}
      {activity && (
        <Activity
          collect={setMoves}
          editItem={editItem}
          handleUpdate={handleUpdate}
          setActivity={setActivity}
        />
      )}
    </section>
  );
}

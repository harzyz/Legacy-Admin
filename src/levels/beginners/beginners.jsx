"use client";
import React, { useContext } from "react";
import Image from "next/image";
import styles from "../beginners/beginners.module.scss";
import { VscAccount } from "react-icons/vsc";
import Frames from "/public/assets/Frame 10.svg";
import { useState, useEffect } from "react";
import Activity from "@/components/activity/activity";
import Exercise from "@/components/exercise/exercise";
import Moves from "@/components/moves/moves";
import Drills from "@/components/drills/drills";
import LevelContext from "@/context/LevelContext";

export default function Beginners({ level, id }) {
  const { filterType } = useContext(LevelContext);
  const [activity, setActivity] = useState(false);
  // const [moves, setMoves] = useState([]);
  // const [filterType, setFilterType] = useState("exercise");
  const [editItem, setEditItem] = useState(null);
  // const [activeItem, setActiveItem] = useState('');

  // const pathname = usePathname();
  // const { pathname } = useRouter();

  const more = [
    {
      id: 1,
      gg: "Exerscise",
      value: "exercise",
    },
    {
      id: 2,
      gg: "Drills",
      value: "drills",
    },
    {
      id: 3,
      gg: "Moves",
      value: "moves",
    },
  ];

  const addNewField = () => {
    setActivity(true);
  };

  // const filterByMoves = (type) => {
  //   if (type === "") {
  //     return moves;
  //   }
  //   return moves.filter((move) => move.type === type);
  // };

  // const handleFilterChange = (type) => {
  //   setFilterType(type);
  // };

  // useEffect(() => {
  //   setActiveItem(pathname);
  // }, [pathname]);

  // const handleFilterChange = (itemId) => {
  //   setActiveItem(itemId);
  //   // router.push(itemId);
  // };

  // const deleteMove = (id) => {
  //   setMoves(moves.filter((move) => move.id !== id));
  // };

  // const handleEdit = (item) => {
  //   setEditItem(item);
  //   setActivity(true);
  // };

  // const handleUpdate = (updatedItem) => {
  //   setMoves((prev) =>
  //     prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
  //   );
  //   setEditItem(null);
  //   setActivity(false);
  // };

  // const filteredMoves = filterByMoves(filterType);

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
      {level}
      <div className={styles.cat_container}>
        <div className={styles.selected_option1}>{filterType}</div>
      </div>
      <p className={styles.Day_One}>Day {id}</p>
      {filterType === "Exercise" && (
        <Exercise activity={activity} setActivity={setActivity} />
      )}
      {filterType === "Moves" && (
        <Moves activity={activity} setActivity={setActivity} />
      )}
      {filterType === "Drills" && (
        <Drills activity={activity} setActivity={setActivity} />
      )}
    </section>
  );
}

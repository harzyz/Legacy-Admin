"use client";
import React from "react";
import Image from "next/image";
import styles from "../beginners/beginners.module.scss";
import { VscAccount } from "react-icons/vsc";
import Frames from "../../../../public/assets/Frame 10.svg";
import Timmy from "../../../../public/assets/Timmysmall.svg";
import plus from "../../../../public/assets/Plus.svg";
import { useState, useEffect } from "react";
// import TimmyDetails from "./TimmyDetails";
import Activity from "@/app/components/activity/activity";
import Exercise from "../../components/exercise/exercise";
import Moves from "@/app/components/moves/moves";
import Drills from "@/app/components/drills/drills";
// import { usePathname } from "next/navigation";
// import { useRouter } from 'next/router';

export default function Beginners({id}) {
  const [activity, setActivity] = useState(false);
  const [moves, setMoves] = useState([]);
  const [filterType, setFilterType] = useState("exercise");
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

  const filterByMoves = (type) => {
    if (type === "") {
      return moves;
    }
    return moves.filter((move) => move.type === type);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
  };

  // useEffect(() => {
  //   setActiveItem(pathname);
  // }, [pathname]);

  // const handleFilterChange = (itemId) => {
  //   setActiveItem(itemId);
  //   // router.push(itemId);
  // };

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
      <h3>Day {id}</h3>
      {filterType === 'exercise' && <Exercise />}
      {filterType === 'moves' && <Moves />}
      {filterType === 'drills' && <Drills />}
    </section>
  );
}

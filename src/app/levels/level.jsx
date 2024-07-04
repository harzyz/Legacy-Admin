import React from "react";
import styles from "./level.module.scss";
import Link from "next/link";

export default function Level({level}) {
  const days = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];
  return (
    <div className={styles.container}>
      <div className={styles.day_card_grid}>
        {days.map((day) => (
          <Link key={day} href={`/levels/${level}/${day}`}><div className={styles.day_card}>Day{day}</div></Link>
        ))}
      </div>
    </div>
  );
}

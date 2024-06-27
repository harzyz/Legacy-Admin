import React from 'react'
import styles from "../../levels/[id]/all.module.scss";

export default function LevelsDetails({ params }) {

    const id = params.id
  return (
    <div className={styles.All_Container}>{id}LevelsDetails</div>
  )
}

import React from "react";
import styles from "../beginners/beginners.module.scss";
import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";

const TimmyDetails = ({ imageProp,page, text,description }) => {


  return (
    <div className={styles.Timmy_Head_Two}>
      <div className={styles.Timmy_Head}>
        <input type="checkbox" className={styles.Timmy_Input} />
        <Image
          src={imageProp}
          width={50}
          height={50}
          alt="timmy"
          className={styles.Timmy_Img}
        />
      </div>

      <div className={styles.Strech_One}>
        <p>{page}</p>
      </div>
      <div className={styles.Strech_Two}>
        <p>{description}</p>
      </div>

      <div className={styles.Strech_Three}>
        <p>{text}</p>
      </div>
      <div className={styles.Strech_Four}>
        <p>01</p>
      </div>
      <div className={styles.Strech_Five}>
        <p>Lorem ipsum dolor...</p>
      </div>
      <div className={styles.Edit_Box}>
        <RiEdit2Line className={styles.Edit_Icon} />
        <RiDeleteBin6Line className={styles.Edit_Icon} />
      </div>
    </div>
    
  );
};

export default TimmyDetails;
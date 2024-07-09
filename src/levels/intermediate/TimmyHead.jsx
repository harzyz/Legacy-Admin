"use-client"
import React, { useState } from "react";
import styles from "../beginners/beginners.module.scss";
import { RiEdit2Line } from "react-icons/ri";
import { RiDeleteBin6Line } from "react-icons/ri";
import Image from "next/image";
import Modal from "@/app/components/modal/modal";

const TimmyHead = ({
  imageProp,
  animation,
  minute,
  seconds,
  description,
  animationName,
  onDelete,
  onEdit,
}) => {

  const [open, setOpen] = useState(false);
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
        <p>{animationName}</p>
      </div>
      <div className={styles.Strech_Two}>
        <p>{description}</p>
      </div>

      <div className={styles.Strech_Three}>
        <p>
          {minute}:{seconds}
        </p>
      </div>
      <div className={styles.Strech_Four}>
        <p>01</p>
      </div>
      <div className={styles.Strech_Five}>
        <p>{animation}</p>
      </div>
      <div className={styles.Edit_Box}>
        <RiEdit2Line onClick={onEdit} className={styles.Edit_Icon} />
        <RiDeleteBin6Line onClick={() => setOpen(true)} className={styles.Edit_Icon} />
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <p>Are you sure you want to delete</p>
        <div>
          <button onClick={onDelete}>YEs</button>
          <button>No</button>
        </div>
      </Modal>
    </div>
  );
};

export default TimmyHead;

import React from 'react'
import styles from "../sidebar/sidebar.module.scss";
// import variables from "../styles/variables.module.scss";
import Link from 'next/link';
import Image from 'next/image';
import card1 from "../../../public/assets/Component 6.svg";
// import home from "../../../public/assets/DribbbleLogo.svg";
import { FiHome } from "react-icons/fi";
import { FaDribbble } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { PiSignOutLight } from "react-icons/pi";

export default function Sidebar() {
  return (
    <section className={styles.Sidebar_Section}>
        <div className={styles.Logo_icon}>
            <Image
            src={card1}
            width={150}
            height={100}
             />
        </div>
        <div>
        
            <div className={styles.General_Container}>
                <h3>Genaral</h3>
                <div className={styles.General_Head}>
                    <Link href="/">
                        <div className={styles.Dashboard_Text}>
                            <FiHome className={styles.Dribble} />
                            <h4>Dashboard</h4>
                        </div>
                    </Link>
                </div>
                <div className={styles.General_Head}>
                    <Link href="/levels/beginners">
                        <div className={styles.Dashboard_Text}>
                            <FaDribbble className={styles.Dribble} />
                            <h4>Levels</h4>
                            <BsChevronDown />
                        </div>
                    </Link>
                </div>
                <h3>Accounts</h3>
                <div className={styles.General_Head}>
                    <Link href="/levels/beginners">
                        <div className={styles.Dashboard_Text}>
                            <CgProfile className={styles.Dribble} />
                            <h4>My profile</h4>
                        </div>
                    </Link>
                </div>
                <div className={styles.General_Head_Two}>
                    <Link href="/levels/beginners">
                        <div className={styles.Dashboard_Text_Two}>
                            <PiSignOutLight className={styles.Dribble_Two} />
                            <h4>LOGOUT</h4>
                        </div>
                    </Link>
                </div>
            </div>
        
        </div>
        
    </section>
  )
}

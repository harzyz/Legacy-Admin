import Image from "next/image";
import styles from "./page.module.scss";
import { VscAccount } from "react-icons/vsc";
import Frame from "../../public/assets/Frame 10.svg";
import { GoChevronDown } from "react-icons/go";
import arrow from "../../public/assets/ArrowDown.svg";
import arrowred from "../../public/assets/Group 3264.svg";
import Timmy from "../../public/assets/Timmy Action pose 4 with background 2.svg";
import Timmytwo from "../../public/assets/Timmy Action pose 5 with background 2.svg";
import Timmythree from "../../public/assets/Frame 11795.svg";
import './styles//globals.scss';
import Dashboard from "./dashboard/dashboard";
import Layout from "./components/layout/layout";
// import variables from "./page.module.scss";


export default function Home() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}

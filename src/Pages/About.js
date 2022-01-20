import styles from "./About.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Outlet,
} from "react-router-dom";
import Sidebar from "../Components/Sidebar/Sidebar";
import { WhoWeAre, Clients, Partners, Press, Services } from "./SubPages";

const About = () => {
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.sideBar}>
          <Sidebar />
        </div>

        <div className={styles.midBar}>
          {/* <WhoWeAre /> */}
          {/* <Services /> */}
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default About;

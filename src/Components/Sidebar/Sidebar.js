import styles from "./Sidebar.module.css";
import { sidebarData } from "./sidebardata";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <main>
      {sidebarData.map((item) => {
        const { id, label, name } = item;
        return (
          <section className={styles.label} name={label} key={id}>
            <Link className={styles.link} to={`/about/${name}`}>
              {label}
            </Link>
          </section>
        );
      })}
    </main>
  );
};

export default Sidebar;

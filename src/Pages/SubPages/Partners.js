import { partnersData } from "./partnersData";
import styles from "./Partners.module.css";

const Partners = () => {
  return (
    <div>
      <h1 className={styles.sectionTitle}>Partners</h1>
      <div className={styles.underline}></div>
      <div className={styles.container}>
        {partnersData.map((partner) => {
          const { url, id, name, img } = partner;
          return (
            <div key={id} className={styles.partner}>
              <img className={styles.image} src={img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Partners;

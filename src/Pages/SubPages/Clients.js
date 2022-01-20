import { clientData } from "./clientData";
import styles from "./Clients.module.css";

const Clients = () => {
  return (
    <div>
      <h1 className={styles.sectionTitle}>Clients</h1>
      <div className={styles.underline}></div>
      <div className={styles.container}>
        {clientData.map((client) => {
          const { url, id } = client;
          return (
            <div key={id} className={styles.client}>
              <img className={styles.image} src={url} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Clients;

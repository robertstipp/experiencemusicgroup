import styles from "./PackageCard.module.css";

const PackageCard = ({ id, name, cost, services }) => {
  return (
    <main key={id} className={styles.main}>
      <h1 className={styles.name}>{name}</h1>
      <h3 className={styles.cost}>{cost}</h3>
      <p className={styles.services}>{services}</p>
      <button className={styles.btn}>Select Package</button>
    </main>
  );
};

export default PackageCard;

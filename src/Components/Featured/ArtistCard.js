import styles from "./ArtistCard.module.css";

const ArtistCard = ({ name, url, website, text }) => {
  return (
    <main className={styles.card}>
      <img src={url} alt={name} className={styles.image} />
      <section className={styles.artist}>{name}</section>
    </main>
  );
};

export default ArtistCard;

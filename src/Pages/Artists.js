import ArtistCard from "../Components/Featured/ArtistCard";
import { artists } from "./featuredArtistsData";
import styles from "./Artists.module.css";

const Artists = () => {
  return (
    <main>
      <h1 className={styles.label}>Artists</h1>
      <section className={styles.container}>
        {artists.map((artist) => {
          console.log("hello");
          const { id, name, url, website, text } = artist;
          return <ArtistCard key={id} name={name} url={url} />;
        })}
      </section>
    </main>
  );
};

export default Artists;

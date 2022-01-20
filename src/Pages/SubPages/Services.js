import styles from "./Services.module.css";

const Services = () => {
  return (
    <div>
      <h1 className={styles.sectionTitle}>Services</h1>
      <div className={styles.underline}></div>
      <h1 className={styles.serviceTitle}>BRANDING, IMAGING AND MESSAGING</h1>
      <p className={styles.serviceText}>
        Working with artists to optimize their brands in order to attract a
        greater reach, Coordinating the efforts of all campaign partners,
        ensuring that the integrity of artists’ brand and voice are consistent
        across all platforms and that there is 100% team communication between
        artist, label, management, press, radio and other partners{" "}
      </p>
      <h1 className={styles.serviceTitle}>SOCIAL MEDIA MARKETING </h1>
      <p className={styles.serviceText}>
        Managing, developing and coordinating all social media messaging and
        outreach to make sure all of the information is current, accurate,
        consistent, and engaging.
      </p>
      <h1 className={styles.serviceTitle}>DIGITAL CONTENT STRATEGY</h1>
      <p className={styles.serviceText}>
        Curating and disseminating a regular stream of promotional content
        online and ensure content is created with specific applications and
        placements in mind in order to maximize visibility and awareness.{" "}
      </p>
      <h1 className={styles.serviceTitle}>MUSIC LICENSING</h1>
      <p className={styles.serviceText}>
        Matching up-and-coming indie artists with brands as well as creatives in
        film, television and advertising and video games.
      </p>
      <h1 className={styles.serviceTitle}>PLAYLIST PROMOTION</h1>
      <p className={styles.serviceText}>
        The playlist is the most powerful medium in music. Our team works with
        over 500 Playlist Curators to get artists placed and help create
        momentum as well as builds customized playlists for brands.
      </p>
    </div>
  );
};

export default Services;

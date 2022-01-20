import styles from "./Packages.module.css";
import { packages } from "./packagesData";
import PackageCard from "../Components/PackageCard/PackageCard";

const Packages = () => {
  return (
    <main>
      <h1>Artist Momentum Packages</h1>
      <p>
        Music Lincensing, Social Media Marketing, and Artist Branding are three
        of the most underutilized and least understood areas in the music
        business. Artist that have a good grasp on how to optimize their brands
        using these disciplines see far greater reach, much more fan engagement
        and gather a much better return on their investment. Experience Music
        Group can assist in creating momentum with each new song release.
      </p>
      <div className={styles.packagecontainer}>
        {packages.map((pack) => {
          const { id, name, cost, services } = pack;
          return (
            <PackageCard key={id} name={name} cost={cost} services={services} />
          );
        })}
      </div>
    </main>
  );
};

export default Packages;

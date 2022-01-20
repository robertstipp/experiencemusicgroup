import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { links, social } from "./data.js";
import { FaTiktok } from "react-icons/fa";
import Logo from "./logo.png";

const Navbar = () => {
  return (
    <>
      <div className={styles.header}>
        <Link to="/">
          <img className={styles.logo} src={Logo} alt="" />
        </Link>
        <div className={styles.container}>
          <div className={styles.links}>
            {links.map((link) => {
              const { id, name, label } = link;
              return (
                <div className={styles.link} key={id}>
                  <Link className={styles.link} to={`/${name}`}>
                    {label}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.social}>
          {social.map((socialicon) => {
            const { id, icon, url } = socialicon;
            return (
              <div key={id} className={styles.socialicon}>
                <a className={styles.sociallink} href={url}>
                  {icon}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;

import React from "react";
import styles from "../Styles/Footer.module.css";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.textpart}>
        <h1>Reborn wear</h1>
        <p>
          Elevating sustainable fashion, Reborn Wear blends eco-friendly
          materials with modern style. We believe in creating timeless,
          high-quality clothing that respects both the planet and your wardrobe.
          Join us in redefining fashion, one conscious choice at a time.
        </p>
      </div>
      <div className={styles.iconpart}>
        <FaFacebook className={styles.facebook}/>
        <FaTwitter className={styles.twitter}/>
        <FaLinkedin className={styles.linkedin}/>
        <FaDiscord className={styles.discord}/>
        <FaYoutube className={styles.youtube}/>
      </div>
      <div className={styles.copyright}>
        <p>
          Copyright &copy; 2024 | <span>Reborn Wear</span>
        </p>
        <p><span><FaMapMarkerAlt/></span> Basundhara, Kathmandu</p>
      </div>
    </div>
  );
};

export default Footer;

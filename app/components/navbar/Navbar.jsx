import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToogle from "../themeToogle/ThemeToogle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={28} height={28} />
        <Image src="/twitter.png" alt="tweeter" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div>

      <div className={styles.logo}>
        <Link href="/">thapablogs </Link>
      </div>

      <div className={styles.links}>
        <ThemeToogle />
        <Link className={styles.link} href="/">
          Homepage
        </Link>
        <Link className={styles.link} href="/contact">
          Contact
        </Link>
        <Link className={styles.link} href="/about">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;

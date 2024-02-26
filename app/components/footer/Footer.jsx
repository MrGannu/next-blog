import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/user.png" alt="logo-image" width={50} height={50} />
          <h1 className={styles.logoText}>thapablog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          laborum, aliquid fugiat est nam, quaerat doloribus rerum vero
          obcaecati odit id molestiae maxime hic! Voluptatibus ut nihil debitis
          laborum inventore.
        </p>
        <div className={styles.icons}>
          <Image
            src="/facebook.png"
            alt="facebook-logo"
            width={18}
            height={18}
          />
          <Image
            src="/instagram.png"
            alt="instagram-logo"
            width={18}
            height={18}
          />
          <Image src="/twitter.png" alt="twitter-logo" width={18} height={18} />
          <Image
            src="/pinterest.png"
            alt="pinterest-logo"
            width={18}
            height={18}
          />
          <Image src="/youtube.png" alt="youtube-logo" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Twitter</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

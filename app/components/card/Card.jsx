import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ blog, id }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={blog.image}
          alt="post-image"
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{blog.publishedAt} - </span>
          <span className={styles.category}>{blog.category}</span>
        </div>
        <Link href="/">
          <h1 className={styles.title}>{blog.title?.substring(0, 150)} ...</h1>
        </Link>
        <p className={styles.desc}>{blog.desc?.substring(0, 300)} ...</p>
        <Link href={`/post/${id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;

import React from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.style}`}
      >
        <Image
          src="/user.png"
          alt="category-image"
          width={30}
          height={30}
          className={styles.image}
        />
        Style
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.fashion}`}
      >
        <Image
          src="/user.png"
          alt="category-image"
          width={30}
          height={30}
          className={styles.image}
        />
        Fashion
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.food}`}
      >
        <Image
          src="/user.png"
          alt="category-image"
          width={30}
          height={30}
          className={styles.image}
        />
        Food
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.travel}`}
      >
        <Image
          src="/user.png"
          alt="category-image"
          width={30}
          height={30}
          className={styles.image}
        />
        Travel
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.culture}`}
      >
        <Image
          src="/user.png"
          alt="category-image"
          width={30}
          height={30}
          className={styles.image}
        />
        Culture
      </Link>
      <Link
        href="/blog?cat=style"
        className={`${styles.categoryItem} ${styles.coding}`}
      >
        <Image
          src="/user.png"
          alt="category-image"
          width={30}
          height={30}
          className={styles.image}
        />
        Coding
      </Link>
    </div>
  );
};

export default CategoryList;

import React from "react";
import styles from "./menuPosts.module.css";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "@/app/data";

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {blogData.slice(0, 4).map((blog) => {
          return (
            <Link href={`/post/${blog.id}`} key={blog.id} className={styles.item}>
              {withImage && (
                <div className={styles.imageContainer}>
                  <Image
                    src={blog.image}
                    alt="manu-image"
                    fill
                    className={styles.image}
                  />
                </div>
              )}
              <div className={styles.textContainer}>
                <span
                  className={`${styles.category} ${
                    styles[blog.category.toLowerCase()]
                  }`}
                >
                  {blog.category}
                </span>

                <h3 className={styles.postTitle}>
                  {blog.title?.substring(0, 100)} ...
                </h3>
                <div className={styles.detail}>
                  <span className={styles.username}>
                    {blog.user.username} -{" "}
                  </span>
                  <span className={styles.date}>{blog.publishedAt}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuPosts;

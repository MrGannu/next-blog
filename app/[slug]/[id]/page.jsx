"use client";

import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/app/comments/Comments";
import Menu from "@/app/components/menu/Menu";
import { blogData } from "@/app/data";
import { useParams } from "next/navigation";
import Link from "next/link";

const SinglePage = () => {
  const { id } = useParams();
  const singleBlog = blogData.find((blog) => blog.id === id);
  if (!singleBlog) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{singleBlog.title}</h1>
          <Link href="/profile">
            <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image
                  src={singleBlog.user.image}
                  alt="post-image"
                  fill
                  sizes=""
                  className={styles.avatar}
                />
              </div>
              <div className={styles.userTextContainer}>
                <span className={styles.username}>
                  {singleBlog.user.username}
                </span>
                <span className={styles.date}>{singleBlog.publishedAt}</span>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={singleBlog.image}
            alt="post-image"
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>{singleBlog.desc}</p>
          </div>
          <div className={styles.comment}>
            <Comments comments={singleBlog.comments} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;

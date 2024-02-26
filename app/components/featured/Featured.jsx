"use client";

import React, { useState, useEffect } from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/app/data";

const Featured = () => {
  const [latestBlog, setLatestBlog] = useState(null);

  useEffect(() => {
    const sortedBlogData = [...blogData].sort((a, b) => b.id - a.id);
    setLatestBlog(sortedBlogData.slice(-7)[0]);
  }, [blogData]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, thapa blogs here!</b> <br /> Discover my stories and creative
        ideas.
      </h1>
      {latestBlog && ( // Conditionally render if latestBlog is not null
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image
              src={latestBlog.image}
              alt=""
              width={500} // Set width and height
              height={300}
              className={styles.image}
            />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>{latestBlog.title}</h1>
            <p className={styles.postDesc}>{latestBlog.desc}</p>
            <Link href={`/post/${latestBlog.id}`} className={styles.link}>
              Read More
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Featured;

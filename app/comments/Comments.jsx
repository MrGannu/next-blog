import React from "react";
import styles from "./comment.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = ({ comments }) => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment...."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        {comments.map((comment) => {
          return (
            <div className={styles.comment}>
              <div className={styles.user}>
                <div className={styles.userImageContainer}>
                  <Image
                    src={comment.image}
                    alt="post-image"
                    width={50}
                    height={50}
                    className={styles.avatar}
                  />
                </div>
                <div className={styles.userTextContainer}>
                  <span className={styles.username}>{comment.username}</span>
                  <span className={styles.date}>{comment.commentedAt}</span>
                </div>
              </div>
              <p className={styles.desc}>{comment.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;

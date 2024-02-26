"use client";
import React, { useState } from "react";
import styles from "./authlinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const status = "notauthenticated";
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      {status === "notauthenticated" ? (
        <Link className={styles.link} href="/login">
          Login
        </Link>
      ) : (
        <Link className={styles.link} href="/write">
          write <span>Logout</span>
        </Link>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <Link href="/write">
              write<span>Logout</span>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthLinks;

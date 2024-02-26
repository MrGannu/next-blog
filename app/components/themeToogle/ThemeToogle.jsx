"use client";
import React, { useContext } from "react";
import styles from "./themetoogle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/app/context/ThemeContext";

const ThemeToogle = () => {
  const { toggle, theme } = useContext(ThemeContext);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark" ? { background: "#ffffff" } : { background: "#1f2020" }
      }
    >
      <Image src="/moon.png" alt="" width={14} height={14} />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 3, background: "#1f2020" }
            : { right: 3, background: "#ffffff" }
        }
      ></div>
      <Image src="/sun.png" alt="" width={14} height={14} />
    </div>
  );
};

export default ThemeToogle;

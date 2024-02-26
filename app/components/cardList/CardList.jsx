"use client";

import React, { useState } from "react";
import styles from "./cardlist.module.css";
import Pagination from "../pagination/Pagination";
import Card from "../card/Card";
import { blogData } from "@/app/data";

const ITEMS_PER_PAGE = 5;
const CardList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = blogData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = blogData.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.container}>
      <div className={styles.titlediv}>
        <h1 className={styles.title}>Recent Posts :</h1>
        <h1 className={styles.subtitle}>Total blogs: {currentItems.length}</h1>
      </div>
      {currentItems.map((blog) => {
        return <Card blog={blog} id={blog.id} key={blog.id} />;
      })}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default CardList;

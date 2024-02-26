import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  const isNextDisabled = currentPage === totalPages;

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={() => handleClick(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className={styles.button}
        onClick={() => handleClick(currentPage + 1)}
        disabled={isNextDisabled}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

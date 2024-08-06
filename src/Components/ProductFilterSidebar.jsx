"use client";

import React, { useState } from "react";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import styles from "./ProductFilterSidebar.module.css";
import { categories } from "@/constants/constants";

const toReadableFormat = (text) => {
  return text
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
};

const ProductFilterSidebar = ({ handleClose }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    men: [],
    occasion: [],
    work: [],
    fabric: [],
    segment: [],
    suitableFor: [],
    rawMaterials: [],
    pattern: [],
  });
  const [openCategories, setOpenCategories] = useState([]);

  const handleCheckboxChange = (category, option) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(option)
        ? prev[category].filter((item) => item !== option)
        : [...prev[category], option],
    }));
  };

  const handleUnselectAll = (category) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: [],
    }));
  };

  const handleCategoryToggle = (category) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.checkboxSection}>
        <label className={styles.customCheckboxLabel}>
          <input type="checkbox" className={styles.customCheckbox} />
          Customizable
        </label>
        <IoClose className={styles.closeIcon} onClick={() => handleClose()} />
      </div>
      {Object.keys(categories).map((category) => (
        <div key={category} className={styles.categorySection}>
          <button
            onClick={() => handleCategoryToggle(category)}
            className={`${styles.categoryButton} ${
              openCategories.includes(category) ? styles.open : ""
            }`}
          >
            {toReadableFormat(category)}
            <span className={styles.arrow}>
              {openCategories.includes(category) ? (
                <FaChevronUp />
              ) : (
                <FaChevronDown />
              )}
            </span>
          </button>
          <div className={styles.dropdownMenu}>
            <label className={styles.dropdownLabel}>All</label>
            {openCategories.includes(category) && (
              <>
                <button
                  onClick={() => handleUnselectAll(category)}
                  className={styles.unselectButton}
                >
                  Unselect All
                </button>
                {categories[category].map((option) => (
                  <label key={option} className={styles.dropdownLabel}>
                    <input
                      type="checkbox"
                      checked={selectedFilters[category].includes(option)}
                      onChange={() => handleCheckboxChange(category, option)}
                      className={styles.checkbox}
                    />
                    {option}
                  </label>
                ))}
              </>
            )}
          </div>
        </div>
      ))}
    </aside>
  );
};

export default ProductFilterSidebar;

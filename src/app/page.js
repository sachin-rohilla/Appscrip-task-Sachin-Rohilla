"use client";
import { useState, useEffect } from "react";
import Head from "next/head";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import ProductFilterSidebar from "@/Components/ProductFilterSidebar";
import ProductDetailsCard from "@/Components/ProductDetailsCard";

import { sortOptions } from "@/constants/constants";
import Loader from "@/Components/Loader";

import styles from "./page.module.css";

export default function Home() {
  const [showFilters, setShowFilters] = useState(false);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleFilters = () => {
    setShowFilters((prevShowFilters) => !prevShowFilters);
  };
  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=15"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <>
      <Head>
        <title>ShopNow | Explore Our Latest Products</title>
        <meta
          name="description"
          content="Browse our latest collection of products at ShopNow. Find the best deals, explore new arrivals, and shop your favorites from various categories."
        />
      </Head>
      <section className={styles.mainContainer}>
        <header className={styles.header}>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </header>
        <div className={styles.controls}>
          <div className={styles.filterToggle}>
            <p className={styles.itemsCount}>{products?.length} ITEMS</p>
            <button onClick={toggleFilters} className={styles.filterButton}>
              {showFilters ? (
                <>
                  <IoIosArrowBack />
                  HIDE FILTER
                </>
              ) : (
                <>
                  <IoIosArrowForward />
                  SHOW FILTER
                </>
              )}
            </button>
          </div>
          <div className={styles.filterSelectContainer}>
            <button
              onClick={toggleFilters}
              className={styles.filterButtonMobile}
            >
              Filter
            </button>
            <select className={styles.sortSelect}>
              {sortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={styles.mainContent}>
          {showFilters && (
            <>
              <div className={styles.overlay} onClick={toggleFilters}></div>
              <div
                className={`${styles.filterSidebar} ${
                  showFilters ? styles.sidebarOpen : ""
                }`}
              >
                <ProductFilterSidebar handleClose={toggleFilters} />
              </div>
            </>
          )}
          <div className={styles.productContent}>
            <ProductDetailsCard productData={products} />
          </div>
        </div>
      </section>
    </>
  );
}

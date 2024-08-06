"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { CiBag1, CiHeart, CiSearch, CiUser } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

import { headerLinks } from "@/constants/constants";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prevState) => !prevState);

  const handleClickOutside = (event) => {
    if (
      menuOpen &&
      !event.target.closest(`.${styles.mobileMenu}`) &&
      !event.target.closest(`.${styles.menuIcon}`)
    ) {
      setMenuOpen(false);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main Navigation">
        <div className={styles.leftSection}>
          <FiMenu
            aria-label="Menu"
            className={styles.menuIcon}
            onClick={toggleMenu}
            size={25}
          />
          <Link href={"/"}>
            <Image
              src="/Logo.svg"
              alt="Company Logo"
              width={50}
              height={25}
              className={styles.logoImage}
            />
          </Link>
        </div>
        <h1 className={styles.logoText}>LOGO</h1>
        <div className={styles.actions}>
          <CiSearch aria-label="Search" size={25} />
          <CiHeart aria-label="Wishlist" size={25} />
          <CiBag1 aria-label="Cart" size={25} />
          <CiUser
            aria-label="Account"
            size={25}
            className={styles.desktopOnly}
          />
          <select
            className={`${styles.languageSelector} ${styles.desktopOnly}`}
          >
            <option value="English">ENG</option>
            <option value="Hindi">HINDI</option>
          </select>
        </div>
      </nav>
      <div className={styles.links} aria-label="Header Links">
        {headerLinks.map((link) => (
          <Link href={link.href} key={link.name} className={styles.link}>
            {link.name}
          </Link>
        ))}
      </div>
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <IoClose className={styles.closeIcon} onClick={toggleMenu} />
          <nav aria-label="Mobile Navigation">
            {headerLinks.map((link) => (
              <Link href={link.href} key={link.name} className={styles.link}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

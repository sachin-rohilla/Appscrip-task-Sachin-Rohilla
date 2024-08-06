"use client";
import { useState } from "react";
import Image from "next/image";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {
  infoLinks,
  paymentMethods,
  quickLinks,
  socialLinks,
} from "@/constants/constants";

import styles from "./Footer.module.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <footer className={styles.container}>
      <main className={styles.main}>
        <div className={styles.upperSection}>
          <div className={styles.hero}>
            <h1 className={styles.heroTitle}>Be the First to Know</h1>
            <p className={styles.heroSubtitle}>
              Sign up for updates from Mätta Muse.
            </p>
            <form onSubmit={handleSubmit} className={styles.heroForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your e-mail..."
                className={styles.heroInput}
                aria-label="Email address"
              />
              <button type="submit" className={styles.heroButton}>
                Subscribe
              </button>
            </form>
          </div>

          <div className={styles.contact}>
            <h2>Contact Us</h2>
            <span className={styles.contactInfo}>
              <p>+44 221 133 5360</p>
              <p>
                <a
                  href="mailto:customercare@mettamuse.com"
                  style={{ color: "#fff", textDecoration: "none" }}
                >
                  customercare@mettamuse.com
                </a>
              </p>
            </span>
            <h2>Currency</h2>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <Image
                src="/us.svg"
                alt="Currency symbol for USD"
                width={40}
                height={40}
              />
              <p>USD</p>
            </div>
            <p style={{ fontSize: "10px" }} className={styles.currencyInfo}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>

        <div className={styles.horizontalLine}></div>

        <div className={styles.lowerSection}>
          <div className={styles.infoSection}>
            <h2
              onClick={() => toggleAccordion(0)}
              className={activeAccordion === 0 ? styles.active : ""}
            >
              Mätta Muse
              {activeAccordion === 0 ? (
                <FaChevronUp className={styles.accordionIcon} />
              ) : (
                <FaChevronDown className={styles.accordionIcon} />
              )}
            </h2>
            <div
              className={`${styles.accordionContent} ${
                activeAccordion === 0 ? styles.active : ""
              }`}
            >
              <ul>
                {infoLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.infoSection}>
            <h2
              onClick={() => toggleAccordion(1)}
              className={activeAccordion === 1 ? styles.active : ""}
            >
              QUICK LINKS
              {activeAccordion === 1 ? (
                <FaChevronUp className={styles.accordionIcon} />
              ) : (
                <FaChevronDown className={styles.accordionIcon} />
              )}
            </h2>
            <div
              className={`${styles.accordionContent} ${
                activeAccordion === 1 ? styles.active : ""
              }`}
            >
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.infoSection}>
            <h2
              onClick={() => toggleAccordion(2)}
              className={activeAccordion === 2 ? styles.active : ""}
            >
              FOLLOW US
              {activeAccordion === 2 ? (
                <FaChevronUp className={styles.accordionIcon} />
              ) : (
                <FaChevronDown className={styles.accordionIcon} />
              )}
            </h2>
            <div
              className={`${styles.accordionContent} ${
                activeAccordion === 2 ? styles.active : ""
              }`}
            >
              <ul className={styles.socialIcons}>
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={link.src}
                        alt={link.alt}
                        width={35}
                        height={35}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <h2 style={{ borderBottom: "none", paddingBottom: "0" }}>
              Mättä Muse Accepts
            </h2>
            <ul className={styles.paymentIcons}>
              {paymentMethods.map((method, index) => (
                <li key={index}>
                  <Image
                    src={method.src}
                    alt={method.alt}
                    width={45}
                    height={30}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.footer}>
          <p>Copyright © 3023 Mättä Muse. All rights reserved.</p>
        </div>
      </main>
    </footer>
  );
}

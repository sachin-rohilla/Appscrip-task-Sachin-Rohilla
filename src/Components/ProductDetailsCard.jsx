import Image from "next/image";
import { GoHeart } from "react-icons/go";

import styles from "./ProductDetailsCard.module.css";
import Link from "next/link";

const ProductDetailsCard = ({ productData }) => {
  return (
    <main className={styles.container}>
      {productData?.length > 0 &&
        productData.map((item) => (
          <div className={styles.card} key={item.id}>
            <div className={styles.imageContainer}>
              <Image
                src={item.image}
                alt={`Image of ${item.title}`}
                layout="fill"
                className={styles.image}
              />
            </div>
            <div className={styles.details}>
              <span className={styles.mobileTitle}>
                <h2 className={styles.title}>{item.title}</h2>
                <button
                  className={styles.mobilewishlistButton}
                  aria-label={`Add ${item.title} to wishlist`}
                >
                  <GoHeart />
                </button>
              </span>

              <div className={styles.description}>
                <span>
                  <Link href="/login" className={styles.signInText}>
                    Sign in
                  </Link>{" "}
                  or Create an account to see pricing
                </span>
                <button
                  className={styles.wishlistButton}
                  aria-label={`Add ${item.title} to wishlist`}
                >
                  <GoHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
    </main>
  );
};

export default ProductDetailsCard;

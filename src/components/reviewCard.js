import React from "react";
import Image from "next/image";
import styles from "../styles/ReviewCard.module.css";
function ReviewCard({ url, name, message, className }) {
  const firstName = name.split(" ")[0];
  return (
    <section className={`${styles.reviewCard} ${className}`}>
      <div>
        <Image
          className={styles.image}
          src={`/image-${firstName.toLowerCase()}.jpg`}
          width={50}
          height={50}
          alt="customer image"
        />
        <div>
          <p>{name}</p>
          <p> Verified Buyer </p>
        </div>
      </div>

      <p>&quot; {message} &quot;</p>
    </section>
  );
}

export default ReviewCard;

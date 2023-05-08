import React from "react";
import Star from "./star";
import styles from "../styles/Rating.module.css";
function Rating({ starNum = 5, text, className }) {
  const stars = [];
  for (let i = 0; i < starNum; i++) {
    stars.push(<Star key={i} />);
  }

  return (
    <section className={`${styles.rating} ${className}`}>
      <div>{stars}</div>
      <p>{text}</p>
    </section>
  );
}

export default Rating;

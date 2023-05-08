import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Rating, ReviewCard } from "@/components";
import Link from "next/link";

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.section1}>
        <div className={styles.heroText}>
          <h1>10,000+ of our users love our products.</h1>
          <p>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className={styles.ratingsContainer}>
          <Rating
            className={styles.rating1}
            text={"Rated 5 Stars in Reviews"}
          />
          <Rating
            className={styles.rating2}
            text={"Rated 5 Stars in Report Guru"}
          />
          <Rating
            className={styles.rating3}
            text={"Rated 5 Stars in BestTech"}
          />
        </div>
      </div>
      <div className={styles.section2}>
        <ReviewCard
          className={styles.review1}
          name={"Colton Smith"}
          message={
            "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent"
          }
        />

        <ReviewCard
          className={styles.review2}
          name={"Irene Roberts"}
          message={
            "Customer services is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and teh speed of delivery."
          }
        />

        <ReviewCard
          className={styles.review3}
          name={"Anne Wallace"}
          message={
            "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommended them to everyone!"
          }
        />
      </div>

      <p className={`${styles.reference}`}>
        Challenge by{" "}
        <Link
          className={`${styles.link}`}
          href="https://www.frontendmentor.io/profile/faisalahmed11"
        >
          Frontend Mentor
        </Link>{" "}
        codded by{" "}
        <Link
          className={`${styles.link}`}
          href={"https://twitter.com/FaisalAhmed_01"}
        >
          Faisal Ahmed
        </Link>
      </p>
    </main>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

function Home() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const eventListner = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    setWidth(window.innerWidth);
    return () => {
      window.removeEventListener("resize", eventListner);
    };
  }, []);
  return (
    <main className={`${styles.main}`}>
      <div className={`${styles.card}`}>
        <section className={`${styles.cardSection}`}>
          <h1>Get <span className={`${styles.insights}`}>insights</span> that help your business grow.</h1>
          <p>
            Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
          </p>
          <div className={`${styles.dataContainer}`}>
            <div>
              <p>10K+</p>
              <p>COMPANIES</p>
            </div>
            <div>
              <p>314</p>
              <p>TEMPLATES</p>
            </div>
            <div>
              <p>12M+</p>
              <p>QUERIES</p>
            </div>
          </div>
        </section>
        <div className={`${styles.imageContainer}`}>
          <Image
            className={`${styles.image}`}
            src={
              width >= 375
                ? "/image-header-desktop.jpg"
                : "/image-header-mobile.jpg"
            }
            width={500}
            height={500}
            alt="header-image"
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
      </div>
    </main>
  );
}

export default Home;

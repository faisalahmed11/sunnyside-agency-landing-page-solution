import React from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

function Home() {
  return (
    <main className={`${styles.main}`}>
      <div className={`${styles.card}`}>
        <Image
          className={`${styles.hero}`}
          src={"/illustration-hero.svg"}
          width={500}
          height={500}
          alt="background-pattern"
        />
        <section className={`${styles.bodySection}`}>
          <p className={`${styles.cardTitle}`}>Order Summary</p>
          <p className={`${styles.cardBodyText}`}>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className={`${styles.planContainer}`}>
            <div className={`${styles.plan2ndContainer}`}>
              <Image
                src={"/icon-music.svg"}
                alt="music icon"
                width={50}
                height={50}
              />

              <div className={`${styles.planSubContainer}`}>
                <p className={`${styles.planText1}`}>Annual Plan</p>
                <p className={`${styles.planText2}`}>$59.99/year</p>
              </div>
            </div>
            <Link className={`${styles.changeLink}`} href={"/"}>
              Change
            </Link>
          </div>
          <button className={`${styles.proceedButton}`}>
            Proceed to Payment
          </button>
          <button className={`${styles.cancelButton}`}>Cancel Order</button>
        </section>
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

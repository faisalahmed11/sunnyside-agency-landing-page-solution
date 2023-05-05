import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
const Card = ({ src, className, title, bodyText }) => {
  return (
    <div className={className}>
      <Image className={`${styles.icon}`} src={src} width={60} height={60} alt="icon" />
      <h1>{title}</h1>
      <p>{bodyText}</p>
      <button>Learn More</button>
    </div>
  );
};

function Home() {
  return (
    <main className={`${styles.main}`}>
     <div className={`${styles.temporary}`}>

      <div className={`${styles.mainCard}`}>
        <Card className={styles.card1} title={"SEDANS"} src={"/icon-sedans.svg"} 
bodyText={"Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."}

        />
        <Card className={styles.card2} title={"SUVS"} src={"/icon-suvs.svg"} 
bodyText={"Take an SUV for its spacious interior, power, and versatility. Perfect ofr your next family vacation and off-road adventures."}

        />
        <Card className={styles.card3} title={"LUXURY"} src={"/icon-luxury.svg"} 
bodyText={"Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."}
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

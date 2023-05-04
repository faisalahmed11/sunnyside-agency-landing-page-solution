import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
function Home() {
  return (
    <main className={`${styles.main}`}>
      <div className={`${styles.card}`}>
        <div className={`${styles.imageContainer}`}>
          <Image
            className={`${styles.image}`}
            src={"/image-equilibrium.jpg"}
            alt="equilibrium image"
            width={300}
            height={300}
          />
          <div className={`${styles.hoverIcon}`}>
            <Image
              src={"/icon-view.svg"}
              alt="view icon"
              width={42}
              height={42}
            />
          </div>
        </div>
        <p className={`${styles.title}`}>Equilibrium #3429</p>
        <p className={`${styles.bodyText}`}>
          Our Equilibrium collection promotes balance and calm
        </p>
        <div className={`${styles.priceContainer}`}>
          <div>
            <Image
              src={"/icon-ethereum.svg"}
              alt="eth icon"
              width={13}
              height={19}
            />{" "}
            <p>0.041ETH</p>
          </div>
          <div>
            <Image
              src={"/icon-clock.svg"}
              alt="clock icon"
              width={18}
              height={18}
            />
            <p>3 days left</p>
          </div>
        </div>
        <div className={`${styles.hr}`} />
        <div className={`${styles.avatarContainer}`}>
          <Image
            className={`${styles.avatar}`}
            src={"/image-avatar.png"}
            alt="avatar"
            width={32}
            height={32}
          />{" "}
          <p>
            Creation of{" "}
            <Link href={"/"} className={`${styles.avatarLink}`}>
              Jules Wyvern
            </Link>
          </p>
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

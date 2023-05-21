import React from "react";
import Image from "next/image";
import styles from "../styles/AboutSection.module.css";
const Card = ({ src, name, tag, text }) => (
  <div className={`${styles.card}`}>
    {" "}
    <Image
      className={`${styles.image}`}
      alt=""
      src={src}
      width={300}
      height={300}
    />
    <h2>{name}</h2>
    <span>{tag}</span>
    <p>{text}</p>
    <button> Contact</button>
  </div>
);

function AboutSection() {
  return (
    <section id="about" className={`${styles.aboutSection}`}>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.{" "}
      </p>
      <div>
        <Card
          src={"/team2.jpg"}
          name={"John Doe"}
          tag={"CEO & Founder"}
          text={
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
          }
        />
        <Card
          src={"/team1.jpg"}
          name={"Jane Doe"}
          tag={"Architect"}
          text={
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
          }
        />
        <Card
          src={"/team3.jpg"}
          name={"Mike Ross"}
          tag={"Architect"}
          text={
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
          }
        />
        <Card
          src={"/team4.jpg"}
          name={"Dan Star"}
          tag={"Architect"}
          text={
            "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
          }
        />
      </div>
    </section>
  );
}

export default AboutSection;

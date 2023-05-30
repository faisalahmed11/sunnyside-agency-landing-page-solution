import React from "react";
import styles from "../styles/About.module.scss";
import Image from "next/image";
function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutParallax}>
        <span>
          MY <span>WEBSITE</span> LOGO
        </span>
      </div>
      <h1 id="about">About Me</h1>
      <i>I love photography</i>

      <p>
        We have created a fictional &quot;personal&quot; website/blog, and our
        fictional character is a hobby photographer. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className={styles.avatarContainer}>
        <div>
          <p>My Name</p>
          <Image
            className={styles.avatar}
            src={"/avatar.jpg"}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <p>
          Welcome to my website. I am lorem ipsum consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <p>Im really good at:</p>

      <div className={styles.perContainer}>
        <p className={styles.photography}>Photography</p>
        <p className={styles.photographyPer}>90%</p>
        <p className={styles.webDesign}>Web Design</p>
        <p className={styles.webDesignPer}>85%</p>
        <p className={styles.photoshop}>Photoshop</p>
        <p className={styles.photoshopPer}>75%</p>
      </div>

      <div className={styles.dataContainer}>
        <div>
          <p>14+</p>
          <p>Partners</p>
        </div>
        <div>
          <p>55+</p>
          <p>Projects Done</p>
        </div>
        <div>
          <p>89+</p>
          <p>Happy Clients</p>
        </div>
        <div>
          <p>150+</p>
          <p>Meetings</p>
        </div>
      </div>
    </section>
  );
}

export default About;

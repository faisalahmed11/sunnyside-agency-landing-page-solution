import React from "react";
import Image from "next/image";
import styles from "../styles/FirstSection.module.css";
function FirstSection() {
  return (
    <section id="band" className={`${styles.mainSection}`}>
      <h1> The Band</h1>
      <i>We love music</i>
      <p>
        We have created a fictional band website. Lorem ipsum dolor sit amet,
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
      <div className={`${styles.membersContainer}`}>
        <div>
          <p>Name</p>
          <Image
            className={`${styles.memberImage}`}
            src={"/bandmember.jpg"}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div>
          <p>Name</p>
          <Image
            className={`${styles.memberImage}`}
            src={"/bandmember.jpg"}
            alt=""
            width={300}
            height={300}
          />
        </div>
        <div>
          <p>Name</p>
          <Image
            className={`${styles.memberImage}`}
            src={"/bandmember.jpg"}
            alt=""
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

export default FirstSection;

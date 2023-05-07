import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from "next/image";

import Link from "next/link";

const TComponent = ({ question, explanation, showExp = false }) => {
  const [show, setShow] = useState(showExp);

  return (
    <div className={styles.TComponent}>
      <p
        onClick={() => setShow(!show)}
        className={`${show ? styles.activeQuestion : ""} faq `}
      >
        {question}
        <Image
          className={`${styles.arrowIcon} ${show ? styles.rotateArrow : ""}`}
          src={"/icon-arrow-down.svg"}
          width={19}
          height={19}
          alt="arrow icon"
        />
      </p>
      <p
        className={`${show ? styles.showExplanation : styles.hideExplanation}`}
      >
        {explanation}
      </p>
      <div className={styles.hr} />
    </div>
  );
};
function Home() {
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState(930);
  useEffect(() => {
    const TContainer = document.getElementsByClassName("faq");
    const lenght = TContainer.length;
    for (let i = 0; i < lenght; i++) {
      console.log(i);
      TContainer[i].addEventListener("mouseover", () => setHovered(true));
      TContainer[i].addEventListener("mouseleave", () => setHovered(false));
    }
    const removeListner = window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", removeListner);
    };
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.womanIllustrationContainer}>
          <Image
            className={styles.womanIllustration}
            src={
              width > 929
                ? "/illustration-woman-online-desktop.svg"
                : "/illustration-woman-online-mobile.svg"
            }
            width={250}
            height={250}
            alt="illustration-woman-online"
          />
        </div>
        <Image
          className={`${styles.boxIllustration} ${
            hovered ? styles.active : ""
          }`}
          src={"/illustration-box-desktop.svg"}
          width={100}
          height={100}
          alt="box illustration"
        />
        <section className={styles.faqSection}>
          <h1>FAQ</h1>
          <TComponent
            question={"How many team members can you invite?"}
            explanation={
              "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
            }
          />
          <TComponent
            showExp={true}
            question={"What is the maximum file upload size?"}
            explanation={
              "No more than 2GB. All files in your account must fit your allotted storage space."
            }
          />
          <TComponent
            question={"How do I reset my password?"}
            explanation={
              "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
            }
          />
          <TComponent
            question={"Can I cancel my subscription?"}
            explanation={
              "Yes! Send us a message and we’ll process your request no questions asked."
            }
          />
          <TComponent
            question={" Do you provide additional support?"}
            explanation={
              "Chat and email support is available 24/7. Phone lines are open during normal business hours."
            }
          />
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

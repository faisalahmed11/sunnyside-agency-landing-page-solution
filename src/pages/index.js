import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <main className={`${styles.main}`}>
      <div className={`${styles.mainCard}`}>
        <Image
          className={`${styles.profilePic}`}
          src={"/image-victor.jpg"}
          width={95}
          height={95}
          alt="profile image"
        />
        <p>
          Victor Crest <span>26</span>
        </p>
        <p>London</p>
        <div className={`${styles.hr}`} />
        <div className={`${styles.dataContainer}`}>
          <div>
            <p>80K</p>
            <p>Followers</p>
          </div>
          <div>
            <p>803K</p>
            <p>Likes</p>
          </div>
          <div>
            <p>1.4K</p>
            <p>Photos</p>
          </div>
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

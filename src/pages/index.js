import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import data from "../data/data.json";
function Home() {
  // useEffect(()=>{
  //   // const data= JSON.parse(response)
  //   console.log(response)

  // },[])
  return (
    <main className={`${styles.main}`}>
      <div className={`${styles.mainCard}`}>
        <div className={`${styles.resultCard}`}>
          <p className={`${styles.resultCardTitle}`}>Your Result</p>
          <div className={`${styles.resultCardCircle}`}>
            <b>76</b>
            <p>of 100</p>
          </div>

          <b className={`${styles.resultCardGreat}`}>Great</b>
          <p className={`${styles.resultCardScore}`}>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        <section className={`${styles.summary}`}>
          <p className={`${styles.summaryTitle}`}>Summary</p>
          <div className={`${styles.summaryContainer}`}>
            {data.map((obj, index) => (
              <div key={index}>
               <span className={`${styles.iconContainer}`}> <Image
                  key={index}
                  src={obj.icon}
                  alt="icon"
                  width={20}
                  height={20}
                />
            <span>{obj.category}</span></span> <span className={`${styles.light}`}><b>{obj.score}</b> / 100</span>
              </div>
            ))}
          </div>
          <button>Continue</button>
        </section>
      </div>
      <p className={`${styles.lastRow}`}>Challenged by <Link href="https://www.frontendmentor.io/profile/faisalahmed11">Frontend Mentor</Link> completed by <Link href={"https://twitter.com/FaisalAhmed_01"}>Faisal Ahmed</Link></p>
    </main>
  );
}

export default Home;

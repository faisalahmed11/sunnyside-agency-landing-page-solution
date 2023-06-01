import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
function Home() {
  //alerts
  const [invalidDay, setInvalidDay] = useState(false);
  const [invalidMonth, setInvalidMonth] = useState(false);
  const [invalidYear, setInvalidYear] = useState(false);

  // outputs
  const [outputDay, setOutputDay] = useState("");
  const [outputMonth, setOutputMonth] = useState("");
  const [outputYear, setOutputYear] = useState("");

  // inputs
  const [inputDay, setInputDay] = useState("");
  const [inputMonth, setInputMonth] = useState("");
  const [inputYear, setInputYear] = useState("");

  const AgeCalculator = () => {
    let currentDate = new Date();

    setInvalidDay(false);
    setInvalidMonth(false);
    setInvalidYear(false);

    let birthDate = new Date(inputYear, inputMonth - 1, inputDay);
    let ageInMilliseconds = currentDate - birthDate;
    let ageDate = new Date(ageInMilliseconds);

    //checking validation
    inputDay != birthDate.getDate() && setInvalidDay(true);
    inputYear != birthDate.getFullYear() && setInvalidYear(true);
    birthDate > currentDate && setInvalidYear(true);

    if (
      inputDay == birthDate.getDate() &&
      inputMonth == birthDate.getMonth() + 1 &&
      inputYear == birthDate.getFullYear() &&
      birthDate <= currentDate
    ) {
      // Valid date of birth
      setOutputDay(ageDate.getUTCDate() - 1);
      setOutputMonth(ageDate.getUTCMonth());
      setOutputYear(ageDate.getUTCFullYear() - 1970);

      setInputDay("");
      setInputMonth("");
      setInputYear("");
    } else {
      setOutputDay("");
      setOutputMonth("");
      setOutputYear("");
    }
  };

  return (
    <>
      <main className={styles.main}>
        <div className={styles.ageCounter}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              AgeCalculator();
            }}
          >
            <div className={styles.inputsContainer}>
              <div
                className={styles.dayInputContainer}
                invalid={invalidDay.toString()}
              >
                <label htmlFor="day">DAY</label>
                <input
                  required
                  id="day"
                  name="day"
                  type="text"
                  onChange={(e) => {
                    setInputDay(e.target.value);
                    setInvalidDay(false);
                  }}
                  pattern="^(0[1-9]|[1-2][0-9]|3[0-1])$"
                  value={inputDay}
                  title="please enter day b/w 01-31"
                  maxLength={2}
                  minLength={2}
                  placeholder="DD"
                />
                <p>invalid Day</p>
              </div>

              <div
                className={styles.monthInputContainer}
                invalid={invalidMonth.toString()}
              >
                <label htmlFor="month">MONTH</label>
                <input
                  required
                  id="month"
                  name="month"
                  type="text"
                  pattern="^(0[1-9]|1[0-2])$"
                  value={inputMonth}
                  onChange={(e) => setInputMonth(e.target.value)}
                  title="Please enter month b/w 01-12"
                  minLength={2}
                  maxLength={2}
                  placeholder="MM"
                />
                <p>invalid month</p>
              </div>

              <div
                className={styles.yearInputContainer}
                invalid={invalidYear.toString()}
              >
                <label htmlFor="year">YEAR</label>
                <input
                  required
                  id="year"
                  name="year"
                  type="text"
                  value={inputYear}
                  onChange={(e) => {
                    setInputYear(e.target.value);
                    setInvalidYear(false);
                  }}
                  pattern="^(1[0-9]{3}|20[0-9]{2}|2200)$"
                  title="Please enter valid four digits year"
                  maxLength={4}
                  placeholder="YYYY"
                />
                <p>invalid year</p>
              </div>
            </div>
            <div className={styles.arrowContainer}>
              <div className={styles.hr} />
              <button>
                <Image
                  className={styles.arrow}
                  src={"/icon-arrow.svg"}
                  alt=""
                  width={100}
                  height={100}
                />
              </button>
            </div>
          </form>

          <div className={styles.stats}>
            <p>
              <span empty={outputYear ? "false" : "true"}>{outputYear}</span>{" "}
              years
            </p>
            <p>
              <span empty={outputMonth ? "false" : "true"}>{outputMonth}</span>{" "}
              months
            </p>
            <p>
              <span empty={outputDay ? "false" : "true"}>{outputDay}</span> days
            </p>
          </div>
        </div>
        <p>Challenge by <Link target="_blank" href="https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q">Frontend mentor</Link> completed by <Link target="_blank" href={"https://www.frontendmentor.io/profile/faisalahmed11"}>Faisal Ahmed</Link></p>
      </main>
    </>
  );
}

export default Home;

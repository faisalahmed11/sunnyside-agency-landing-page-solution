import React from "react";
import Image from "next/image";
function Section2({ styles }) {
  const Card = ({ src, bodyText, name, designation }) => (
    <div className={styles.card}>
      <Image
        className={styles.cardImage}
        src={src}
        alt=""
        width={100}
        height={100}
      />
      <p className={styles.cardText}>{bodyText}</p>
      <h5 className={styles.cardName}>{name}</h5>
      <p className={styles.cardDesignation}>{designation}</p>
    </div>
  );

  return (
    <section className={styles.section2}>
      <h4 className={styles.title}>Client Testimonials</h4>
      <div>
        <Card
          src={"/image-emily.jpg"}
          bodyText={
            "We put our trust in Sunnyside and they delivered,making sure our needs were met and deadlines were always hit."
          }
          name={"Emily R."}
          designation={"Marketing Director"}
        />
        <Card
          src={"/image-thomas.jpg"}
          bodyText={
            "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
          }
          name={"Thomas S."}
          designation={"Chief Operating Officer"}
        />
        <Card
          src={"/image-jennie.jpg"}
          bodyText={
            "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!."
          }
          name={"Jennie F."}
          designation={"Business Owner"}
        />
      </div>
    </section>
  );
}

export default Section2;

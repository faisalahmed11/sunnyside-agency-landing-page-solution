import styles from "../styles/MainComponent.module.css";
import Image from "next/image";
import React from "react";

function MainComponent({setRating,rating,setSubmitted}) {
  return (
    <section className={`${styles.card}`}>
      <div  className={`${styles.image}`} >
        <Image
         
          width={16}
          height={16}
          src="/icon-star.svg"
          alt="star icon"
        />
      </div>
      <p>How did we do?</p>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className={`${styles.rating}`}>
        <p active={rating} onClick={()=>setRating(1)}>1</p>
        <p active={rating} onClick={()=>setRating(2)}>2</p>
        <p active={rating} onClick={()=>setRating(3)}>3</p>
        <p active={rating} onClick={()=>setRating(4)}>4</p>
        <p active={rating} onClick={()=>setRating(5)}>5</p>
      </div>
      <button onClick={()=>setSubmitted(true)}>SUBMIT</button>
    </section>
  );
}

export default MainComponent;

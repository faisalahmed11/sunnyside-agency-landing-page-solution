import React from "react";
import styles from "../styles/Aside.module.css";
import Image from "next/image";
import Nav from "./socialLinks";

const tagList = [
  "Fashion",
  "New York",
  "London",
  "Hats",
  "Norway",
  "Sweaters",
  "Ideas",
  "Deals",
  "Accessories",
  "News",
  "Clothing",
  "Shopping",
  "Jeans",
  "Trends",
];
const Post = ({ src, heading, subHeading }) => (
  <div className={`${styles.post}`}>
    <Image src={src} width={100} height={100} alt="" />
    <div>
      <p>{heading}</p>
      <p>{subHeading}</p>
    </div>
  </div>
);

function Aside() {
  return (
    <aside className={`${styles.aside}`}>
      <div className={`${styles.selfIntro}`}>
        <Image src={"/avatar_girl2.jpg"} alt="" width={1000} height={500} />
        <h4>My Name</h4>
        <p>
          Just me, myself and I, exploring the universe of uknownment. I have a
          heart of love and a interest of lorem ipsum and mauris neque quam
          blog. I want to share my world with you.
        </p>
      </div>

      <div className={`${styles.popularPost}`}>
        <h2>Popular Posts</h2>

        <Post
          src={"/avatar_smoke.jpg"}
          heading={"Denim"}
          subHeading={"Sed mattis nunc"}
        />

        <Post
          src={"/bandmember.jpg"}
          heading={"Sweaters"}
          subHeading={"Praes tinci sed"}
        />

        <Post
          src={"/workshop.jpg"}
          heading={"Workshop"}
          subHeading={"Ultricies congue"}
        />

        <Post
          src={"/avatar_smoke.jpg"}
          heading={"Trends"}
          subHeading={"Lorem ipsum dipsum"}
        />
      </div>

      <div className={`${styles.advertise}`}>
        <h2>Advertise</h2>
        <p>Your AD Here</p>
      </div>

      <div className={`${styles.tags}`}>
        <h2>Tags</h2>
        {/* <p>{tagList}</p> */}
        <p>
          {tagList.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </p>
      </div>
   
   <div className={styles.inspiration}>
    <h2>Inspiration</h2>
   <div>
    {["/inspiration1.jpg",
    "/inspiration2.jpg",
   "/inspiration3.jpg",
    "/inspiration4.jpg"].map((src,index)=><Image src={src} key={index} alt=""
      width={300} height={300}
    />)}
   </div>
   </div>


<div className={styles.follow}>
<h2>Follow Me</h2>
<Nav/>
</div>

<div className={styles.subscribe}>

<h2>Subscribe</h2>


<form onSubmit={(e)=>{e.preventDefault();alert("Thanks for checking out :)")}}>
<p>Enter your e-mail below and get notified on the latest blog posts.</p>
<input placeholder="Enter e-mail" type="email" name="email" 
autoComplete="true"
required
/>
<button>Subscribe</button>
</form>
</div>

    </aside>
  );
}

export default Aside;

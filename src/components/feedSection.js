import React, { useState } from "react";
import styles from "../styles/FeedSection.module.css";
import Image from "next/image";

const Feed = ({
  src,
  heading,
  titleDescription,
  publishDate,
  Highlight,
  HighlightBody,
  bodyText,
  reply = [],
}) => {
  const [disable, setDisable] = useState(false);
  const [toggle,setToggle]=useState(false)
  return (
    <div className={`${styles.feed}`}>
      <h2>{heading}</h2>
      <p>
        {titleDescription}, <span>{publishDate}</span>
      </p>
      <Image src={src} alt="" height={500} width={500} />
      <p>
        <strong>{Highlight}</strong> {HighlightBody}
      </p>
      <p>{bodyText}</p>
      
      <div className={`${styles.labelContainer}`}>
        <button onClick={()=>setDisable(true)} disabled={disable}>{disable ? "Liked" : "Like"}</button>
        <button onClick={()=>setToggle(!toggle)}>Replies<span>{reply.length}</span></button>
      </div>

      <div check={toggle.toString()} className={`${styles.replyContainer}`}>
        {reply.map((reply, index) => (
          <Reply key={index} {...reply} />
        ))}
      </div>
    </div>
  );
};

const Reply = ({ src, name, dateAndTime, message }) => (
  <div className={`${styles.reply}`}>
    <Image src={src} alt="" width={200} height={200} />
    <p>
      <strong>{name}</strong> {dateAndTime}
    </p>
    <p>{message}</p>
  </div>
);

function FeedSection() {
  return (
    <section className={`${styles.feedSection}`}>

      <Feed
        src={"/girl_hat.jpg"}
        heading={"TITLE HEADING"}
        titleDescription={"Title description"}
        publishDate={"May 2, 2016"}
        Highlight={"More Hats!"}
        HighlightBody={
          "I am crazy about hats these days. Some text about this blog entry."
        }
        bodyText={`Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt but labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.`}
        reply={[
          {
            name: "Amber",
            src: "/girl_train.jpg",
            dateAndTime: "April 26, 2015, 10:52 PM",
            message:
              "Love your blog page! Simply the best! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          },
          {
            name: "Angie",
            src: "/girl.jpg",
            dateAndTime: "April 23, 2015, 9:12 PM",
            message: "Love hats!!",
          },
        ]}
      />
      <Feed
        src={"/man_hat.jpg"}
        heading={"TITLE HEADING"}
        titleDescription={"Title description"}
        publishDate={"April 23, 2016"}
        Highlight={"Hats!"}
        HighlightBody={
          "The trend this summer is hats for men!"
        }
        bodyText={`Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.`}
        reply={[
          {
            name: "George",
            src: "/avatar_smoke.jpg",
            dateAndTime: "May 3, 2015, 6:32 PM",
            message:
              "Great blog post! Following",
          },
        ]}
      />
      <Feed
        src={"/runway.jpg"}
        heading={"TITLE HEADING"}
        titleDescription={"Title description"}
        publishDate={"April 7, 2016"}
        Highlight={"Dont miss!"}
        HighlightBody={
          "The runway in New York City this weekend is gonna be legendary!"
        }
        bodyText={`Some text about this blog entry. Fashion fashion and mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sedtellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.`}
        reply={[
          {
            name: "Jane",
            src: "/girl_mountain.jpg",
            dateAndTime: "April 10, 2015, 7:22 PM",
            message:
              "That was a great runway show! Thanks for everything.",
          },
          {
            name: "John",
            src: "/boy.jpg",
            dateAndTime: "April 8, 2015, 10:32 PM",
            message:
              "Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
          },
          {
            name: "Anja",
            src: "/girl_hood.jpg",
            dateAndTime: "April 7, 2015, 9:12 PM",
            message:
              "Cant wait for the runway to start!",
          },
        ]}
      />
    </section>
  );
}

export default FeedSection;

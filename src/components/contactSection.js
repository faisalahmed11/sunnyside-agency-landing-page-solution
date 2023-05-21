import React from "react";
import Image from "next/image";
import styles from "../styles/ContactSection.module.css";
function ContactSection() {
  return (
    <section id="contact" className={`${styles.contactSection}`}>
      <h1>Contact</h1>
      <p>Lets get in touch and talk about your next project</p>
      <form
        autoComplete="true"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks for checking out :)");
        }}
      >
        <input type="text" placeholder="Name" name="Name" required />
        <input type="text" name="email" placeholder="Email" required />
        <input type="text" name="Subject" placeholder="Subject" required />
        <input type="text" name="Comment" placeholder="Comment" required />
        <button>SEND MESSAGE</button>
      </form>

      <Image
        className={`${styles.contactSectionImage}`}
        src={"/map.jpg"}
        alt=""
        width={1500}
        height={1200}
      />
    </section>
  );
}

export default ContactSection;

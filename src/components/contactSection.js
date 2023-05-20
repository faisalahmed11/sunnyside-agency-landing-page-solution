import React from "react";
import Image from "next/image";
import styles from "../styles/ContactSection.module.css";
function ContactSection() {
  return (
    <section id="contact" className={`${styles.contactSection}`}>
      <h1>Contact</h1>
      <i>Fan? Drop a note!</i>
      <div className={`${styles.formContainer}`}>
        <div>
          <div>Chicago, US</div>
          <div>Phone: +00 151515</div>
          <div>Email: mail@mail.com</div>
        </div>
        <form
          autoComplete="true"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks for checking out :)");
          }}
        >
          <input type="text" placeholder="Name" name="Name" required />
          <input type="text" name="email" placeholder="Email" required />
          <input type="text" name="message" placeholder="Message" required />
          <button>SEND</button>
        </form>
      </div>

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

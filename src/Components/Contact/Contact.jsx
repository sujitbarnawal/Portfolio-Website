import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_jx35gea", "template_ec0rggi", form.current, {
        publicKey: "mfzKmsLevbz2uECNi",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="contact" className="contact   ">
      <div className="contact-title ">
        <h1>Contact Me</h1>
        <img src={theme_pattern} />
      </div>
      <div className="contact-section  ">
        <div className="contact-left  ">
          <h1>Lets talk</h1>
          <p>
            I am currently available to take on nem projects, so feel free to
            send me a message about anythimg that you want me to work on. You
            can contact anytime.
          </p>
          <br />
          <div className="contact-details  ">
            <div className="contact-detail ">
              <img src={mail_icon} />
              <p>sujitbarnawal4545@gmail.com</p>
            </div>
            <div className="contact-detail ">
              <img src={call_icon} />
              <p>+977 9863404920</p>
            </div>
            <div className="contact-detail ">
              <img src={location_icon} />
              <p>Kathmandu,Nepal</p>
            </div>
          </div>
        </div>
        <form
          className="contact-right "
          ref={form}
          onSubmit={(e) => {
            sendEmail(e);
          }}
        >
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="from_name" />
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="from_email"
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button type="submit" value="Send" className="contact-submit">
            Submit form
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

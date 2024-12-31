import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_jx35gea', 'template_ec0rggi', form.current, {
                publicKey: 'mfzKmsLevbz2uECNi',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert('Email sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
    };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1>Contact Me</h1>
                <img src={theme_pattern} alt="Pattern" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>
                        I am currently available to take on new projects, so feel free to send me a message about
                        anything that you want me to work on. You can contact anytime.
                    </p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="Email Icon" />
                            <p>sujitbarnawal4545@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="Call Icon" />
                            <p>+977 9863404920</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="Location Icon" />
                            <p>Kathmandu, Nepal</p>
                        </div>
                    </div>
                </div>
                <form className="contact-right" ref={form} onSubmit={sendEmail}>
                    <label>Your Name</label>
                    <input type="text" placeholder="Enter your name" name="from_name" />
                    <label>Your Email</label>
                    <input type="email" placeholder="Enter your email" name="from_email" />
                    <label>Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">
                        Submit form
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

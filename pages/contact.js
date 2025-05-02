import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_sdgkvf7',      
        'template_tgfkcge',     
        formRef.current,        
        'WBdTYrFGtqflHNaUL'     
      )
      .then(
        () => {
          alert('Message sent successfully!');
          e.target.reset(); 
        },
        () => {
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form ref={formRef} onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

const Contact = () => {
    return (
      <div style={{ padding: '20px' }}>
        <h1>Contact Us</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <br />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <br />
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  
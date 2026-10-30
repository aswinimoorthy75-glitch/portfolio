import "./Contact.css";

function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-text">
          I'm currently looking for Software Developer / Java Developer roles.
          Feel free to reach out. I'd love to connect!
        </p>
        <a href="mailto:aswinimoorthy75@gmail.com" className="btn">Say Hello 👋</a>
        <div className="contact-links">
          <a href="https://github.com/aswinimoorthy75-glitch" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/aswini-moorthy-ss" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:aswinimoorthy75@gmail.com">Email</a>
          <a href="tel:+916380560283">+91 6380560283</a>
        </div>
      </section>
      <footer className="footer">
        © 2026 Aswini S · Built with React
      </footer>
    </>
  );
}

export default Contact;
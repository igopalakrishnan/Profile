import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./GetInTouch.css";
import contactImg from "../../assets/projects/letsTalk.png"; // replace with your image

export default function GetInTouch() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    emailjs
      .sendForm(
        "service_kqclxrm",   // replace with your EmailJS service ID
        "template_t82d9xm",  // replace with your EmailJS template ID
        form.current,
        "Lf4ceBSKVqqBNmIaw"    // replace with your EmailJS public key
      )
      .then(
        () => {
          setStatusMessage("✅ Thanks, your message has been sent!");
          form.current.reset();
          setLoading(false);
           // Clear message after 5 seconds
        setTimeout(() => setStatusMessage(""), 3000);
        },
        () => {
          setStatusMessage("❌ Failed to send message. Please try again.");
          setLoading(false);
          // Clear message after 5 seconds
        setTimeout(() => setStatusMessage(""), 3000);
        }
      );
  };

  return (
    <div id="getInTouch" className="getInTouch">
      {/* Left side image */}
      <div className="getInTouch-left">
        <img src={contactImg} alt="Get in touch" />
      </div>

      {/* Right side form */}
      <div className="getInTouch-right">
        <h2>Get in Touch</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="user_name" id="name" placeholder="Your Name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="user_email" id="email" placeholder="Your Email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="5" placeholder="Your Message" required></textarea>
          </div>

          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>

        {/* Confirmation message */}
        {statusMessage && <p className="status-message">{statusMessage}</p>}
      </div>
    </div>
  );
}

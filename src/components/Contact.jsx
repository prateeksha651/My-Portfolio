import React from "react";

export default function Contact() {
  return (
    <section id="contact-section" className="section contact-section">
      <h2>Contact Me</h2>

      <p className="contact-sub">
        I'm always open to discussing new opportunities, collaborations, or answering any questions.
      </p>

      <div className="contact-divider"></div>

      <div className="contact-grid">

        {/* LOCATION */}
        <div className="contact-card">
          <i className="fa-solid fa-location-dot contact-icon"></i>
          <h4>Locate Me</h4>
          <p>Shimoga, Karnataka</p>
        </div>

        {/* PHONE */}
        <div className="contact-card">
          <i className="fa-solid fa-phone contact-icon"></i>
          <h4>Give Me a Call</h4>
          <p>+91 7022361611</p>
        </div>

        {/* EMAIL */}
        <div className="contact-card">
          <i className="fa-solid fa-envelope contact-icon"></i>
          <h4>Email Me</h4>
          <p>hsp86258@gmail.com</p>
        </div>

      </div>
    </section>
  );
}

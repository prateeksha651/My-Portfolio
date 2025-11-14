import React, { useEffect, useState } from "react";
import profileImg from "../assets/profile.png";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero section with-photo">

      {/* LEFT SIDE TEXT */}
      <div className={`hero-text ${mounted ? "enter-from-left" : ""}`}>

        {/* SOCIAL ICONS */}
        <div className="social-icons">
          <a href="https://github.com/prateeksha651" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/prateeksha-hs"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>

          <a href="mailto:hsp86258@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>

        {/* MAIN TEXT */}
        <h1 className="hero-title">Hi, I'm Prateeksha</h1>

        {/* EXTRA LINES YOU ASKED FOR */}
        <p className="hero-sub">
          Engineer by training, creator by passion-
        </p>
        <p className="hero-sub">
          bringing ideas to life through robotics, automation, 
        </p>
        <p className="hero-sub">
          and the power of web technology.
        </p>

      </div>

      {/* RIGHT-SIDE PHOTO */}
      <div className={`hero-photo ${mounted ? "enter-from-right" : ""}`}>
        <img src={profileImg} alt="Prateeksha" />
      </div>
    </section>
  );
}

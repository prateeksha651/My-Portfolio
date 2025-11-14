import React from "react";

export default function Navbar() {
  return (
    <header className="nav-container">
      <div className="brand">Prateeksha</div>
      <nav className="nav-links">
        <a href="#about" className="nav-item">About</a>
        <a href="#skills" className="nav-item">Skills</a>
        <a href="#projects" className="nav-item">Projects</a>
        <a href="#contact" className="nav-item">Contact</a>
      </nav>
    </header>
  );
}

import React from "react";

export default function Projects() {
  const projectData = [
    {
      title: "3D Printed Telerobotic Arm",
      duration: "Oct 2024 – Feb 2025",
      desc: "Team project — 3D printed arm with joystick teleoperation and inverse-kinematics-based motion control.",
      tags: ["3D Printing", "Kinematics", "Servo Motors"],
    },
    {
      title: "Dance Robot",
      duration: "Apr 2024 – Sep 2024",
      desc: "Interactive dancing robot using Raspberry Pi, servo choreography, and voice-triggered moves.",
      tags: ["Raspberry Pi", "Servos", "Voice Control"],
    },
    {
      title: "Hexapod Robot",
      duration: "Oct 2023 – Jan 2024",
      desc: "Six-legged robot with stable gait & coordinated leg control.",
      tags: ["ESP32", "Gait Control", "Sensors"],
    },
    {
      title: "Line Following Robot",
      duration: "Apr 2023 – Jun 2023",
      desc: "IR-sensor based autonomous line follower using Arduino UNO.",
      tags: ["Arduino", "IR Sensors", "Automation"],
    },
    {
      title: "Personal Portfolio Website",
      duration: "Jan 2025 – Present",
      desc: "A responsive personal portfolio built using React and Vite, styled with custom CSS, featuring smooth animations and a clean UI.",
      tags: ["React", "Vite", "CSS", "UI Design"],
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projectData.map((proj, i) => (
          <div key={i} className="project-card fade-up delay">
            <h3>{proj.title}</h3>
            <small className="muted">{proj.duration}</small>
            <p style={{ margin: "10px 0 14px", lineHeight: "1.6" }}>{proj.desc}</p>

            <div className="tag-row">
              {proj.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

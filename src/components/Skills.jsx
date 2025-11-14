import React, { useEffect, useRef } from "react";

export default function Skills() {
  const barsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-bar");
          }
        });
      },
      { threshold: 0.3 }
    );

    barsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="section skills-section">

      {/* This wrapper keeps heading + columns aligned */}
      <div className="skills-inner">

        <h2 className="skills-title">Skills</h2>

        <div className="skills-columns">

          {/* LEFT COLUMN */}
          <div className="skills-left">

            <div className="skill-category">
              <h3>Programming Skills</h3>
              <p>Java, Python, SQL, C, C++, Embedded C, PLC Ladder Logic</p>
            </div>

            <div className="skill-category">
              <h3>Databases</h3>
              <p>MySQL, Oracle</p>
            </div>

            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <p>Git, GitHub, Excel, Windows, Ubuntu, VS Code, Arduino IDE</p>
            </div>

            <div className="skill-category">
              <h3>Robotics & Embedded Skills</h3>
              <p>
                Arduino (ATmega328), ESP32, IoT Hardware, Sensor Integration,
                Motor Drivers & Actuators, Embedded Systems, PCB Designing,
                CAD, RoboDK, Ansys, 3D Printing, Motion Control, Kinematics
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN — PROGRESS */}
          <div className="skills-right">
            <h3>I’m Comfortable In</h3>

            {[
              { name: "Java", width: "80%" },
              { name: "HTML", width: "90%" },
              { name: "CSS", width: "90%" },
              { name: "JavaScript", width: "80%" },
              { name: "React", width: "90%" },
              { name: "SQL", width: "85%" },
            ].map((skill, idx) => (
              <div className="progress-item" key={idx}>
                <span>{skill.name}</span>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ "--final-width": skill.width }}
                    ref={(el) => (barsRef.current[idx] = el)}
                  ></div>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div> {/* 😎 END skills-inner */}

    </section>
  );
}

import React from "react";
import "./skills.css";
import reactSvg from "../../assets/react.svg";
import htmlSvg from "../../assets/html.svg";
import cssSvg from "../../assets/css.svg";
import jsSvg from "../../assets/js.svg";
import nodeSvg from "../../assets/nodejs.svg";
import pythonSvg from "../../assets/python.svg";

export const Skills = () => {
  return (
    <section id="skills">
      <span className="skill-title">My Skills</span>
      <span className="skill-description">
        These are the skils that i have learned and used in my professional
        career
      </span>
      <div className="skill-bars">
        <div className="skill-bar">
          <img className="skill-bar-img" src={reactSvg} alt="React" />
          <img className="skill-bar-img" src={htmlSvg} alt="HTML" />
          <img className="skill-bar-img" src={cssSvg} alt="CSS" />
          <img className="skill-bar-img" src={jsSvg} alt="javascript" />
          <img className="skill-bar-img" src={nodeSvg} alt="nodejs" />
          <img className="skill-bar-img" src={pythonSvg} alt="python" />
        </div>
        {/* <div className="skill-bar">
          <div className="skill-bar-text">
            <h2>Website design</h2>
            <p>This is demo content, Lorem ipso</p>
          </div>
        </div>
        <div className="skill-bar">
          <div className="skill-bar-text">
            <h2>App development</h2>
            <p>This is demo content, Lorem ipson. This is demo content</p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

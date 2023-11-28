import { Link } from "react-scroll";
import "./intro.css";
import React from "react";
import btnImg from "../../assets/hireme.png";
import introImg from "../../assets/introImg.png";

const introText = (
  <p className="intro-para">
    ⚛️ Learning ReactJS by creating small projects,
    <br />
    🛠 System Engineer at TCS,
    <br />
    📈 3+ Years of IT industry experience,
    <br />
    🚀 Aspiring to become ReactJS dev,
    <br />
    📝 Looking for good opportunity in Frontend world.
  </p>
);

function Intro() {
  return (
    <section id="intro">
      <div className="intro-content">
        <span className="hello">Hello,</span>
        <span className="intro-text">
          I'm <span className="intro-name">Aadil</span>
          <br />
          Software Engineer
        </span>
        {introText}

        <Link className="">
          <button className="btn">
            <img className="btn-img" src={btnImg} alt="hire me" />
            Hire me
          </button>
        </Link>
        <img src={introImg} alt="intro" className="bg" />
      </div>
    </section>
  );
}

export default Intro;

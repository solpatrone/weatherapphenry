import React from "react";
import { AiFillGithub, AiOutlineLinkedin } from "react-icons/ai";
import "./About.css";

function About() {
  return (
    <div className="containerAbout">
      <a
        href="https://www.linkedin.com/in/sol-patrone/"
        alt="LinkedIn"
        target={"_blanck"}
      >
        <AiOutlineLinkedin
          style={{ color: "var(--orange)", fontSize: "25px" }}
        />
      </a>
      <a href="https://github.com/solpatrone" alt="Git Hub" target={"_blanck"}>
        <AiFillGithub style={{ color: "var(--orange)", fontSize: "25px" }} />
      </a>
    </div>
  );
}

export default About;

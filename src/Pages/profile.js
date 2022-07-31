import "../App.css";
import Projects from "../sections/projects";
import Home from "../sections/home";
import About from "../sections/about";
import Skills from "../sections/skills";
import Education from "../sections/education";
import Experience from "../sections/experience";
import ParticleBackground from "../particle-background";
import Navigation from "../components/navigation";
import QLinks from "../sections/qlinks";
import Certifications from "../sections/certification";
import React from "react";

const Profile = () => {
  document.title = "Sai Shanmukkha - Profile";
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  document.addEventListener("copy", (e) => {
    e.preventDefault();
  });
  return (
    <div>
      <ParticleBackground color="#8800ff"></ParticleBackground>
      <div className="container">
        <Navigation></Navigation>
        <Home></Home>
        <About></About>
        <Education></Education>
        <Experience></Experience>
        <Skills></Skills>
        <Certifications></Certifications>
        <Projects></Projects>
        <QLinks></QLinks>
      </div>
    </div>
  );
};

export default Profile;

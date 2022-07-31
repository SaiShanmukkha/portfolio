import "../App.css";
import React from "react";
import ParticleBackground from "../particle-background";
import Navigation from "../components/navigation";
import Contact from "../sections/contact";
import QLinks from "../sections/qlinks";

const ContactPage = () => {
   document.title = "Sai Shanmukkha - Contact";
  return (
    <div>
      <ParticleBackground color="#08F5E0"></ParticleBackground>
      <div className="container">
        <Navigation></Navigation>
        <Contact />
        <QLinks />
      </div>
    </div>
  );
};

export default ContactPage;

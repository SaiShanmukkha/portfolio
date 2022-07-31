import React from "react";

export default function About() {
  return (
    <div className="portfolio-section">
      <div className="container">
        <div className="row flex-md-row align-items-center">
          <div className="col-lg-2 col-sm-6 col-md-4">
            <img
              src="https://docs.google.com/uc?id=10hg5gUwxsCVjKtlr9titl7auLiSwGzFx"
              className="img-fluid rounded-1 mb-4"
              alt="profile.png"
            />
          </div>
          <div className="col-lg-10 col-md-8">
            <p className="paragraph noselect">
              I'm{" "}
              <span style={{ color: "#fff", fontWeight: "bold" }}>
                Sai Shanmukkha, Surapaneni
              </span>{" "}
              who is a Active Learner &amp; Cloud Enthusiast. I'm from
              Kovvur, Andhra Pradesh. I have recently done AWS Developer
              Associate Certification. Also passionate about working with Cloud
              technologies. Currently, I'm 'actively looking for opportunities
              to work with Cloud-based technologies.
            </p>
            <p className="paragraph noselect">
              Always eager to learn New Technologies. I’m always open to
              discussions, so feel free to ask any questions or concerns.
              Always, happy to collaborate with the community.
            </p>
            <p className="paragraph noselect">
              Currently Leanning Docker, React, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

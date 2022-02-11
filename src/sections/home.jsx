import SocialLinks from "../components/social-links";
import TypeWriter from "typewriter-effect/dist/react";

export default function Home() {
  return (
    <div className="portfolio-section">
      <h1 className="display-1 font-weight-bold title mb-2">
        Hey, I'm Sai Shanmukkha<span style={{color:"#ffff00"}}>!</span>
      </h1>
      <div className="custom-typeWriter">
        <TypeWriter
          options={{
            strings: ["Active Learner", "AWS Certified Developer", "Web Developer", "Cloud Enthusisast"],
            delay: 75,
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <SocialLinks></SocialLinks>
    </div>
  );
}

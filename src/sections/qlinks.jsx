import SocialLinks from "../components/social-links"

export default function QLinks() {
  return (
    <div className="portfolio-section py-5">
      <div className="text-center">
        <SocialLinks></SocialLinks>
        <hr className="mx-auto border-default" />
        <p className="mt-5">
          Copyright © 2022 <a href="#">Albert</a>
        </p>
      </div>
    </div>
  );
}

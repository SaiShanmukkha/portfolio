import { useEffect } from "react";

export default function Certifications() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="portfolio-section">
      <h2>Cerifications</h2>

      <div className="bg-light d-inline-block">
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="381118e0-532f-45d1-a6dd-4a8ca971e618"
          data-share-badge-host="https://www.credly.com"
        ></div>
      </div>
    </div>
  );
}

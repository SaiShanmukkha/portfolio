import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function LearningItem({
  title,
  description,
  source,
  imagepath,
  certLink,
  platform,
}) {
  return (
    <div className="learning-item">
      <div className="learning-header">
        <img
          className="learning-image"
          src={imagepath}
          width="50px"
          height="50px"
        />
        <div>
          <div className="learning-title m-1">{title}</div>
          <div className="learning-subtitle">- {platform}</div>
        </div>
      </div>
      <div className="learning-content">
        <hr style={{ color: "#fff", height: 2 }} />
        <div className="learning-description m-1">
          {description.length > 300
            ? description.substr(0, 299) + "..."
            : description}
        </div>
      </div>
      <div className="learning-options">
        <a href={source} target={"_blank"} className="learning-option">
          Learning
        </a>
        <a href={certLink} target={"_blank"} className="learning-option">
          Certificate
        </a>
      </div>
    </div>
  );
}



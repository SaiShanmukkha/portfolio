import React from "react";

export default function IconItem({ logoName, logoLocation }) {
  return (
    <div className="skill-item">
      <div className="skill-item-border"></div>
      <img max-width="120px" height="60px" src={logoLocation} alt={logoName}/>
      <span className="skill-name">{logoName}</span>
    </div>
  );
}

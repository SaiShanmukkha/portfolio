import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="p-2 Navbar">
      <a href="/">
        <img src="./assets/logo.png" alt="logo" />
      </a>
      <ul className={`NavItems ${isOpen && "open"}`}>
        <li>
          <Link
            to="/"
            className="customLink"
            onClick={() => setIsOpen(!isOpen)}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/learnings"
            className="customLink"
            onClick={() => setIsOpen(!isOpen)}
          >
            Learnings
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="customLink"
            onClick={() => setIsOpen(!isOpen)}
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjale3w64r5AhV0ieYKHRbHCCQQFnoECA8QAQ&url=https%3A%2F%2Fnvlpubs.nist.gov%2Fnistpubs%2Flegacy%2Fsp%2Fnistspecialpublication800-145.pdf&usg=AOvVaw3eDW_Nq66d7NUNBEv7FTeg"
            target={"_blank"}
            className="btn btn-outline-info border-2 fw-bolder"
          >
            Download Resume
          </a>
        </li>
      </ul>
      <div
        className={`burger ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}

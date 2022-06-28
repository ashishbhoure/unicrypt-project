import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="h">
      <div className="l">
        <i className="logo">
          <img
            src="https://unicrypt.network/template/img/logo.svg?v=1"
            alt="logo"
          ></img>
        </i>
        <i>
          <Link to="/tweter">tweter</Link>
        </i>
        <i>
          <Link to="/tweter">telgram</Link>
        </i>
        <i>
          <Link to="/tweter">twet</Link>
        </i>
        <i>
          <Link to="/tweter">link</Link>
        </i>
      </div>
      <div className="r">
        <nav id="n">
          <ul>
            <li className="bt">
              <Link
                style={{
                  opacity: 1,
                  transform: "translate(0px, 0px)",
                }}
                to="/Services"
              >
                Services
              </Link>
            </li>
            <li className="bt">
              <Link
                style={{
                  opacity: 1,
                  transform: "translate(0px, 0px)",
                }}
                to="/Tokens"
              >
                Tokens
              </Link>
            </li>
            <li className="bt">
              <Link
                style={{
                  opacity: 1,
                  transform: "translate(0px, 0px)",
                }}
                to="/About Us"
              >
                About Us
              </Link>
            </li>
            <li className="bt btg">
              <Link
                style={{
                  opacity: 1,
                  transform: "translate(0px, 0px)",
                }}
                to="/Launch App"
              >
                Launch App
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

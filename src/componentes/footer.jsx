import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer id="f">
        <div className="ct">
          <div className="ft">
            <div className="f1" data-link>
              <div>
                <Link
                  to="https://twitter.com/UNCX_token"
                  target="_blank"
                  title=""
                  className="il"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85 85">
                    <path
                      d="M26.521 75.642c31.8 0 49.2-26.3 49.2-49.2v-2.2c3.4-2.4 6.3-5.5 8.6-8.9-3.1 1.4-6.4 2.3-9.9 2.7 3.6-2.1 6.3-5.5 7.6-9.6-3.3 2-7 3.4-11 4.2-3.2-3.4-7.6-5.5-12.6-5.5a17.31 17.31 0 0 0-17.3 17.3c0 1.4.2 2.7.4 3.9-14.4-.7-27.1-7.6-35.6-18.1-1.5 2.6-2.3 5.5-2.3 8.7 0 6 3.1 11.3 7.7 14.4a17.2 17.2 0 0 1-7.8-2.2v.2c0 8.4 6 15.4 13.9 16.9a17.59 17.59 0 0 1-4.6.6c-1.1 0-2.2-.1-3.2-.3 2.2 6.9 8.6 11.9 16.1 12-5.9 4.6-13.4 7.4-21.5 7.4-1.4 0-2.8-.1-4.1-.2 7.5 5.1 16.6 7.9 26.4 7.9"
                      fill="#0cf"
                    />
                  </svg>
                </Link>
                <p>
                  Find the latest news and announcements from our main Unicrypt
                  Team account.
                </p>
              </div>
            </div>
            <div className="f2" data-link>
              <div>
                <Link
                  to="https://t.me/uncx_token"
                  target="_blank"
                  title=""
                  className="il"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 85 85"
                    fill="#008aff"
                  >
                    <path d="M42.5 85C19.1 85 0 65.9 0 42.5S19.1 0 42.5 0 85 19.1 85 42.5 65.9 85 42.5 85zm0-79.9C21.9 5.1 5.1 21.9 5.1 42.5s16.8 37.4 37.4 37.4 37.4-16.8 37.4-37.4S63.2 5.1 42.5 5.1zM17.4 44.5c4.7-2.6 9.9-4.7 14.8-6.9l25.3-10.2c1.7-.6 4.6-1.1 4.9 1.4-.2 3.5-.8 6.9-1.3 10.4-1.1 7.6-2.5 15.1-3.8 22.7-.4 2.5-3.6 3.8-5.6 2.2l-14.5-9.9c-1.6-1.6-.1-3.9 1.3-5 4-3.9 8.2-7.3 12-11.4 1-2.5-2-.4-3 .2-5.4 3.7-10.8 7.7-16.5 11-2.9 1.6-6.4.2-9.3-.7-2.7-1.1-6.6-2.2-4.3-3.8h0z" />
                  </svg>
                </Link>
                <p>
                  Actively engage and participate with the community in our
                  different channels.
                </p>
              </div>
            </div>
            <div className="f3" data-link>
              <div>
                <Link
                  to="https://docs.unicrypt.network/"
                  target="_blank"
                  title=""
                  className="il il2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 164.7 118.7"
                  >
                    <path
                      d="M149.4 48.8c-4.2 0-7.9 1.7-10.7 4.4-1.4 1.1-2.6 2.6-3.2 4.6-.9 1.9-1.4 4.1-1.4 6.4a13.86 13.86 0 0 0 .9 5v.6L86.6 95.2c-2.7-4.3-7.5-7.2-13-7.2-6.1 0-11.4 3.6-13.9 8.8L18.5 75.1S8.3 69.4 8.3 59s6.4-10.5 6.4-10.5l53.4 27.7s3.3 2.5 8.2-.2c5.9-3.3 79.8-41.5 79.8-41.5s4.7-3.8-3.5-7.5L97.4 1s-4.3-2.3-8.9 0L8.1 41.4S-1 46.9.1 59.3 7 78.8 13.8 82.4L58.1 105s.1.3.3.7c1.1 7.4 7.5 13 15.2 13 8.4 0 15.2-6.7 15.3-15l50.6-27.8c2.7 2.3 6.1 3.6 9.9 3.6a15.41 15.41 0 0 0 15.4-15.4c0-8.5-6.9-15.3-15.4-15.3zm-75.8 60.4a5.34 5.34 0 0 1-5.3-5.3 5.34 5.34 0 0 1 5.3-5.3 5.34 5.34 0 0 1 5.3 5.3 5.34 5.34 0 0 1-5.3 5.3zm75.8-39.7a5.34 5.34 0 0 1-5.3-5.3 5.34 5.34 0 0 1 5.3-5.3 5.34 5.34 0 0 1 5.3 5.3 5.27 5.27 0 0 1-5.3 5.3z"
                      fill="#4b81f4"
                    />
                  </svg>
                </Link>
                <p>Read our documentation and learn how to use our services.</p>
              </div>
            </div>
            <div className="f4" data-link>
              <div>
                <Link
                  to="https://unicrypt.medium.com/"
                  target="_blank"
                  title=""
                  className="il il2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 85 85"
                    fill="#18fc3d"
                  >
                    <path d="M47.9 42.5C47.4 74.2.5 74.2 0 42.5c.5-31.7 47.4-31.7 47.9 0m26.3 0c-.3 29.9-23.7 29.9-24 0 .4-29.9 23.7-29.9 24 0m10.8 0c0 26.7-8.4 26.6-8.4 0s8.4-26.7 8.4 0" />
                  </svg>
                </Link>
                <p>Dedicated articles related to our in-house technology.</p>
              </div>
            </div>
          </div>
          <div className="fb">
            <div className="l">
              <img src="https://unicrypt.network/template/img/logo.svg?v=1" alt="" />
            </div>
            <div className="r">
              <ul>
                <li>
                  <Link to="/terms" title="">
                    Terms and conditions
                  </Link>
                </li>
                <li>
                  <Link  to="/privacy-policy" title="">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="https://docs.unicrypt.network/" title="">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://github.com/chainsulting/Smart-Contract-Security-Audits/tree/master/Unicrypt"
                    title=""
                  >
                    Audits
                  </Link>
                </li>
              </ul>
              <p>
                Unicrypt Network © 2021 •{" "}
                <Link to="/cdn-cgi/l/email-protection#51222421213e232511243f3832232821257f3f3425263e233a">
                  <span
                    className="__cf_email__"
                    data-cfemail="22515752524d505662574c4b41505b52560c4c4756554d5049"
                  >
                    [email&#160;protected]
                  </span>
                </Link>{" "}
                • All rights reserved. Designed by nuixw
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

import React, { Component } from "react";
import Logo from "./image/logo.png";
import StoreBadge from 'react-store-badge';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import IconDownload from './image/download.png'
class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="footer-up">
          <div className="footer-column">
            <a className="logo-container" to="/">
              <img src={Logo} className="logo" />
            </a>
            <div className="footer-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipis cing elit. Valor quintos tempor tellus quis erat aliquam faucibus. Fusce at libero vitae set dolor rhoncus en quintos.
              </p>
            </div>
            <div className="store-badge-wrapper">
              <StoreBadge
                platform={'ios'}
                name="Cheerswipe"
                googlePlayUrl="https://play.google.com/store/apps/details?id=fr.puyou.cheerswipe"
                linkProps={{ title: 'iOS Store Button' }}
              />
              <StoreBadge
                platform={'ios'}
                name="Cheerswipe"
                appStoreUrl="https://apps.apple.com/us/app/cheerswipe/id1468158095?ls=1"
                linkProps={{ title: 'iOS Store Button' }}
              />
            </div>
          </div> 
          <div className="footer-column">
            <h3>
              Contact
            </h3>
            <ul>
              <li>
                <p>
                  5854 N. Orange Ave.
                </p>
                <p>
                  Orlando. FL 32801
                </p>
              </li>
              <li>
                <p>
                  Tel: 1.800.555.5555
                </p>
              </li>
              <li>
                <p>
                  Sales: sales@goknack.com
                </p>
                <p>
                  Help: support@goknack.com
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>
              Current Trending
            </h3>
            <ul className="trending">
              <li>
                <img src={IconDownload} alt=""/>
                <div>
                  <span className="trending-title">
                    Blinding Lights Qui..
                  </span>
                  by
                  <span className="trending-name">
                    Ashley M.
                  </span>
                </div>
              </li>
              <li>
                <img src={IconDownload} alt=""/>
                <div>
                  <span className="trending-title">
                    Blinding Lights Qui..
                  </span>
                  by
                  <span className="trending-name">
                    Ashley M.
                  </span>
                </div>
              </li>
              <li>
                <img src={IconDownload} alt=""/>
                <div>
                  <span className="trending-title">
                    Blinding Lights Qui..
                  </span>
                  by
                  <span className="trending-name">
                    Ashley M.
                  </span>
                </div>
              </li>
              <li>
                <img src={IconDownload} alt=""/>
                <div>
                  <span className="trending-title">
                    Blinding Lights Qui..
                  </span>
                  by
                  <span className="trending-name">
                    Ashley M.
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Dolor Set Nibh Qui..</a>
              </li>
              <li>
                <a href="#">F.A.Q.</a>
              </li>
              <li>
                <a href="#">How to Withdrawl</a>
              </li>
              <li>
                <a href="#">Argeno Tope</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Quintos</h3>
            <ul>
              <li>
                <a href="#">Lorem lpsum</a>
              </li>
              <li>
                <a href="#">Dolor Set Nibh..</a>
              </li>
              <li>
                <a href="#">Nulla Valor</a>
              </li>
              <li>
                <a href="#">Versate En</a>
              </li>
              <li>
                <a href="#">Argeno Tope</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-info">
          <div className="info-social">
            <p><span>&#169;</span>2021-2022 GoKnack, Inc. All rights reserved.</p>
            <ul>
              <li>
                <a href=""><FontAwesomeIcon className="fa-facebook-f" icon={faLinkedinIn} /></a>
              </li>
              <li>
                <a href=""><FontAwesomeIcon className="fa-facebook-f" icon={faTwitter} /></a>
              </li>
              <li>
                <a href=""><FontAwesomeIcon className="fa-facebook-f" icon={faFacebookF} /></a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-down">
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

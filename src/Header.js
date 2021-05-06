import React, { Component } from "react";
import MenuBtn from "./image/menu-btn.png";
import Logo from "./image/logo.png";
import KMark from "./image/k-mark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <div className="menu-btn">
            <img src={MenuBtn} alt="" />
          </div>
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="search-bar-area">
            <div className="search-bar">
              <div className="search-bar-name">Dog</div>
              <div className="search-badge">
                <div className="k-mark">
                  <img src={KMark} alt="" />
                  <div className="k-text">0.15</div>
                </div>
                <div className="rise-mark">
                  <FontAwesomeIcon className="rise-icon" icon={faArrowUp} />
                  <div className="rise-text">13%</div>
                </div>
              </div>
              <input className="search-input" type="text" />
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="menubar">
            <div className="menu-item">
              <div className="menu-text">Explore</div>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className="menu-item">
              <div className="menu-text">Supported</div>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className="menu-item">
              <div className="menu-text">My Portfolio</div>
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
          <div className="header-buttonlist">
            <div className="login-button">logout</div>
            <div className="upload-button">upload</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

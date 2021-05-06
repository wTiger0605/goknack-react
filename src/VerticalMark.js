import React, { Component } from "react";
import MenuBtn from "./image/menu-btn.png";
import Logo from "./image/logo.png";
import KMark from "./image/k-mark.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
class VerticalMark extends Component {
  render() {
    return (
      <div className="vertical-mark">
        <p>Beta Version GK001 .48</p>
      </div>
    );
  }
}

export default VerticalMark;

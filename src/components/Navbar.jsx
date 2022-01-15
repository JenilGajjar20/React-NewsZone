import React, { Component } from "react";
import NavHeading from "./partials/NavHeading";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav-container">
          <NavHeading />
        </nav>
      </div>
    );
  }
}

export default Navbar;

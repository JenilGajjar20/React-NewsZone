import React, { Component } from "react";
import FooterSources from "./partials/FooterSources";
import SocialMedia from "./partials/SocialMedia";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    let { cat1, cat3, cat4, cat5, cat7 } = this.props;
    return (
      <>
        <footer>
          <div className="footer-container">
            <div className="row">
              <div className="footer-col">
                <FooterSources />
              </div>
              <div className="footer-col">
                <h4>Categories</h4>
                <ul>
                  <li className="cat-item">
                    <Link to="/science">{cat1}</Link>
                  </li>
                  <li className="cat-item">
                    <Link to="/business">{cat3}</Link>
                  </li>
                  <li className="cat-item">
                    <Link to="/technology">{cat4}</Link>
                  </li>
                  <li className="cat-item">
                    <Link to="/sports">{cat5}</Link>
                  </li>
                  <li className="cat-item">
                    <Link to="/health">{cat7}</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <SocialMedia
                  instagram="Instagram"
                  twitter="Twitter"
                  linkedin="LinkedIn"
                  github="Github"
                />
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;

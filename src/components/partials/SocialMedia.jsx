import React, { Component } from "react";

export class SocialMedia extends Component {
  render() {
    let { instagram, twitter, linkedin, github } = this.props;
    return (
      <div>
        <h4>
          Created By - <span>Jenil Gajjar</span>
        </h4>
        <div className="social-links">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/jenil20gajjar/"
                target="_blank"
              >
                <i className="fab fa-instagram">&nbsp;{instagram}</i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/gajjar_jenil" target="_blank">
                <i className="fab fa-twitter">&nbsp;{twitter}</i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jenil-gajjar-27934920a/"
                target="_blank"
              >
                <i className="fab fa-linkedin">&nbsp;{linkedin}</i>
              </a>
            </li>
            <li>
              <a href="https://github.com/JenilGajjar20" target="_blank">
                <i className="fab fa-github">&nbsp;{github}</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SocialMedia;

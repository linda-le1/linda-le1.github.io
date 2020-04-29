import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav
            href="#navbar"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{ backgroundImage: "url(images/profile.jpg)" }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Linda Le</a>
              </h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#intro" data-nav-section="intro">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#about" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#projects" data-nav-section="projects">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a href="#details" data-nav-section="project-details">
                      Project Highlights
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/in/linda-lewang/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/linda-le1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon-github"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto: yueling1222@gmail.com">
                    <i className="icon-mail"></i>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  Template from{" "}
                  <a
                    href="https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dhruv Barochiya
                  </a>
                  <div>
                    Inspired by{" "}
                    <a
                      href="https://colorlib.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Colorlib
                    </a>{" "}
                  </div>
                  <div>
                    Icons made by{" "}
                    <a
                      href="https://www.flaticon.com/authors/freepik"
                      title="Freepik"
                    >
                      Freepik
                    </a>{" "}
                    from{" "}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                      www.flaticon.com
                    </a>
                  </div>
                  <div>
                    Icons made by{" "}
                    <a
                      href="https://www.flaticon.com/authors/smashicons"
                      title="Smashicons"
                    >
                      Smashicons
                    </a>{" "}
                    from{" "}
                    <a href="https://www.flaticon.com/" title="Flaticon">
                      www.flaticon.com
                    </a>
                  </div>
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

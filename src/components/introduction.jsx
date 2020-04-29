import React, { Component } from 'react'
import Pdf from '../assets/Linda_Le_Resume.pdf';

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section
          id="colorlib-hero"
          className="js-fullheight"
          data-section="intro"
        >
          <div className="flexslider js-fullheight">
            <ul className="slides">
              <li style={{ backgroundImage: "url(images/sakura_bg.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1>
                            Hello World
                            <br />
                            I'm Linda
                          </h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href={Pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="icon-download4" />
                              View My Resume
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{ backgroundImage: "url(images/sakura_bg.jpg)" }}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1>My Code</h1>
                          <p>
                            <a
                              className="btn btn-primary btn-learn"
                              href="https://github.com/linda-le1"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="icon-briefcase3" />
                              View Github
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

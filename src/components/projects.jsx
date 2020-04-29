import React, { Component } from "react";
import angry from "../assets/012-angry.png";
import cloud from "../assets/008-rain.png";
import turnip from "../assets/004-turnip-1.png";


export default class Projects extends Component {
  render() {
    return (
      <section className="colorlib-about" data-section="projects">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">Portfolio</span>
              <h2 className="colorlib-heading">My Coding Projects</h2>
            </div>
          </div>
          <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
              <div className="services color-1">
                <span className="icon">
                  <img
                    className="icon-hangry-ateball"
                    src={angry}
                    alt="colorful 8-ball"
                  />
                </span>
                <div className="desc">
                  <h3>
                    <a href="https://github.com/hangry-ateball/hangry-ateball-be">
                      Hangry Ateball API
                    </a>
                  </h3>
                  <p>
                    This is a REST API that consumes the Yelp and Google Maps
                    APIs. It returns a JSON object for the front end of the
                    application. It was created as part of a 5-person group
                    project and entered into Turing's Code Fair.
                  </p>
                  <p>
                    Tech stack includes Python, Flask, Pytest, TravisCI, and
                    Heroku.
                    <p>
                    <br />
                      <a
                        className="btn btn-primary btn-learn"
                        href="https://github.com/hangry-ateball/hangry-ateball-be"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Github Repo Link
                      </a>
                      <a
                        className="btn btn-primary btn-learn"
                        href="https://hangry-ateball-api.herokuapp.com/api/docs/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Swagger Link
                      </a>
                      <a
                        className="btn btn-primary btn-learn"
                        href="https://hangry-ateball-api.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Production Link
                      </a>
                    </p>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-4">
                <span className="icon">
                  <img
                    className="icon-turnip"
                    src={turnip}
                    alt="adorable turnip"
                  />
                </span>
                <div className="desc">
                  <h3>
                    <a href="https://turnip-the-beet.herokuapp.com/">
                      Turnip the Beet
                    </a>
                  </h3>
                  <p>
                    This Ruby on Rails application takes a user's mood and 
                    cuisine preferences and returns curated Spotify playlists.
                    This was created as part of a 4-person group project and
                    selected as a finalist at Turing's Code Fair.
                  </p>
                  <p>
                    Tech stack includes Ruby, Rails, Javascript, PostgreSQL,
                    Sinatra, RSpec, TravisCI, and Heroku.
                  </p>
                  <br />
                  <p>
                    <a
                      className="btn btn-primary btn-learn"
                      href="https://github.com/linda-le1/turnip-the-beet"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github Repo Link
                    </a>
                    <a
                      className="btn btn-primary btn-learn"
                      href="https://turnip-the-beet.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Production Link
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 text-center animate-box">
              <div className="services color-5">
                <span className="icon">
                  <img
                    className="icon-raincloud"
                    src={cloud}
                    alt="happy rain cloud"
                  />
                </span>
                <div className="desc">
                  <h3>
                    <a href="https://github.com/linda-le1/sweater_weather">
                      Sweater Weather
                    </a>
                  </h3>
                  <p>
                    This is a REST API that consumes Google, DarkSky, and
                    Unsplash APIs. It exposes an API that requires an
                    authentication token as well as for CRUD functionality. This
                    was created as a final solo project in less than a week.
                  </p>
                  <p>
                    Tech stack includes Ruby, Rails, RSpec, PostgreSQL, and
                    Heroku.
                  </p>
                  <br />
                  <br />
                  <a
                    className="btn btn-primary btn-learn"
                    href="https://github.com/linda-le1/sweater_weather"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github Repo Link
                  </a>
                  <a
                    className="btn btn-primary btn-learn"
                    href="https://fierce-meadow-03802.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Production Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

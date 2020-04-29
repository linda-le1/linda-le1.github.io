import React, { Component } from 'react'
import angry from "../assets/003-angry.png";
import cloud from "../assets/002-rain.png";
import turnip from "../assets/001-turnip.png";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="project-details">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">
                  Project Highlights
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <img
                          className="icon-hangry-ball"
                          src={angry}
                          alt="hangry eightball"
                        />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Hangry Ateball API<span> Python on Flask</span>
                        </h2>
                        <h4>Wins</h4>
                        <li>
                          Achieving MVP and completing some extensions in 2.5
                          weeks
                        </li>
                        <li>
                          Utilizing git rebase workflow and Agile methodology
                        </li>
                        <li>Using Swagger to create API documentation</li>
                        <li>Creating an app our team wolid actually use</li>
                        <li>Team worked 100% remote</li>
                        <br />
                        <h4>Challenges</h4>
                        <li>Learning Python, Flask, and Pytest</li>
                        <li>
                          COVID-19 affected live restaurant data and potential
                          application adoption
                        </li>
                        <br />
                        <h4>Future Iterations</h4>
                        <li>
                          Implement user authentication(project requirements
                          stipulated that authentication should not be
                          implemented for MVP)
                        </li>
                        <li>
                          Use VCR and fixtures to limit API calls during testing
                        </li>
                        <li>
                          Create database to save information for analysis and
                          user creation
                        </li>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <img
                          className="icon-turnip"
                          src={turnip}
                          alt="tiny turnip"
                        />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Turnip the Beet
                          <span> Ruby on Rails/Ruby on Sinatra</span>
                        </h2>
                        <h4>Wins</h4>
                        <li>Delivering MVP within 2 week project deadline</li>
                        <li>Creating a good user experience</li>
                        <li>
                          Achieving high test coverage with 98% on Rails and
                          100% on Sinatra.
                        </li>
                        <br />
                        <h4>Challenges</h4>
                        <li>Learning Sinatra / Javascript</li>
                        <li>
                          Working with Spotify Tokens that expire every hour
                        </li>
                        <li>Reliant on Spotify Web Player</li>
                        <br />
                        <h4>Future Iterations</h4>
                        <li>
                          Incorporate recipe API to generate recommended recipes
                          to accompany playlists
                        </li>
                        <li>
                          Provide ability to share playlists and cuisines on
                          social media and invite friends to app
                        </li>
                        <li>Update existing recommendation algorithms</li>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <img
                          className="icon-cloud"
                          src={cloud}
                          alt="cute happy raincloud"
                        />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Sweater Weather<span> Ruby on Rails</span>
                        </h2>
                        <h4>Wins</h4>
                        <li>
                          Consuming multiple APIs (some of which required
                          tokens) and providing CRUD functionality
                        </li>
                        <li>
                          Completing solo final project in less than a week
                        </li>
                        <li>
                          Achieving high test coverage for requests, models, and
                          services
                        </li>
                        <br />
                        <h4>Challenges</h4>
                        <li>
                          Experiencing issues with VCR because of time and
                          timezones
                        </li>
                        <li>First project working with supplied wireframes</li>
                        <br />
                        <h4>Future Iterations</h4>
                        <li>Implement more sad path testing</li>
                        <li>
                          Update background endpoint to provide better results
                        </li>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

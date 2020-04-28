import React, { Component } from 'react'

export default class About extends Component {
    render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                      <span className="heading-meta">About</span>
                      <h2 className="colorlib-heading">Who Am I?</h2>
                      <p>
                        I'm a back-end developer based in Denver, Colorado. I
                        have a passion for data, testing, and functionality.
                      </p>
                      <p>
                        Before I became a programmer, I worked in Higher
                        Education. I spent the majority of my time working with
                        international students and later transitioned into
                        managing communications for student housing. Collaborating
                        with a wide variety of stakeholders made me learn how to
                        communicate complex topics simply and solve problems creatively.
                      </p>
                      <p>
                        After I earned my Master's in Information Communications
                        Technology, I sought out a more technical role.
                        This led me to becoming an SEO Strategist at a HubSpot
                        Diamond Partner agency. While I really enjoyed researching and
                        implementing ethical and sound SEO strategies for a diverse
                        set of clients, I decided to pivot again.
                      </p>
                      <p>
                        My lifelong interest in technology, love of languages,
                        and desire to creatively problem solve led me to pursue
                        programming and enroll at Turing School of Software and
                        Design. Turing is a 7-month, in-person, intensive
                        programming school. I'm a highly motivated, empathetic,
                        and conscientious back-end developer with experience in
                        Ruby on Rails.
                      </p>
                      <p>Outside of coding, I'm an avid traveler, huge foodie, and
                          caffeine addict.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
    }
}

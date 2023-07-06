import React from "react";

const About = () => {
  return (
    <main className="about">
      <div className="pg-header">
        <div className="container">
          <h1>About</h1>
        </div>
      </div>
      <div className="container content">
        <div className="row">
          <div className="col-lg-4">
            <h2>Why Choose Us.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores, vitae.
            </p>
          </div>
          <div className="col-lg-4">
            <h2>What We Do</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, fugiat?</p>
          </div>
          <div className="col-lg-4">
            <h2>Our Mission</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, fugiat?</p>
          </div>
        </div>

      </div>
    </main>
  );
};

export default About;

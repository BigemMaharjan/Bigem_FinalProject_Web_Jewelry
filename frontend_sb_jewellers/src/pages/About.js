import React from "react";

function About() {
  return (
    //  About
    <main>
      {/*  Heading for the page to start the information  */}

      {/* Paragraph about the page */}
      <div className="aboutContainer">
        <section className="about">
          {/* Image */}
          <div className="about-image">
            <img src="/images/5.jpg" alt="SB Jewelery" />
          </div>
          {/* Content */}
          <div className="about-content">
            <div className="heading">
              <h1>SB Jewellers</h1>
              <p>Canada</p>
              <p>(437)748-8974</p>
              <p>bmaharjan2906@conestogac.on.ca</p>
              <p>116 Second Avenue, Kitchener, N2C 1N5</p>
              <h2>This is about us the 'Owners'</h2>
            </div>
            {/* First paragraph */}

            <p>
              We are group of people with energy to make something better in
              this world with the jewelers. We dedicate ourselves fully to
              anything that we work on and always carry a motive to become
              successful on that work. Currently, We all are working on a new
              jewelery design which will be out by 2025 January. Contact us if
              you ever need anything. We are happy to help you. Keep Smiling :)
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default About;

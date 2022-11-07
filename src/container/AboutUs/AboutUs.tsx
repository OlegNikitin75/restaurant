import React, { useState } from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  const [stateHistory, setStateHistory] = useState(false);
  const [stateAbout, setStateAbout] = useState(false);
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__inner">
          <div className="about__content about__content--left">
            <h2 className="section__title about__title">About Us</h2>
            <img
              style={{ transform: "rotate(180deg)" }}
              src={images.spoon}
              alt="spoon"
            />
            {!stateAbout && (
              <p className="about__text">
                Do you dream of spending time unforgettable and staying under
                impressions for a long time? Welcome to Geright Restaurant.
              </p>
            )}
            {stateAbout && (
              <p className="about__text">
                Do you dream of spending time unforgettable and staying under
                impressions for a long time? Welcome to Geright Restaurant.
                Comfortable halls with an author's interior for three hundred,
                seventy, fifty and thirty people, an atmosphere where every
                detail impresses and has a solemn look. Culinary masterpieces of
                European and Caucasian cuisine. We have taken care of everything
                so that you will remember the time spent with us for a long
                time, we will organize an unforgettable celebration of various
                formats for you: banquets, weddings, anniversaries. Live music
                will sound for you on weekends, and on holidays we will delight
                you with a grandiose show program. We also have a summer terrace
                and secure parking. Your time spent in our restaurant is our
                reward and pride!
              </p>
            )}

            <button onClick={() => setStateAbout(!stateAbout)} className="btn">
              Know More
            </button>
          </div>
          <div className="about__picture">
            <img src={images.knife} alt="knife" />
          </div>
          <div className="about__content about__content--right">
            <h2 className="section__title about__title">Our History</h2>
            <img src={images.spoon} alt="spoon" />
            {!stateHistory && (
              <p className="about__text">
                The history of our restaurant began on May 30, 1975, when the
                restaurant first opened its doors.
              </p>
            )}

            {stateHistory && (
              <p className="about__text">
                The history of our restaurant began on May 30, 1975, when the
                restaurant first opened its doors. As conceived by the authors
                of the project, the mission of the institution is to provide a
                comfortable gastronomic vacation for loving families and
                friendly companies, single gourmet couples in love in an
                atmosphere of comfort and hospitality. Among the main values of
                the restaurant is comfort for guests and comfort for employees.
                Our team is a team of enthusiastic people who do not just work
                in the hospitality industry, they create this atmosphere! And
                the best reward for us is the gratitude of our guests!
              </p>
            )}
            <button
              onClick={() => setStateHistory(!stateHistory)}
              className="btn"
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

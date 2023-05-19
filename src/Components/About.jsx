import React from 'react';

function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2>{props.title}</h2>
        <p>
          AI enabled attendance application with real-time facial recognition,
          geo location tagging & organizational insights
          <ul className="list">
            <li>Ensuring accurate and efficient record-keeping</li>
            <li>Gain a comprehensive overview of employee attendance </li>
            <li>
              Streamlining time tracking for improved efficiency and accuracy
            </li>
            <li>
              Providing a user-friendly and reliable solution for employees
            </li>
            <li>Providing easy access to overall attendance reports</li>
          </ul>
        </p>
        <button>{props.button}</button>
      </div>
    </div>
  );
}

export default About;

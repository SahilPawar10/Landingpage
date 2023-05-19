import React from 'react';
import Featurebox from './Featurebox';
import featureImage from '../assets/Images/face.jpeg';
import featureImage1 from '../assets/Images/Feature2.jpeg';
import featureImage2 from '../assets/Images/calender.jpeg';
import featureImage3 from '../assets/Images/userDashboard.jpeg';
import featureImage4 from '../assets/Images/SummaryDashboard.jpeg';
import featureImage5 from '../assets/Images/geolocation.jpeg';
import featureImage6 from '../assets/Images/kioskbasedattendence.jpeg';

function Features() {
  return (
    <div id="features">
      <div className="a-container">
        <Featurebox
          image={featureImage}
          title="Facial Based Attendence"
          text="Efficiently track attendance and enhance security with our advanced facial recognition based attendance system."
        />
        <Featurebox
          image={featureImage1}
          title="Leaves and Regularization"
          text="Leave management and regularization processes , simplifying HR operations and ensuring compliance."
        />
        <Featurebox
          image={featureImage6}
          title="Kiosk Based Attendence"
          text="Effortlessly capture attendance with our Kiosk-based solution, streamlining time tracking for improved efficiency and accuracy"
        />
      </div>
      <div className="a-container">
        <Featurebox
          image={featureImage3}
          title="User Dashboard"
          text="Displaying user summary, tracking holidays, leave days, & total working hours, all in one centralized platform"
        />
        <Featurebox
          image={featureImage4}
          title="Overall Attendence Reports"
          text="Overview of employee attendance & track in /outs through our intuitive dashboard of overall attendance reports "
        />
        <Featurebox
          image={featureImage5}
          title="Geo Location & Tagging"
          text="Geo-location & tagging capabilities, allowing you to precisely track & tag employee locations for effective monitoring"
        />
      </div>
    </div>
  );
}

export default Features;

import React from 'react';
import './About.css';
import johnImage1 from './john-fornander-1.jpg';
import johnImage2 from './john-fornander-2.jpg';

class About extends React.Component {


  render() {
    return (
      <div>
        <div className="meetTheTeam">
          <div className="aboutImage1">
            <img src={johnImage1} />
          </div>
          <div className="meetTheTeamText">
            <h1>What we offer</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
        </div>
        <div className="findUs">
          <div className="findUsText">
            <h1>Where to find us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </div>
          <div className="aboutImage2">
            <img src={johnImage2} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;

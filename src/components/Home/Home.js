import React from 'react';
import './Home.css';
import image1 from './Homepage1.jpg';

class Home extends React.Component {


  render() {
    return (
      <div>
        <div className="parentClass">
          <div className="bannerImage">
            <p className="homepageText">"The real glory is being knocked to your knees and then coming back.</p><p className="homepageText">That’s real glory. That’s the essence of it." <span className="Italics">- Vince Lombardi</span></p>
          </div>
        </div>
        <div className="missionSection">
          <img className="missionImage" src={image1} />
          <span className="missionText">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
          </span>
        </div>
      </div>
    );
  }
}

export default Home;

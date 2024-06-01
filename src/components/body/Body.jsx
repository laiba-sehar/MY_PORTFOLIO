import React from "react";
import profileImage from "../../assets/profile.png";
import "./Body.css";

function Body() {
  return (
    <>
      <div className="body-container">
      <div className="image-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
      <div className="about-container">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ut lacus malesuada, in vestibulum purus feugiat.</p>
      </div>
      <div className="text-container">
        <h1>John Doe</h1>
        <p>Web Developer | Designer | Content Creator</p>
      </div>

      </div>
    </>
  );
}

export default Body;

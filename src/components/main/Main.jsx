import React from "react";
import profileImage from "../../assets/profile.png";
import arrowImage from "../../assets/right-up.png";
import dashboard from "../../assets/dashboard1.png";
import porfolio from "../../assets/Portfolio.png";
import "./Main.css";

function main() {
  return (
    <>
      <div className="body-container1">
        <div className="image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="text-container">
          <p style={{ color: "white" }}>
            Laiba Sehar{" "}
          </p>
          <p>Frontend Website Developer</p>
        </div>
      </div>
      <div className="body-container2">
        <div className="about-section">
          <p style={{ color: "white" }}>About</p>
          <p>
            GM, Laiba! I'm passionate about crafting dynamic, user-centric
            websites from conception to completion. I specialize in creating
            engaging interfaces that evolve and enhance based on user insights
            and analytics.
          </p>
        </div>
      </div>

      <div className="body-container4">
        <div className="projects-wrapper">
          <p style={{ color: "white"}} className="pheading">Projects</p>
          <div className="project-item">
            <p style={{ color: "#9EA0A3" }}>Ongoing</p>
            <div className="project-content">
            <a
                href="https://admin-dashboard-769e8.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >

              <img src={dashboard} alt="Project" className="project-image" />
              </a>
              <div className="project-description">
              <p>Dashboard</p>
              <p style={{color:'#9EA0A3'}} >
                Showcase of my web development projects featuring responsive
                design.
              </p>
              </div>
            </div>
          </div>
          <div className="project-item">
            <p style={{ color: "#9EA0A3" }}>2023</p>
            <div className="project-content">
            <a
                href="https://portfolio-ae40b.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >
              <img src={porfolio} alt="Project" className="project-image" />
              </a>
              <div className="project-description">
             <p>Portfolio</p> 
              <p style={{color:'#9EA0A3'}}>
                Interactive and user-friendly dashboard built with React.
              </p>
              </div>
            </div>
          </div>

          {/* Repeat project-item as needed */}
        </div>
      </div>

      <div className="body-container3">
        <div className="links-wrapper">
          <p style={{ color: "white" }} className="Lheading">Links</p>
    
          <div className="link-item">
      
            <p style={{ color: " #9EA0A3" }}>GitHub</p>
            <a
              href="https://github.com/laiba-sehar"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/laiba
              <img src={arrowImage} alt="Arrow" className="arrow-image" />
            </a>
      
          </div>

          <div className="link-item">
            <p style={{ color: " #9EA0A3" }}>YouTube</p>
            <a
              href="https://www.youtube.com/@laibasehar9412"
              target="_blank"
              rel="noopener noreferrer"
            >
              youtube.com/laiba-sehar
              <img src={arrowImage} alt="Arrow" className="arrow-image" />
            </a>
          </div>

          <div className="link-item">
            <p style={{ color: " #9EA0A3" }}>Twiter</p>
            <a
              href="https://twitter.com/Layeba_Sehar"
              target="_blank"
              rel="noopener noreferrer"
            >
              twitter.com/Layeba_Sehar
              <img src={arrowImage} alt="Arrow" className="arrow-image" />
            </a>
          </div>
          <div className="link-item">
            <p style={{ color: " #9EA0A3" }}>LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/laiba-sehar-027a29271"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/laiba-sehar
              <img src={arrowImage} alt="Arrow" className="arrow-image" />
            </a>
          </div>
          <div className="link-item">
            <p style={{ color: " #9EA0A3" }}>Instagram</p>
            <a
              href="https://www.instagram.com/layeba_sehar?igsh=aGwyMXc1NGZxdmVu"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram.com/layeba_sehar
              <img src={arrowImage} alt="Arrow" className="arrow-image" />
            </a>
          </div>
        </div>
      </div>
  
 
    </>
  );
}

export default main;

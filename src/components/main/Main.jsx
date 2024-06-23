import React from "react";
import profileImage from "../../assets/WhatsApp Image 2024-06-18 at 3.24.31 PM.jpeg";
import arrowImage from "../../assets/right-up.png";
import dashboard from "../../assets/dashboard1.png";
import porfolio from "../../assets/Portfolio.png";
import recipe from '../../assets/recipe.png';
import watch from '../../assets/watchapp.png';
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
            Laiba Sehar{""}
          </p>
          <p>Frontend Website Developer</p>
        </div>
      </div>
      <div className="body-container2">
        <div className="about-section">
          <p style={{ color: "white" }} className="about-heading">About</p>
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
          <a
                href="https://admin-dashboard-769e8.web.app"
                target="_blank"
                rel="noopener noreferrer"
              >

              <img src={dashboard} alt="Project" className="project-image" />
              </a>
            <div className="project-content">
      
              <div className="project-description">
              <p>Dashboard</p>
              <p style={{color:'#9EA0A3'}} >
              A dynamic dashboard built with React for real-time data visualization and seamless user interaction.
                
              </p>
              </div>
            </div>
          </div>

          <div className="project-item">
          <a
                href="https://watch-website-85c3a.web.app/"
                target=""
                rel="noopener noreferrer"
              >

              <img src={watch} alt="Project" className="project-image" />
              </a>
            <div className="project-content">
           
          
      
              <div className="project-description">
              <p>E commerce</p>
              <p style={{color:'#9EA0A3'}} >
              A responsive e-commerce frontend for a watch store, crafted with React.
              </p>
              </div>
            </div>
          </div>

          <div className="project-item">
          <a
                href="https://recipe-website-5dec7.web.app/"
                target=""
                rel="noopener noreferrer"
              >

              <img src={recipe} alt="Project" className="project-image" />
              </a>
            <div className="project-content">
       
              <div className="project-description">
              <p>Recipes</p>
              <p style={{color:'#9EA0A3'}} >
              Discover and search recipes from around the world with this user-friendly React application.
              </p>
              </div>
            </div>
          </div>

          <div className="project-item">
          <a
                href="https://first-portfolio-e25eb.web.app"
                target=""
                rel="noopener noreferrer"
              >
              <img src={porfolio} alt="Project" className="project-image" />
              </a>
            <div className="project-content">
       
              <div className="project-description">
             <p>Portfolio</p> 
              <p style={{color:'#9EA0A3'}}>
              A showcase of my HTML and CSS skills, featuring a clean, responsive design.
               
              </p>
              </div>
            </div>
          </div>

          {/* Repeat project-item as needed */}
        </div>
      </div>


      <div className="body-container-skills">
        <div className="skills-section">
          <p style={{ color: "white" }} className="skills-heading">Skills</p>
          <div className="skills-list">
            <div className="skill-item">
              <p>React</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <p>JavaScript</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <p>HTML & CSS</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "95%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <p>Responsive Design</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "90%" }}></div>
              </div>
            </div>
            <div className="skill-item">
              <p>Git & GitHub</p>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: "80%" }}></div>
              </div>
            </div>
          </div>
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
              github.com/laiba-sehar
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

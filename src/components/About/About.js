import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import profileImg from "../../Assets/profile.png";
import Toolstack from "./Toolstack";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About Me
            </h1>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingBottom: "50px",
            }}
          >
            
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "60px"}}
            className="about-img"
          >
            <img src={profileImg} alt="about" className="img-fluid" />
          </Col>

          
          <Col
            md={5}
            style={{  paddingBottom: "50px" }}
            className="about-img">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
          <Col>                    
          <p style={{textAlign:"left"}}>
            Aside from Developing, I'm a 
          </p>
          <ul style={{textAlign:"left", paddingBottom: 10}}>
            <li >
               Reader
              <br />
              <p style={{paddingLeft:30}}>My kindle and my cat are my best friends. 
              So far I've completed over 50 books this year and I don't plan on stopping. 
              Being able to step into another world allows me to revisit issues in projects with a new perspective.
              My current favorite: <i>Frankenstien By Mary Shelley</i></p>
            </li>
            <li >
               Traveler
              <br />
              <p style={{paddingLeft:30}}>Luckily I grew up with parents who valued 
              experiences over material objects, so I've been traveling since before 
              I could remember. I've done almost all of the US and most of the surrounding 
              islands. My most memoriable is the cruise we took through Alaska and Canada, 
              visiting the glacier park along the way. My next adventure I plan on tackling is Greece.</p>
            </li>
            <li>
               Collector of Hobbies
              <br />
              <p style={{paddingLeft:30}}>As I stated above, I love learning, so over time 
              I've gained a couple of hobbies. Generally, I am drawn to activities that 
              require some creativity including gardening, knitting, painting, writing, 
              sewing, running, dancing, lego building and the list goes on, but I'm a strong believer in trying 
              new things and stepping out of my comfort zone. </p>
            </li>
            <li> Cat Mom
              <br />
              <p style={{paddingLeft:30}}>My sophmore year of high school, Kitty came into my life 
              and we've been inseprable since. I spend almost all of my freetime with, and money on, 
              him and I wouldn't have it any other way.</p>
            </li>
            <li> Graphic Designer
              <br />
              <p style={{paddingLeft:30}}> In high school, I began dabbling in digital art. Since then
               I've created countless pieces from photo editing to logos. Combining my love for creating 
               with my love for technology, </p>
            </li>
          </ul>
          </Col>
        </Row>
        <h1 className="project-heading">
          Programming <strong className="popOColor">Tech Stack </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="popOColor">Tools</strong> I Utilize
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;

import React from "react";
import Card from "react-bootstrap/Card";
import { GiSunflower } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
          <p style={{ textAlign: "right" }}>
            <h3>5 things you need to know about me:</h3>
              <br />
              <span className="popOColor" style={{fontSize: 30}}>1 |</span> Everything I develop is a 
              passion project. The best lesson I learned in my education is “do good and do well.” I 
              hope to apply my developer skills to make the world even a fraction better. 
              <br />
              <span className="popOColor" style={{fontSize:30}} >2 |</span> I've always been an engineer. 
              While I have a degree now, I have been using my creativity and curiosity to solve problems 
              and make my life easier since I could remember.  
              <br />
              <span className="popOColor" style={{fontSize:30}}>3 |</span> I have a passion for learning.
              I knew I had to go into a field I would never grow tired of. Though I've graduated, I 
              still feel as I haven't made a dent in my education in the vast space of technology so I 
              find myself constantly learning new techniques and languages so I can apply them to my 
              projects.
              <br />
              <span className="popOColor" style={{fontSize:30}}>4 |</span> I'm become a quick learner. As
              a first-generation college graduate, I've had to navigate my career on my own. Another r
              eason technology is for me, I enjoy getting thrown into problems and figuring my way out. 
              <br />
              <span className="popOColor" style={{fontSize:30}}>5 |</span> Change is inevitable, 
              essential even, I've grown to be adaptable. I enjoy the hours I spend researching new
              languages and techniques and being able to apply them to the revamping my old projects 
              or starting new ones.
          </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

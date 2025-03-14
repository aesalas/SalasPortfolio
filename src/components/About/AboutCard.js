import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">

      <Card.Body>
      <h3 style={{textAlign:"left"}}>
              5 things you should know about me: 
            </h3>
          <p style={{ textAlign: "left", lineHeight: 1.5, fontSize: 15 }}>
              <span className="popOColor" style={{fontSize: 25}}>1 |</span> Everything I develop is a 
              passion project. The best lesson I learned in my education is “do good and do well.” I 
              hope to apply my developer skills to make the world even a fraction better. 
              <br />
              <span className="popOColor" style={{fontSize:25}} >2 |</span> I've always been an engineer. 
              While I have a degree now, I have been using my creativity and curiosity to solve problems 
              and make my life easier since I could remember. 
              <br />
              <span className="popOColor" style={{fontSize:25}}>3 |</span> I have a passion for learning.
              I knew I had to go into a field I would never grow tired of. Though I've graduated, I 
              still feel as I haven't made a dent in my education in the vast space of technology so I 
              find myself constantly learning new techniques and languages so I can apply them to my 
              projects.
              <br />
              <span className="popOColor" style={{fontSize:25}}>4 |</span> I'm become a quick learner. As
              a first-generation college graduate, I've learned to navigate my career on my own. Like most
              engineers, I enjoy getting thrown into problems and figuring my way out. 
              <br />
              <span className="popOColor" style={{fontSize:25}}>5 |</span> Change is inevitable, 
              essential even, and I've grown to be adaptable. I enjoy the hours I spend researching new
              languages and techniques and being able to apply them to revamp my old projects 
              or start new ones.
          </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

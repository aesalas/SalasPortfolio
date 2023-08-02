import React from "react";
import Card from "react-bootstrap/Card";
import {GiButterfly} from "react-icons/gi";

function AboutCardPers() {
  return (
    <Card className="quote-card-view">

      <Card.Body>
        <h3 style={{textAlign:"left"}}>
          Besides a Developer, I'm a 
        </h3>
        <span className="about-pers-heading"> <GiButterfly/> Reader</span>
          <br />
          <p style={{paddingLeft:30}}> 
            I take my Kindle everywhere, so I'm always reading. 
            Being able to step away from the world helps me gain 
            perspective and gather my thoughts to better my work.
            My current read: <i>Midnight Library by Matt Haig</i>
          </p>
        <span className="about-pers-heading">  <GiButterfly/> Traveler </span>
          <br />
          <p style={{paddingLeft:30}}>
            Luckily, I grew up with parents who valued experiences 
            over tangible objects, so I've been traveling since before 
            I could remember. My favorite trip so far has been the cruise 
            we took through Alaska and Canada, passing through Glacier National Park.
          </p>
          
        <span className="about-pers-heading"> <GiButterfly/> Collector of Hobbies </span>
          <br />
          <p style={{paddingLeft:30}}>
            I love learning, and as a result, I've gone through many 
            hobbies. In general, I am drawn to activities that require some 
            level of creativity, such as puzzle solving, knitting, painting, writing, 
            sewing, running, dancing, Lego building, and so on.
            </p>

        <span className="about-pers-heading">  <GiButterfly/> Cat Mom </span>
          <br />
          <p style={{paddingLeft:30}}> 
            I adopted Kitty about 8 years ago, and we've been inseparable 
            since. Whether I'm reading on the couch or programming in the 
            patio, kitty is usually sleeping on or near me.
          </p>

        <span className="about-pers-heading"> <GiButterfly/> Graphic Designer </span>
            <br />
            <p style={{paddingLeft:30}}>
              I was first introduced to digital media in high school. Since then, 
              I've created countless pieces, from photo editing to designing logos, combining 
              my love for creating with my love for technology.  
            </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCardPers;

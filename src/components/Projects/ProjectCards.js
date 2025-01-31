import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsBoxArrowUpRight, BsFillImageFill, BsGithub  } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}
        </Card.Body>
        <Card.Footer>
        {/* If the component contains Demo link */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >

            {"Demo "}&nbsp;
            <BsBoxArrowUpRight /> 
            
          </Button>
        )}

        {/* If the component contains Github link */}
        {props.ghLink && (
          <Button 
            variant="primary" 
	          href={props.ghLink} 
	          target="_blank" 
	          style={{ marginLeft: "5px" }}
          >
          
          <BsGithub/> &nbsp; GitHub

        </Button>
        )}

        {/* If the component contains neither a Demo link nor a Github link */}
        {!props.demoLink && !props.ghLink && (
          <Button variant="primary" href={props.imgPath} target="_blank">
          <BsFillImageFill  /> &nbsp; Open Image
        </Button>
        )}

      
      </Card.Footer>
    </Card>
  );
}
export default ProjectCards;

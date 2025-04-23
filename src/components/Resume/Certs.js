import React from "react";
import Card from "react-bootstrap/Card";

function Certs(props) {
  return (
    <Card className="resume-card-view">
        <Card.Header>
            <Card.Title><h3> <strong >{props.title}</strong>

            </h3></Card.Title>  
        </Card.Header>
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {"\n"}
        {"\n"}
        </Card.Body>
    </Card>
  );
}
export default Certs;

import React from "react";
import { Container, Row, Accordion } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Alexandra_Salas_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";


function ResumeNew() {
return (
      <Container fluid className="resume-section">
      <h1 style={{ fontSize: "2.1em", paddingTop: 25}}>
      <strong className="popOColor">Summary </strong>
      </h1>
        <Accordion defaultActiveKey="0" flush >
          {/***** Experience and projects *****/}
          <Accordion.Item eventKey="0">
            <Accordion.Header><h3> Experience and Projects </h3></Accordion.Header>
              <Accordion.Body>
              <h3> <strong className="popOColor"> Auto Test Fixture</strong>  American Traction Systems/Saminco <br/> 
              <i>Senior project, Sept 2021 – May 2022</i></h3>
                <ul className="resume-list">
                  <li >
                    Worked in a team of five using agile methodology to complete
                    web application that features a test procedure builder that 
                    provides engineers with tools for creating procedures composed 
                    of automated and manual steps that can then be used by test 
                    technicians to test devices and produce reports.
                  </li>
                  <li>
                      Created documentation and diagrams to better understand 
                      requirements and expectations, and processes of requirements 
                      engineering.
                  </li>
                  <li>
                      Utilized .NET Core/C#, Electron.NET, Docker, HTML/CSS, 
                      Angular/Nebular, SQLite, Node.JS, GitHub, and Visual studios IDE
                  </li>
                </ul>

              <h3> <strong className="popOColor"> Vas Home Inspection Web Application</strong>,  Vas Home Inspections 
              <br/> <i>Freelance, August 2022 – Present</i></h3>
                <ul className="resume-list">
                  <li >
                    Designed and developed website to display business information and increase clientele.
                  </li>
                  <li>
                    Utilized Search Engine Optimization, Reactjs, Github, Visual Studios/Visual Studio Code
                  </li>
                </ul>

              <h3> <strong className="popOColor"> Personal Portfolio Website</strong> 
              <br/> <i>Personal Project, August 2022 – Present</i></h3>
                <ul className="resume-list">
                  <li >
                  	Designed and developed website to showcase programming projects and skills and hosted with a custom domain using Netlify.
                  </li>
                  <li>
                  	Implemented Search Engine Optimization (SEO) strategies using Reactjs, GitHub, Visual Studio to create an interactive and responsive user interface
                  </li>
                </ul>
              <h3> <strong className="popOColor">Web3 Client Application </strong> <br/> <i>Personal Project, August 2022</i></h3>
                <ul className="resume-list">
                  <li >
                    Wrote and deployed a smart contract in solidity to the blockchain and built a Web3 client app to allow interactions with the smart contract.
                  </li>
                  <li>
                    Utilized Solidity, Replit, Ethereum, Ethereum test networks, Reactjsx
                  </li>
                </ul>

              <h3> <strong className="popOColor">Adjuster Assistant / QA Examiner </strong>, Vas Claim Adjusters <br/> <i>June 2020 – Present</i></h3>
                <ul className="resume-list">
                  <li >
                    Managed receptionist area, including greeting customers, responding to telephone, and in-person requests for information. 

                  </li>
                  <li>
                    Prepared reports to be sent out to insurance companies and realtors.	
                  </li>
                  <li>
                    Managed inspection schedule.
                  </li>
                </ul>

              </Accordion.Body>
          </Accordion.Item>

          {/***** Skills and Qualities *****/}
          <Accordion.Item eventKey="1" flush>
          <Accordion.Header><h3> Skills and Qualities</h3></Accordion.Header>
            <Accordion.Body>
              <ul className="resume-list">
                <li >
                  Programming experience in Java, JavaFX, JavaScript, C/C++, Python, SQL, HTML/CSS, .NET framework, C#, Solidity, Reactjs

                </li>
                <li>
                Completed coursework includes Requirements engineering, Data engineering, Computer Assembly Language, Cloud technology, Object-Oriented Programming, Software Security, Blockchain Applications, programming methodologies, and Data Structures and Algorithms

                </li>
                <li>
                Educated in Adobe Photoshop, Adobe Illustrator, Atlassian (Jira and Confluence), Git/Github
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          {/***** Education *****/}
          <Accordion.Item eventKey="2" flush>
          <Accordion.Header><h3> Education </h3></Accordion.Header>
            <Accordion.Body>
              <ul className="resume-list">
                <li >
                	Florida Gulf Coast University, Bachelor of Science in Software Engineering with Mathematics minor, Magna Cum Laude, First-generation college graduate
                </li>
                </ul>
            </Accordion.Body>
          </Accordion.Item>
          {/***** Awards and Achievements *****/}
          <Accordion.Item eventKey="3" flush>
          <Accordion.Header><h3>  Certifications and Licenses </h3></Accordion.Header>
            <Accordion.Body>
            <ul className="resume-list">
                <li >
                	Professional Claims Adjuster All Lines License, 2023-Present
                </li>
                <li >
                	Introduction to Enterprise-grade AI, IBM 
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
      </Container>
  );
}

export default ResumeNew;

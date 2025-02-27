import React from "react";
import { Container, Row, Accordion, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Alexandra_Salas_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ContactForm from '../ContactForm';

function ResumeNew() {
return (
      <Container fluid className="resume-section">
      <h1 style={{ fontSize: "2.1em", paddingTop: 25}}>
      <strong className="popOColor">Summary </strong>
      </h1>
      <Col md={{span: 10, offset:1}}>
        <Accordion defaultActiveKey="0" flush >
      
          {/***** Experience and projects *****/}
          <Accordion.Item eventKey="0">
            <Accordion.Header><h3> Experience and Projects </h3></Accordion.Header>
              <Accordion.Body>

              {/***** ATF *****/}
              <h3> <strong className="popOColor"> Auto Test Fixture</strong>  American Traction Systems/Saminco <br/> <i>Senior project, Sept 2021 – May 2022</i></h3>
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
                      requirements and expectations of client, and processes of requirements 
                      engineering.
                  </li>
                  <li>
                      Utilized .NET Core/C#, Electron.NET, Docker, HTML/CSS, 
                      Angular/Nebular, SQLite, Node.JS, GitHub, and Visual studios IDE
                  </li>
                </ul>
              {/***** PP *****/}
              <h3> <strong className="popOColor"> Person Portfolio Website</strong>  <br /> <i>Personal Project, August 2022</i></h3>
                <ul className="resume-list">
                    <li >
                        Designed and developed website to showcase programming projects and skills and hosted with
                        a custom domain using Netlify. Continuously maintaining and updating.
                    </li>
                    <li>
                        Implemented Search Engine Optimization (SEO) strategies using Reactjs, GitHub, Visual Studio
                        to create an interactive and responsive user interface.
                    </li>
                </ul>

              {/***** LAB *****/}
              <h3> <strong className="popOColor"> Cookie Bakery Web Application</strong>,  Life's a Batch Baking Co. <br/> <i>Freelance, August 2024</i></h3>
                <ul className="resume-list">
                  <li >
                    Designed, developed and currently maintaining website to display menu for farmers markets.
                  </li>
                  <li>
                    Utilized Frontend development styles, Web optimization, Photoshop, Canva, Search Engine Optimization
                  </li>
                </ul>
              
              {/***** Web3 *****/}
              <h3> <strong className="popOColor">Web3 Client Application </strong> <br/> <i>Personal Project, August 2022</i></h3>
              <ul className="resume-list">
                  <li >
                    Wrote and deployed a smart contract in solidity to the blockchain and built a Web3 client app to allow interactions with the smart contract.
                  </li>
                  <li>
                    Utilized Solidity, Replit, Ethereum, Ethereum test networks, Reactjsx
                  </li>
              </ul>

                {/***** QA *****/}
                <h3> <strong className="popOColor">Adjuster Assistant / QA Examiner</strong>, Vas Claim Adjusters <br/> <i>June 2020 – June 2022</i></h3>
                <ul className="resume-list">
                  <li >
                      Used Xactanalysis/Xactimate software to review final reports for errors prior to submission.
                  </li>
                  <li>
                      Prepared, reviewed, and summarized declaration page and prior estimates to prepare inspector for inspection.
                  </li>
                </ul>

                {/***** QA - Evolv *****/}
                <h3> <strong className="popOColor">QA Reviewer</strong>, Evolv Claim Solutions <br/> <i>June 2022 – Present</i></h3>
                <ul className="resume-list">
                  <li >
                     Learned Symbility software to review and edit files to minimize errors and provide Quality assurance prior to generating final report packages to send to carriers.
                  </li> 
                  <li>
                  Train and manage new hires, providing support during the onboarding process.
                  </li>                  
                </ul>                              

              </Accordion.Body>
          </Accordion.Item>

          {/***** Skills *****/}
          <Accordion.Item eventKey="1" flush>
          <Accordion.Header><h3> Technical Skills </h3></Accordion.Header>
            <Accordion.Body>
              <ul className="resume-list">
                <li >
                Programming Languages: JavaScript, TypeScript, C++, Java, C#, Python, SQL, Solidity, HTML/CSS
                </li>
                <li>
                Frameworks & Tools: React.js, Angular, .NET Core, Node.js, Electron.NET, Docker, SQLite, Git/GitHub
                </li>
                <li>
                Software & Platforms: Adobe Photoshop, Adobe Illustrator, Atlassian (Jira, Confluence), Symbility, Xactware
                </li>
                <li>  
                Development Concepts: Agile Methodology, Requirements Engineering, Data Engineering, Cloud Technology
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          {/***** Education *****/}
          <Accordion.Item eventKey="2" flush>
          <Accordion.Header><h3> Education </h3></Accordion.Header>
            <Accordion.Body>
              <h3> <strong className="popOColor"> Florida Gulf Coast University	</strong> <i>Fort Myers, FL</i> </h3>
              <p className="resume-list">
              Bachelor of Science in Software Engineering, Minor in Mathematics
              <br/><i>GPA: 3.8, Graduated Magna Cum Laude: May 2022</i>
              <br/> <strong className="popOColor">Relevant Coursework: </strong> Software Engineering, Database Management Systems, Web Development, Operating Systems, Computer Networks, Software Testing and 
              Quality Assurance, Requirements engineering, Data engineering, Cloud technology, Object-Oriented Programming, Data Structures and Algorithms.
              </p>
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
                <li >
                    Entrepreneurial Mindset Badge, FGCU
                </li>
                <li>
                  Pandas Certificate, Kaggle 
                </li>
                <li>
                  Python Certificate, Kaggle 
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </Col>
        <Row style={{ justifyContent: "center", position: "relative" , paddingBottom:"20px" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px"}}
          >
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Col md={{ span: 6, offset: 3 }} className="home-about-social">
            <h1>Questions?</h1>
              <p>Reach out on LinkedIn or fill out the form to send me an email!</p>
              
                <ContactForm/>
              
        </Col>
      </Container>
  );
}

export default ResumeNew;

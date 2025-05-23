import React from "react";
import { Container, Row, Accordion, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Alexandra_Salas_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import ContactForm from '../ContactForm';
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";

/* import images */
import adjust from "../../Assets/Certs/adjuster.jpg";
import AiEnt from "../../Assets/Certs/ai enterprise.jpg";
import entre from "../../Assets/Certs/entrepnuer.jpg";
import ml from "../../Assets/Certs/ml.png";
import pndas from "../../Assets/Certs/pandas.png";
import py from "../../Assets/Certs/python.png";
import Certs from "./Certs";
import introSQL from "../../Assets/Certs/IntroSQL.png";
import EAJobSim from "../../Assets/Certs/EAJobSim.png";


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
              <h3> <strong className="popOColor"> Auto Test Fixture,</strong>  American Traction Systems/Saminco <br/> <i>Senior project, Sept 2021 – May 2022</i></h3>
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
              <h3> <strong className="popOColor"> Freelance Web Developer </strong>,  Life's a Batch Baking Co. <br/> <i>Freelance, August 2024</i></h3>
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
              <p className="resume-list">
                <strong className="popOColor">Programming Languages: </strong>
                JavaScript, TypeScript, C++, Java, C#, Python, SQL, Solidity, HTML/CSS
                <br/>
                <strong className="popOColor">Frameworks & Tools: </strong>
                React.js, Angular, .NET Core, Node.js, Electron.NET, Docker, SQLite, Git/GitHub
                <br/>
                <strong className="popOColor">Software & Platforms: </strong>
                VScode, IntelliJ, Pycharm, Adobe Photoshop, Adobe Illustrator, Atlassian (Jira, Confluence), Symbility, Xactware, ChatGPT, Gemini, Github Copilot, OpenAI, Watson
                <br/>
                <strong className="popOColor">Development Concepts: </strong>
                Agile Methodology, Requirements Engineering, Data Engineering, Machine Learning/AI, Cloud Technology, Data Structures and Algorithms, Object-Oriented Programming, Software Testing and Quality Assurance
                
              </p>
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

          {/***** Certifications and license *****/}
          <Accordion.Item eventKey="3" flush>
          <Accordion.Header><h3>  Certifications and Licenses </h3></Accordion.Header>
            <Accordion.Body>
              <Flicking
              align="prev"
              autoResize= {true}
              circular={true}
              className="resume-list"
              onMoveEnd={e => {
                console.log(e);
                }}>

              <div style={{width: "500px" }}>
                <Certs
                  imgPath={adjust}
                  title="Professional Claims Adjuster All Lines License"
                  description="2023-Present"
                />
              </div>

              <div style={{ width: "500px"}}>
                <Certs
                  imgPath={AiEnt}
                  title="Introduction to Enterprise-grade AI"
                  description="IBM course that taught me the fundamentals of artificial intelligence for business 
                  along with topics including virtual agents, NLP, industry adoption trends, and AI evolution."
                />
              </div>
              <div style={{ width: "500px" }}>
                <Certs
                  imgPath={entre}
                  title="Entrepreunerial Mindset Badge"
                  description="FGCU provided course where I learned the process of fundamental transformation 
                  from innovative idea to enterprise and from enterprise to value."
                />
              </div>
              <div style={{ width: "500px" }}>
                <Certs
                  imgPath={pndas}
                  title="Pandas Certificate"
                  description="Kaggle course that taught me the fundamentals of data manipulation and analysis
                   using Pandas encompassing data creation, reading, and writing; indexing, selection, and assignment; 
                   summary functions and mapping; grouping and sorting; data kinds and handling missing values; 
                   as well as renaming and combining datasets."
                />
              </div>
              <div style={{width: "500px"}}>
                <Certs
                  imgPath={py}
                  title="Python Certificate"
                  description="Kaggle course that served as a refresher enabling me to revisit the fundamentals of Python 
                  programming, encompassing data types, functions, booleans, lists, loops, strings, dictionaries, 
                  and the utilization of external libraries."
                />
              </div>
              <div style={{ width: "500px"}}>
                <Certs
                  imgPath={ml}
                  title="Intro to Machine Learning Certificate"
                  description="Kaggle course that instructed me the fundamentals of machine learning, 
                  encompassing model functionality, fundamental data exploration, construction of a machine learning model, 
                  model validation, overfitting and underfitting, the random forest technique, and participation in a 
                  machine learning competition."
                />
              </div>
              <div style={{ width: "500px"}}>
                <Certs
                  imgPath={introSQL}
                  title="Intro to SQL Certificate"
                  description="Kaggle course that taught me the fundamentals of SQL programming, specifically how to set up 
                  BigQuery and SQL and the components of Select, From, Where, Group By, Having, Count, order by, As, and With,
                   as well as how to join data."
                />
              </div>
              <div style={{ width: "500px"}}>
                <Certs
                  imgPath={EAJobSim}
                  title="Software Engineering Job Simulation"
                  description="Proposed a new feature for the EA Sports College Football and wrote a Feature Proposal 
                  describing it to other stakeholders. Built a class diagram and created a header file in C++ with class 
                  definitions for each object. Patched a bugfix and optimized the EA Sports College Football codebase by 
                  implementing an improved data structure."
                />
              </div>
              
            </Flicking>
          
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

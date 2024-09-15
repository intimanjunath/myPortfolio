import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Object Detection and Person Tracking using Drone"
              description="Designed a fully operational drone with the ability to identify human activity for surveillance purposes using Raspberry Pi and APM 2.8 flight controller, enabling the UAV to operate autonomously."
              ghLink="https://github.com/"
              demoLink="https://manju.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Employee Onboarding Website"
              description="Developed an employee onboarding platform that streamlines document collection, tracks daily attendance, and provides an intuitive administrator interface for managing employee activities."
              ghLink="https://github.com/"
              demoLink="https://blogs.manju.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="APP Tracker"
              description="Developed a time-tracking app for Windows to monitor user activity across various apps and websites, improving digital well-being.Utilized Python libraries to generate detailed activity reports and visualizations, promoting effective time management."
              ghLink="https://github.com/"
              demoLink="https://editor.manju.tech/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="LLM-RAG (Retrieval-Augmented Generation) "
              description="Pioneered development of a sophisticated Retrieval-Augmented Generation (RAG) model, integrating LLM with external databases, boosting poem retrieval precision by 45% and generating highly meaningful and contextually rich poetic content."
              ghLink="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Accident Detection using CNN"
              description="Developed and deployed machine learning models, including Logistic Regression, Random Forest, SVM, KNN, and Decision Trees, using deep learning and computer vision techniques to detect vehicle collisions from dashcam footage and promptly report accidents to emergency services with validated images."
              ghLink="https://github.com/"
              demoLink="https://plant49-ai.manju.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/"
              // demoLink="/"    
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

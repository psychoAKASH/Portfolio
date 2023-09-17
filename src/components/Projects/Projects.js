import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import art from "../../Assets/Projects/daleprojectFinal.png";
import carprice from "../../Assets/Projects/CarPricePredictor.png";
import dbwebapp from "../../Assets/Projects/DiabeticPredictionWebAppFinal.png";
import replica from "../../Assets/Projects/frontendReplicafinal.png";
import ira from "../../Assets/Projects/irasoftConsultancyFinal.png";
import kkp from "../../Assets/Projects/krishikalyaanfinal.png";

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
              imgPath={carprice}
              isBlog={false}
              title="Car Price Predictor"
              description="With the help of Supervised Machine Learning algorithm, a model is trained upon dataset of cars. The trained model will predict the price of car on the basis of some input features. This trained model is used to create a webapp made with html,css,bootstrap, django framework."
              ghLink="https://github.com/psychoAKASH/CarPricePredictor"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kkp}
              isBlog={false}
              title="Krishi Kalyaan Portal"
              description="This webapp helps one to identify the crop that should be cultivated on the land on the basis of the components present in the soil, humidity, rainfall, etc. A Supervised Machine Learning algorithm is used in this project. Model is trained on the dataset taken from a kaggle repository. There's also a chatbot for customer suport and a news api for latest news."
              ghLink="https://github.com/psychoAKASH/projectKKP"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={art}
              isBlog={false}
              title="Artistic Kraft"
              description="With the help of the OpenAI API'S Dall-e model and Django framework, this project is built. For the frontend tailwind css is used in it. On the basis of the text prompt given by user, images are generated on the spot by the AI model."
              ghLink="https://github.com/psychoAKASH/Artistic-Kraft"
              // demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dbwebapp}
              isBlog={false}
              title="Diabetic Prediction Webapp"
              description=" This user-friendly platform harnesses the power of machine learning to provide accurate and personalized predictions, helping individuals make informed decisions about their diabetes risk. Built with python, streamlit."
              ghLink="https://github.com/psychoAKASH/diabeticPrediction"
              demoLink="https://diabeticprediction-ckr8zi7wsyogty3amjjxel.streamlit.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ira}
              isBlog={false}
              title="A Training Website (Ira trainings)"
              description="Collaboratively designed, developed, and deployed a comprehensive training website using Python, Django, and MySQL, ensuring product quality through rigorous testing. Also created a blog panel inside this website "
              // ghLink=""
              // demoLink="" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={replica}
              isBlog={false}
              title="Website Replica (Apple)"
              description="A static website replica of Apple Inc. Normal Html, CSS  is used for this website. Also tried to make it fully responsive."
              ghLink="https://github.com/psychoAKASH/My-First-website-replica"
               demoLink="https://psychoakash.github.io/My-First-website-replica/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { greeting, projectsHeader, publicationsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import PublicationData from "../../shared/opensource/publications.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assests/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
                <hr/>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div>
                  <h5>LOGIN CREDENTIALS (User)</h5>
                    <h6>Email: <span style={{ color: theme.secondaryText }}>testemail@gmail.com</span></h6>
                    <h6>Password: <span style={{ color: theme.secondaryText }}>Test@123</span></h6>
                  </div>
                  <div className="mx-4">
                  <h5>LOGIN CREDENTIALS (Admin)</h5>
                    <h6>Email: <span style={{ color: theme.secondaryText }}>admin@gmail.com</span></h6>
                    <h6>Password: <span style={{ color: theme.secondaryText }}>Admin@1234</span></h6>
                  </div>
                </div>
                <div className="my-4 d-flex flex-column justify-content-center align-items-start">
                  <h6>User Credentials: <span style={{ color: theme.secondaryText }}>Applicable for Food-Delivery, Markdown-Editor, Census-UserData</span></h6>
                  <h6>Admin Credentials: <span style={{ color: theme.secondaryText }}>Applicable only for Food-Delivery</span></h6>
                </div>
              </div>
            
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        {/* <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubRepos}
          newTab={true}
          theme={theme}
        /> */}

        {/* Publications  */}

        {/* <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="publications-heading-div">
              <div className="publications-heading-text-div">
                <h1
                  className="publications-heading-text"
                  style={{ color: theme.text }}
                >
                  {publicationsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {publicationsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div> */}

        {/* <div className="repo-cards-div-main">
          {PublicationData.data.map((repo) => {
            return <PublicationCard repo={repo} theme={theme} />;
          })}
        </div> */}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;

import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div>
      <Fade bottom duration={2000} distance="40px">
        <div
          className="repo-card-div"
          key={repo.id}
          // onClick={() => openRepoinNewTab(repo.url)}
          style={{ backgroundColor: theme.highlight }}
        >
          <div className="container repo-name-div">
            {/* <div className="card" style={{width: 200, height: 150}}>
              <img
                className="card-img-top"
                src={repo.image_path}
                alt={repo.alt}
                style={{width: 150, height: 120}}
              />
              <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <p className="card-text">{repo.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div> */}
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex justify-content-center">
              <img
                src={repo.image_path}
                alt={repo.alt}
                className="card-img-top"
                style={{ width: '330px', height: "180px", textAlign: 'center' }}
              />
              </div>
              <p className="repo-name" style={{ color: theme.text }}>
                {repo.name}
              </p>
              </div>
              
            
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <a href={repo.live_app} target="_blank">
            <button
              className="btn btn-primary"
              style={{
                width: 350,
                height: 40,
                backgroundColor: "black",
                color: "white",
                fontSize: 20,
                borderRadius: 5,
                border: "2px solid black",
              }}
            >
              Live APP
            </button>
          </a>
          <div
            className="d-flex justify-content-around align-items-center"
            style={{ marginTop: 10 }}
          >
            <a href={repo.frontend} target="_blank">
              <button
                style={{
                  width: 170,
                  height: 40,
                  backgroundColor: "black",
                  color: "white",
                  fontSize: 20,
                  borderRadius: 5,
                  border: "2px solid black",
                  marginRight: 3,
                }}
              >
                Frontend
              </button>
            </a>
            <a href={repo.backend} target="_blank">
              <button
                style={{
                  width: 170,
                  height: 40,
                  backgroundColor: "black",
                  color: "white",
                  fontSize: 20,
                  borderRadius: 5,
                  border: "2px solid black",
                  marginLeft: 3,
                }}
              >
                Backend
              </button>
            </a>
          </div>
          {/* <div className="repo-details"> */}
          {/* <p
              className="repo-creation-date subTitle"
              style={{ color: theme.secondaryText }}
            >
              Created on {repo.createdAt.split("T")[0]}
            </p> */}
          {/* <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
            /> */}
        </div>
        {/* <div className="repo-stats">
          <div className="repo-left-stat">
            <span>
              <div className="language-color" style={{ backgroundColor: repo.node.primaryLanguage.color }}></div>
              <p>{repo.node.primaryLanguage.name}</p>
            </span>
            <span>
              <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 10 16" width="10" fill="rgb(106, 115, 125)" className="repo-star-svg">
                <path
                  fill-rule="evenodd"
                  d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"
                ></path>
              </svg>
              <p>{repo.node.forkCount}</p>
            </span>
            <span>
              <svg aria-hidden="true" className="octicon" height="16" role="img" viewBox="0 0 14 16" width="14" fill="rgb(106, 115, 125)" className="repo-star-svg">
                <path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
              </svg>
              <p>{repo.node.stargazers.totalCount}</p>
            </span>
          </div>
          <div className="repo-right-stat">
            <p>{repo.node.diskUsage} KB</p>
          </div>
        </div> */}
        {/* </div> */}
      </Fade>
    </div>
  );
}

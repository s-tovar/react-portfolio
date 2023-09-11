import React from 'react';

function Project({ title, image, deployedLink, repoLink, description }) {
    return (
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100 border border-5">
          <img src={process.env.PUBLIC_URL + '/' + image} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={deployedLink} className="btn btn-success" target="_blank" rel="noopener noreferrer">View Project</a>
            {/* <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a> */}
          </div>
        </div>
      </div>
    );
  }
  
  export default Project;
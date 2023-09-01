import React from 'react';

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={deployedLink}>Deployed App</a>
      <a href={repoLink}>GitHub Repo</a>
    </div>
  );
}

export default Project;

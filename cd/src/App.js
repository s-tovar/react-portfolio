import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
// ... import other components

function App() {
  return (
    <div className="App">
      <Header />
      {/* Depending on your navigation state, render the appropriate component */}
      {/* For simplicity, showing Project as an example */}
      <Project 
         title="Sample Project"
         image="path_to_image"
         deployedLink="link_to_deployed_app"
         repoLink="link_to_github_repo"
      />
      <Footer />
    </div>
  );
}

export default App;

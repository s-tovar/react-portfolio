import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import './App.css';

//array of projects
const projects = [
  {
    title: "FitTrack",
    image: "./assets/Images/Screenshot1.png",
    deployedLink: "https://example.com/project1",
    repoLink: "https://github.com/user/project1",
    description: "Description for FitTrack"
  },
  {
    title: "Another Project",
    image: "./assets/Images/Screenshot2.png",
    deployedLink: "https://example.com/project2",
    repoLink: "https://github.com/user/project2",
    description: "Description for Another Project"
  },
  {
    title: "Another Project",
    image: "./assets/Images/Screenshot2.png",
    deployedLink: "https://example.com/project2",
    repoLink: "https://github.com/user/project2",
    description: "Description for Another Project"
  }
];

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<About />} index />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={
            <div className="row">
            {projects.map((project, index) => (
              <Project 
                key={index}
                title={project.title}
                image={project.image}
                deployedLink={project.deployedLink}
                repoLink={project.repoLink}
                description={project.description}
              />
            ))}
          </div>
        } />
      </Routes>
      <Footer />
    </Router>
  </div>
);
}

export default App;
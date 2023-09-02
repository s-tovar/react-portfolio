import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import './App.css';

//array of projects
const projects = [
  {
    title: "Waist Watcher",
    image: "cd/src/components/images/Screenshot 2023-05-04 at 10.32.12 AM.png",
    deployedLink: "https://mrbll48.github.io/waist-watchers/",
    // repoLink: "https://github.com/user/project1",
    description: "A web application designed to help users create a unique and personalized workoutroutine tailored to their individual needs and preferences."
  },
  {
    title: "DevShop",
    image: "cd/src/components/images/Project 3.png",
    deployedLink: "https://obscure-plains-49755-cc46b608f24f.herokuapp.com/",
    // repoLink: "https://github.com/user/project2",
    description: "A specialized e-commerce platform developed specifically for software developers."
  },
  {
    title: "FitTrack",
    image: "cd/src/components/images/Screenshot 2023-09-01 at 9.38.46 AM.png",
    deployedLink: "https://desolate-eyrie-82722-36505de48b12.herokuapp.com/",
    // repoLink: "https://github.com/user/project2",
    description: "a comprehensive fitness platform designed to help users manage and optimize their exercise routines."
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
                // repoLink={project.repoLink}
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
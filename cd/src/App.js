import Navigation from './components/Navigation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Project from './components/Project';
import './App.css';

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
            <Project 
              title="Sample Project"
              image="path_to_image"
              deployedLink="link_to_deployed_app"
              repoLink="link_to_github_repo"
            />
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
import { Link, useLocation } from "react-router-dom";
import React from 'react';

function Navigation() {
    const location = useLocation();
    const currentPath = location.pathname;
  
    return (
      <nav>
        {['/', '/about', '/contact', '/project'].map((path, index) => {
          const titles = ['Home', 'About Me', 'Contact', 'Project'];
          return (
            <Link key={path} to={path} className={currentPath === path ? 'active' : ''}>
              {titles[index]}
            </Link>
          );
        })}
      </nav>
    );
  }
  
  export default Navigation;

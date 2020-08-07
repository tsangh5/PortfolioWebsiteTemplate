import React from 'react';
import { Link } from 'react-router-dom'
import './layout.css'
const CustomLayout = (props) =>{
    return(
  <div>
    <nav>
      <a Link="" class='nav-item'><h2>HOME</h2></a>
      <a Link="" class='nav-item'><h2>PROJECTS</h2></a>
      <a Link="" class='nav-item'><h2>RESUME/CV</h2></a>  
      <a Link="" class='nav-item'><h2>ABOUT ME</h2></a>  
    </nav>
    <body className="site-layout-content">
              {props.children}
    </body>
  </div>
    
        
    );
}

export default CustomLayout;
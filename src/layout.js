import React from 'react';
import { Link } from 'react-router-dom'
import './layout.css'
const CustomLayout = (props) =>{
    return(
  <div>
    <nav>
      <a class='nav-item'><Link to='/'><h2>HOME</h2></Link></a>
      <a class='nav-item'><Link to='/Projects'><h2>PROJECTS</h2></Link></a>
      <a class='nav-item'><Link><h2>RESUME/CV</h2></Link></a>  
    </nav>
    <body className="site-layout-content">
              {props.children}
    </body>
  </div>
    
        
    );
}

export default CustomLayout;
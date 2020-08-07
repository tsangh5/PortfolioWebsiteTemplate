import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';
import './App.css';
import CustomLayout from './layout'
function App() {
  return (
    <div className="App">
      <Router>
      <CustomLayout> 
        <BaseRouter />
      </CustomLayout>
      </Router>
      
    </div>
  );
}

export default App;

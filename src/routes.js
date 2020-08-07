import React from 'react';
import { Route } from 'react-router-dom';
import Projects from './containers/Projects';


const BaseRouter = () => (
    <div>
        <Route exact path='/Projects' component={Projects} /> 
    </div>
);

export default BaseRouter;
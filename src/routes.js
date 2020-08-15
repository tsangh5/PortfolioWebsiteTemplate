import React from 'react';
import { Route } from 'react-router-dom';
import Projects from './containers/Projects';
import Home from './containers/Home'


const BaseRouter = () => (
    <div>
        <Route exact path='/Projects/' component={Projects} /> 
        <Route exact path='/' component={Home} />
    </div>
);

export default BaseRouter;
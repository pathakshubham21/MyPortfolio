import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Resume from './Resume';
import Projects from './Projects';


const Main = () => (
    <Switch>

        <Route exact path="/" component={LandingPage} />
        <Route path="/Contact" component={Contact} />
        <Route path="/AboutMe" component={AboutMe} />
        <Route path="/Resume" component={Resume} />
        <Route path="/Projects" component={Projects} />     
        
    </Switch>
)

export default Main;
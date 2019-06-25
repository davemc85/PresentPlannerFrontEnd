import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ItemController from './items/ItemController';
import PersonController from './persons/PersonController';
import EventController from './events/EventController';
import NavBar from '../NavBar.js';

const MainContainer = () => {
  return (
    <Router>
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route path="/items" component={ItemController}/>
          <Route path="/persons" component={PersonController}/>
          <Route path="/events" component={EventController}/>
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default MainContainer;

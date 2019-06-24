import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ItemController from './items/ItemController';
import PersonController from './persons/PersonController';
import NavBar from '../components/NavBar.js';

const MainContainer = () => {
  return (
    <Router>
      <React.Fragment>
        <NavBar/>
        <Switch>
          <Route path="/items" component={ItemController}/>
          <Route path="/persons" component={PersonController}/>
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default MainContainer;

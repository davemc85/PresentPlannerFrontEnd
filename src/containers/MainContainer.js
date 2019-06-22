import React from 'react';
import {BrowserRouter as Roter, Route, Switch} from 'react-router-dom';
import ItemController from './items/ItemController';
import PersonController from './persons/PersonController';

const MainContainer = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/items" component={ItemController}/>
          <Route path="/persons" component={PersonController}/>
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default MainContainer;

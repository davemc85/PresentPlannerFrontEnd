import React from 'react';
import {BrowserRouter as Roter, Route, Switch} from 'react-router-dom';
import ItemController from './items/ItemController';

const MainContainer = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/items" component={ItemController}/>
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default MainContainer;

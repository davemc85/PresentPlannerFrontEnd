import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PersonList from '../../components/persons/PersonList';
import PersonDetail from '../../components/persons/PersonDetail';
import Person from '../../components/persons/Person';


class PersonController extends Components {
  constructor (props) {
    super(props);
    this.state = {
      persons: []
    }
    this.findPersonById = this.findPersonById.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/persons')
    .then((data) => {
      this.setState({persons:persons})
      })
    }
    findPersonById(id){
      return this.state.persons.find((person) => {
        return person.id === parseInt(id);
      })
    }

    render(){
      return(
      <Router>
        <React.Fragment>
         <Switch>
          <Route exact path="/persons" render={() =>
            <PersonList persons={this.state.persons}/> }/>
          <Route exact path="/persons/:id" render={(props) => {
              const id = props.match.params.id;
              const person = this.findPersonById(id);
              return <PersonDetail person={person} />
            }} />
           </Switch>
          <React.Fragment>
        </Router>
      )
    }
  }
  export default PersonController;

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PersonList from '../../components/person/PersonList';
import PersonDetail from '../../components/person/PersonDetail';
import Request from '../../helpers/Request';
import PersonFormContainer from './PersonFormContainer';
import PersonEditFormContainer from './PersonEditFormContainer';



class PersonController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [],
      events: []
    }

    this.findPersonById = this.findPersonById.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }


  componentDidMount(){
    const request = new Request();
    const personPromise = request.get('/api/persons/persons-order');
    const eventPromise = request.get('/api/events/ordered-events');
    Promise.all([personPromise, eventPromise])
    .then((data) => {
      this.setState({persons: data[0], events: data[1]});
      })
    }
    findPersonById(id){
      return this.state.persons.find((person) => {
        return person.id === parseInt(id);
      })
    }
    handleDelete(id){
      const request = new Request();
      const url = "/api/persons/" + id;
      request.delete(url)
      .then(()=> {
        window.location = "/persons";
      });
    }

     handlePost(person){
    const request = new Request();
    request.post("/api/persons/", person)
    .then(() => {
      window.location = "/persons";
    })
  }
  handlePersonUpdate(person, id){
    const request = new Request();
    request.patch('/api/persons/' + id, person).then(()=> {
      window.location = '/persons/' + id;
    })
  }




  render(){
    return(
      <Router>
        <React.Fragment>
        <Switch>

          <Route exact path="/persons" render={() =>
            <PersonList persons ={this.state.persons} events={this.state.events}/> }/>

            <Route exact path= "/persons/new" render={() =>{
              return <PersonFormContainer handlePersonPost = {this.handlePost}/>
                }}/>

            <Route exact path="/persons/edit/:id"
              render={(props) => {
              const id = props.match.params.id
              const person = this.findPersonById(id);
              return <PersonEditFormContainer person={person}
              handlePersonUpdate={this.handlePersonUpdate}/>
            }} />

            <Route exact path="/persons/:id" render={(props)=>{
              const id = props.match.params.id;
              const person = this.findPersonById(id);

              return <PersonDetail person={person} onDelete={this.handleDelete} />

              return <PersonDetail person={person}
              onDelete={this.handleDelete}/>


            }}/>

           </Switch>
          </React.Fragment>
          </Router>
        )
      }

    }
    export default PersonController;

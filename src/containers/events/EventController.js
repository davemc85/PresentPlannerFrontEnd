import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import EventList from '../../components/event/EventList.js';
import EventDetail from '../../components/event/EventDetail.js';
import EventFormContainer from './EventFormContainer.js';
import Request from '../../helpers/Request.js';
import ItemSideNav from '../../components/item/ItemSideNav'

class EventController extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: []
    }
    this.findEventById = this.findEventById.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/events')
    .then((data) => {
      this.setState({events: data._embedded.events})
    })
  }

  findEventById(id){
    return this.state.events.find((event) => {
      return event.id === parseInt(id);
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = "/api/events/" + id;
    request.delete(url)
    .then(()=> {
      window.location = "/persons";
    });
  }

  handlePost(event){
    const request = new Request();
    request.post("/api/events", event)
    .then(()=> {
      window.location = "/persons";
    })
  }

  render(){
    return(
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/events" render={()=> <EventList events={this.state.events}/>}/>

            <Route exact path='/events/new' render={()=> {
              return <EventFormContainer handleEventPost = {this.handlePost}/>
            }}/>


            <Route exact path="/events/:id"
            render={(props) => {
              const id = props.match.params.id;
              const event = this.findEventById(id);
              return <EventDetail event={event} onDelete={this.handleDelete}/>
            }}/>
          </Switch>
          <ItemSideNav/>
        </React.Fragment>
      </Router>
    )
  }
}
export default EventController;

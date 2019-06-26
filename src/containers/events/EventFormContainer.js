import React, {Component} from 'react';
import Request from '../../helpers/Request';

class EventFormContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      eventName: "",
      eventDate:"",
      persons: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEventName = this.handleEventName.bind(this);
    this.handleEventDate = this.handleEventDate.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/persons').then((data)=> {
      this.setState({persons: data._embedded.persons})
    })
  }

  handleEventName(event){
    this.setState({eventName: event.target.value})
  }

  handleEventDate(event){
    this.setState({eventDate: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newEvent = {
      eventName: this.state.eventName,
      eventDate: this.state.eventDate,
      person: event.target.person.value
    }
    this.props.handleEventPost(newEvent);
  }

  render(){
    if(this.props === 0){
      return <p>Loading...</p>
    }

    const personOptions = this.state.persons.map((person, index) => {
      return <option key={index} value={person._links.self.href}>{person.name}</option>
    })

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Event Type: </label>
            <input type="text" placeholder="Event Type" onChange={this.handleEventName} value={this.state.eventName}/>
          <label>Event Date: </label>
            <input type="text" placeholder="eg. 25-12-2019"onChange={this.handleEventDate} value={this.state.eventDate}/>
          <label>Who is the event for? </label>
            <select name="person">
              {personOptions}
            </select>
            <button type="submit">Add Event</button>
        </form>
      </div>
    )
  }
}
export default EventFormContainer;

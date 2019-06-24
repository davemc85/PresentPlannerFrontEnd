import React from 'react';
import Request from '../../helpers/Request';


class CalendarBanner extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      events: []
    }
    
    this.getFirstEventsTimeFrame = this.getFirstEventsTimeFrame.bind(this);
  }
  
  componentDidMount(){
    const request = new Request();

    request.get('/api/events/ordered-events')
    .then((data) => {
      console.log(data);
      this.setState({events: data})
    })
  }
  
  getFirstEventsTimeFrame(){
    const eventDate = this.state.events[0].eventDate;
    const date = new Date();
    
    const days = Math.floor((Date.UTC(date.getMonth(), date.getDate()) - Date.UTC(eventDate.getMonth(), eventDate.getDate())) /(1000 * 60 * 60 * 24))
    return days;
  }
  
  render(){
    
    if (this.state.events.length === 0){
      return(
        <p>Loading...</p>
      )
    }
    return(
      <div>
        <p>It is {this.state.events[0].person.name}'s {this.state.events[0].eventName} in {this.getFirstEventsTimeFrame} days</p>
      </div>
    )
  }
  
}

export default CalendarBanner;

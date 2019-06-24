import React from 'react';
import Request from '../../helpers/Request';

class PersonFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dates:[],
      items:[],
      name: ""

     }
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleName = this.handleName.bind(this);

  }
  // making a request to get the dates from api
  componentDidMount(){
    const request = new Request()
      request.get('/api/dates').then((data)=>{
        this.setState({dates: data._embedded.dates})
      })
  }
  handleName(event){
    this.setState({name: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newPerson = {
      name: this.state.name,
      date: event.target.date.value
    }
    this.props.handlePersonPost(newPerson);
  }

  render(){

    if(!this.state.dates.length === 0){
      return <p> Loding...</p>
    }
    const eventDateOptions = this.state.dates.map((date, index)=>{
      return <option key={index} value={date.eventdate}>{date.name}</option>
    })
    const giftItemOptions = this.state.items.map((item, index)=>{
      return <option key={index} value={item.name}>{item.description}</option>
    })
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <input="text" placeholder="Name" name="name" onChange={this.handleName} value={this.state.name} />
      <select name="dates">
      {eventDateOptions}
      </select>
      <button type="submit">Save</button>
      <select name="items">
      {gitItemOptions}
      </select>
      <button type="submit">Save</button>
      </form>
      </div>
    )
  }
}
export default PersonFormContainer;

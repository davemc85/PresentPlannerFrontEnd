import React, {Component} from 'react';
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

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const newPerson = {
      name: this.state.name,

    }
    this.props.handlePersonPost(newPerson);
  }

  render(){


    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type="text" placeholder="Name" name="name" onChange={this.handleName} value={this.state.name} />
      <button type="submit">Save</button>
      </form>
      </div>
    )
  }
}
export default PersonFormContainer;

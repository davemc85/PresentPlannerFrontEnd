import React, {Component} from 'react';

class PersonEditFormContainer extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    const person = {
      "name": event.target.name.value

    }
    this.props.handlePersonUpdate(person, this.props.person.id)
  }
  render(){




    return (
      <div>
      <form onSubmit={this.hanldeSubmit}>Name:
      <input type="text" name="name" defaultValue={this.props.person.name}/>

      <select  multiple={true} name="items">
      {itemOptions}
      </select>
      <button type="submit">Save</button>
      </form>
      </div>

  return (
    <div>
    <form onSubmit={this.handleSubmit}>
      <input type="text" name="name" defaultValue={this.props.person.name}/>
     <button type="submit">Save changes</button>
     </form>
    </div>

    )
  }
}


export default PersonEditFormContainer;

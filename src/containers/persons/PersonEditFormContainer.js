import React, {Component} from 'react';
import Request from '../../helpers/Request';

class PersonEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    const itemPromise = request.get('/api/items');
    Promise.all([itemPromise])
    .then((data)=> {
      this.setState({items: data[0]._embedded.items})
    })
  }
  handleSubmit(event){
    event.preventDefault();
    const items = [...event.target.items.options].filter((option) => {
      return option.selected
    }).map((option) => {
      return option.value
    });
    const person = {
      "name": event.target.name.value,
      "items": items
    }
    this.props.handlePersonUpdate(person, this.props.person.id)
  }
  render(){
    if(this.state.items.length === 0 || !this.props.person){
      return null
    }
    const itemOptions = this. state.items.map((item, index)=> {
      return <option key={index} value={item._links.self.href}>{item.name}</option>
    })

  return (
    <div>
    <form onSubmit={this.hanldeSubmit}>Name:
      <input type="text" name="name" defaultValue={this.props.person.name}/>
      <label>Gift Item Ideas:</label>
      <select  multiple={true} name="items">
      {itemOptions}
     </select>
     <button type="submit">Save</button>
     </form>
    </div>
    )
  }
}
export default PersonEditFormContainer;

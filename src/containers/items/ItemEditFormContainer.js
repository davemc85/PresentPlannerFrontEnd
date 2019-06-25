import React, {Component} from 'react';
import Request from '../../helpers/Request';

class ItemEditFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons: [],
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    const request = new Request();
      const personPromise = request.get('/api/persons');
      Promise.all([personPromise])
      .then((data) => {
      this.setState({persons: data[0]._embedded.persons})
    })
  }

  handleSubmit(event){
    event.preventDefault();
    const persons = [...event.target.persons.options].filter((option) => {
      return option.selected
    }).map((option) => {
      return option.value
    });

    const item = {
      "name": event.target.name.value,
      "description": event.target.description.value,
      "location": event.target.location.value,
      "price": event.target.price.value,
      "link": event.target.link.value,
      "additionalDetail": event.target.additionalDetail.value,
      "starItem": event.target.starItem.value,
      "persons": persons
    }
    this.props.handleItemUpdate(item, this.props.item.id)
    }

    render(){
      if(this.state.persons.length === 0 || !this.props.item){
        return null
      }

      const personOptions = this.state.persons.map((person, index) => {
        return <option key={index} value={person._links.self.href}>{person.name}</option>
      })

      return(
        <div>
          <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
            <input type="text" name="name" defaultValue={this.props.item.name}/>
          <label>Description: </label>
            <input type="text" name="description" defaultValue={this.props.item.description}/>
          <label>Location: </label>
            <input type="text" name="location" defaultValue={this.props.item.location}/>
          <label>Price: £ </label>
            <input type="number" name="number" defaultValue={this.props.item.number}/>
          <label>Website Link: </label>
            <input type="text" name="link" defaultValue={this.props.item.link}/>
          <label>Additional Details: </label>
            <input type="textarea" rows="10" cols="40" name="additionalDetail" defaultValue={this.props.item.additionalDetail}/>
          <label>Star Item </label>
            <input type="checkbox" name="starItem" value="true" checked={this.props.item.starItem === true}/>
          <label>Who is it for? </label>
            <select name="person">
              {personOptions}
            </select>
          </form>
        </div>
      )
    }
}
export default ItemEditFormContainer;

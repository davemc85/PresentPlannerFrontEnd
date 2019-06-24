import React, {Component} from 'react';
import Request from '../../helpers/request';

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
      .then.setState({persons: data[0]._embedded.persons})
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
            <input type="text" name="name" defaultValue={this.props.item.name}/>
            <input type="text" name="description" defaultValue={this.props.item.description}/>
            <input type="text" name="location" defaultValue={this.props.item.location}/>
            <input type="number" name="number" defaultValue={this.props.item.number}/>
            <input type="text" name="link" defaultValue={this.props.item.link}/>
            <input type="text" name="additionalDetail" defaultValue={this.props.item.additionalDetail}/>
            <input type="checkbox" name="starItem" value="true" checked={this.props.item.starItem === true}/>
// need to look at checkbox/radio button selection for star item
            <select name="person">
              {personOptions}
            </select>
        </div>
      )
    }
}
export default ItemEditFormContainer;

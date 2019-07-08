import React, {Component} from 'react';
import Request from '../../helpers/Request';
import Select from 'react-select'
class ItemFormContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      name: "",
      description: "",
      location: "",
      price: 0,
      link: "",
      additionalDetail: "",
      starItem: false,
      persons: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.handleLink = this.handleLink.bind(this);
    this.handleAdditionalDetail = this.handleAdditionalDetail.bind(this);
    this.handleStarItem = this.handleStarItem.bind(this);
  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/persons').then((data) => {
      this.setState({persons: data._embedded.persons})
    })
  }

  handleName(event){
    this.setState({name: event.target.value})
  }

  handleDescription(event){
    this.setState({description: event.target.value})
  }

  handleLocation(event){
    this.setState({location: event.target.value})
  }

  handlePrice(event){
    this.setState({price: event.target.value})
  }

  handleLink(event){
    this.setState({link: event.target.value})
  }

  handleAdditionalDetail(event){
    this.setState({additionalDetail: event.target.value})
  }

  handleStarItem(event){
    this.setState({starItem: event.target.checked})
  }

  handleSubmit(event){
    event.preventDefault();
    const newItem = {
      name: this.state.name,
      description: this.state.description,
      location: this.state.location,
      price: this.state.price,
      link: this.state.link,
      additionalDetail: this.state.additionalDetail,
      starItem: this.state.starItem,
      person: event.target.person.value
    }
    this.props.handleItemPost(newItem);
  }

  render(){
    if(this.props === 0){
      return <p>Loading...</p>
    }

    const personOptions = this.state.persons.map((person, index) => {
      return <option key={index} value={person._links.self.href}>{person.name}</option>
    })

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <label>Item </label>
          <input type="text" placeholder="name" name="name" onChange={this.handleName} value={this.state.name}/>
          <label>Description </label>
          <input type="text" placeholder="description" name="description" onChange={this.handleDescription} value={this.state.description}/>
          <label>Location </label>
          <input type="text" placeholder="location" name="location" onChange={this.handleLocation} value={this.state.location}/>
          <label>Price £</label>
          <input type="number" placeholder="price" name="price" onChange={this.handlePrice} value={this.state.price}/>
          <label>Website Link </label>
          <input type="text" placeholder="link" name="link" onChange={this.handleLink} value={this.state.link}/>
          <label>Additional Details </label>
          <textarea value={this.state.additionalDetail} name="additionalDetail" onChange={this.handleAdditionalDetail} />
          <label>Star Item </label>
          <input type="checkbox" name="starItem" onChange={this.handleStarItem} checked={this.state.starItem}/>
          <label>Who is it for? </label>
          <select name="person">
            {personOptions}
          </select>
          <button type="submit">Add item</button>
        </form>
      </div>
    )
  }
}
export default ItemFormContainer;

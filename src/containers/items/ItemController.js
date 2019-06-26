import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ItemList from '../../components/item/ItemList.js';
import ItemDetail from '../../components/item/ItemDetail.js';
// import Item from '../../components/item/Item.js';
import Request from '../../helpers/Request';
import ItemFormContainer from './ItemFormContainer';
import ItemEditFormContainer from './ItemEditFormContainer';
import ItemSideNav from '../../components/item/ItemSideNav.js';


class ItemController extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
    this.findItemById = this.findItemById.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  componentDidMount(){
    const request = new Request();

    request.get('/api/items')
    .then((data) => {

      this.setState({items: data._embedded.items})
    })
  }

  findItemById(id){
    return this.state.items.find((item) => {
      return item.id === parseInt(id);
    })
  }

  handleDelete(id){
    const request = new Request();
    const url = "/api/items/" + id;
    request.delete(url)
    .then(()=> {
      window.location = "/items";
    });
  }

  handlePost(item){
    const request = new Request();
    request.post("/api/items/", item)
    .then(()=> {
      window.location = "/items";
    })
  }

  handleItemUpdate(item, id){
    console.log(item);
    const request = new Request();
    request.patch("/api/items/" + id, item).then(()=> {
      window.location = "/items/" + id;
    })
  }

  render(){
    return(
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/items" render={() => <ItemList items={this.state.items}/> }/>

            <Route exact path='/items/new' render={()=> {
              return <ItemFormContainer handleItemPost = {this.handlePost}/>
            }}/>

            <Route exact path="/items/edit/:id" render={(props)=> {
              const id = props.match.params.id
              const item = this.findItemById(id);
              return <ItemEditFormContainer item={item} handleItemUpdate={this.handleItemUpdate}/>
            }}/>

            <Route exact path="/items/:id" render={(props) => {
              const id = props.match.params.id;
              const item = this.findItemById(id);
              return <ItemDetail item={item} onDelete={this.handleDelete}/>
            }} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }

}
export default ItemController;

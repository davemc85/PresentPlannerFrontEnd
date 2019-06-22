import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ItemList from '../../components/item/ItemList.js';
import ItemDetail from '../../components/item/ItemDetail.js';
import Item from '../../components/item/Item.js';

class ItemController extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: []
    }
    this.findItemById = this.findItemById.bind(this);
  }

  // componentDidMount(){
  //   const request = new Request();
  //
  //   request.get('/api/items')
  //   .then((data) => {
  //     this.setState({items: data:_embedded.items})
  //   })
  // }

  findItemById(id){
    return this.state.items.find((item) => {
      return item.id === parseInt(id);
    })
  }

  render(){
    return(
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/items" render={() => <ItemList items={this.state.items}/> }/>

            <Route exact path="/items/:id" render={(props) => {
              const id = props.match.params.id;
              const item = this.findItemById(id);
              return <ItemDetail item={item} />
            }} />
          </Switch>
        </React.Fragment>
      </Router>
    )
  }

}
export default ItemController;

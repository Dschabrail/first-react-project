import React, { Component } from "react";
import Navbar from "./components/navbar";
import Product from "./components/product";
import ShoppingCart from "./components/shopping-cart";

class App extends Component {
  state = {
    items: []
  };

  addItem = (amount, name, price) => {
    let currentItems = this.state.items;
    let existingItem = this.state.items.find(item => item.name == name);
    if(existingItem) {
        existingItem.amount++;
        existingItem.price += currentItems[0].price;
    } else {
        currentItems.push({
            amount,
            name,
            price,
        });
    }
    this.setState({ items: currentItems });
    console.log(this.state)
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="main-cont">
          <div className="product-cont">
            <Product onAdd={() => this.addItem(1, 'Mango', 4.99)}
              img="./assets/img/mango.jpg"
              title="Mango"
              description=""
            />
            <Product onAdd={() => this.addItem(1, 'Tomato', 1.99)}
              img="./assets/img/tomatos.jpg"
              title="Tomato"
              description=""
            />
            <Product onAdd={() => this.addItem(1, 'Date', 3.99)}
            img="./assets/img/dates.jpg"
            title="Date"
            description=""
            />
            <Product onAdd={() => this.addItem(1, 'Mandarin', 4.99)}
              img="./assets/img/mandarins.jpg"
              title="Mandarin"
              description=""
            />
          </div>
          <ShoppingCart items={this.state.items} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;

import React, { Component } from 'react';

class Product extends Component {
    state = {  } 
    render() { 
        return <div className="card" style={{width: 18 + "rem"}}>
        <img src={this.props.img} className="card-img-top" alt=""/>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button onClick={this.props.onAdd} href="/" className="btn btn-primary">Add</button>
        </div>
      </div>;
    }
}
 
export default Product;
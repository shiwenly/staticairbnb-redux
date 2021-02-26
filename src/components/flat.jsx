import React, { Component } from 'react';

class Flat extends Component {


  render() {
    return (
      <div className="flat card-trip">
        <img src={this.props.flat.imageUrl} />
        <div className="card-trip-infos">
          <div>
            <h2>{this.props.flat.name}</h2>
            <p>{this.props.flat.price} {this.props.flat.priceCurrency}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Flat;

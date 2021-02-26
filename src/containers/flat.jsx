import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

class Flat extends Component {

  handleClick = () => {
    this.props.selectFlat(this.props.flat)
  }


  render() {
    let classes = "flat card-trip";
      if (this.props.flat === this.props.selectedFlat) {
        classes += " selected";
    }

    return (
      <div className={classes} onClick={this.handleClick}>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
}

function mapReduxStateToProp(reduxState) {
  return {
    selectedFlat: reduxState.selectedFlat
  };
}

export default connect(mapReduxStateToProp, mapDispatchToProps) (Flat);

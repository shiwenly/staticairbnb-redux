import React, { Component } from 'react';
import Flat from '../components/flat';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions';

class FlatList extends Component {

  static defaultProps = {
      flats: [{
      "name": "Charm at the Steps of Montmartre",
      "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
      "price": 164,
      "priceCurrency": "EUR"
    }]
  }

  componentWillMount() {
    this.props.setFlats();
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => <Flat flat={flat} key={flat.name}/>)}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats },
    dispatch
  );
}

function mapreduxStateToProp(reduxState) {
  return {
    flats: reduxState.flats
  };
}

export default connect(mapreduxStateToProp, mapDispatchToProps) (FlatList);

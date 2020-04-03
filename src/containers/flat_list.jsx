import React, { Component } from 'react';
import Flat from '../components/flat';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions'


class FlatList extends Component {
  static defaultProps = {
    flats: [{
      'name': 'Charm at the Steps of Montmartre',
      'imageUrl': 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg',
      'price': 164,
      'priceCurrency': 'EUR'
    }]
  }

  componentWillMount() {
   // TODO: dispatch an action to load flats!
  }

  render() {
    return (
      <div className="flat-list col-sm-7">
        {this.props.flats.map((flat) => {
          return <Flat key={flat.name} flat={flat} />;
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setFlats: setFlats},
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(FlatList);


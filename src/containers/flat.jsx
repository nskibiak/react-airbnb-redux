import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions'

class Flat extends Component {

  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }

  render() {

    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url(${this.props.flat.imageUrl})`
    };

    let classes = 'card'
    if (this.props.flat === this.props.selectedFlat) {
      classes += ' selected';
    }

    return (
      <div className={classes} style={style} onClick={this.handleClick}>
        <div className="card-description"><h2>{this.props.flat.name}</h2></div>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
      </div>
    );

  }

}


function mapReduxStateToProps(state) {
  return {
    selectedFlat: state.selectedFlat
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectFlat: selectFlat},
    dispatch
  );
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';

require('dotenv').config({ path: '../..' })

class Map extends Component {
  render() {
    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };

    if (this.props.selectedFlat) {
      marker = <div
        style={{  width: '20px', height: '20px',
                  backgroundColor: 'red',
                  borderRadius: '50%' }}
        lat={this.props.selectedFlat.lat}
        lng={this.props.selectedFlat.lng} />;

      center = {  lat: this.props.selectedFlat.lat,
                  lng: this.props.selectedFlat.lng };
    }

    return (
      <div style={{ height: '100vh', width: '40vw' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API }}
          defaultCenter={center}
          defaultZoom={12}
        >
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { selectedFlat: state.selectedFlat };
}

export default connect(mapStateToProps)(Map);;


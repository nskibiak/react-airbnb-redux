import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  render() {
    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };

    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API }}
          defaultCenter={center}
          defaultZoom={15}
        >
          {marker}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;

// require('dotenv').config({ path: '../..' })

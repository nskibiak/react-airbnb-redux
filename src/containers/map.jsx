import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

require('dotenv').config({ path: '../..' })

class Map extends Component {
  render() {
    let marker = null;
    let center = { lat: 48.856614, lng: 2.352222 };
    let key = 'AIzaSyB3W_l9SMvHl6iBmpDiaOnWgXREzcMtJuI';

    return (
      <div style={{ height: '100vh', width: '40vw' }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: key }}
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API }}
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



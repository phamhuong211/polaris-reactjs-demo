import React from 'react'
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import PlacesAutocomplete from 'react-places-autocomplete';
import {
        geocodeByAddress,
        getLatLng,
} from 'react-places-autocomplete';

const containerStyle = {
    width: '900px',
    height: '500px'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function MyComponent(address) {
  console.log(address.address)
  /**
   * address được truyền vào gg khi click vào địa chỉ user
   */

  /** 
   * Get LatLng by Address and then update center
   * Error: Uncaught TypeError: Cannot read properties of undefined (reading 'maps') at geocodeByAddress (utils.js:7)
  */
  // geocodeByAddress(address.address)
  //   .then(results=>getLatLng(results[0]))
  //   .then(LatLng =>{
  //     console.log('success', LatLng);
  //     this.center= LatLng
  //   })
  //   .catch(error => console.error('Error', error));

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyABV6vYGySaQkZKL5jY7lifEuL7Y5cBIfs"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker 
            position={{
              lat: center.lat,
              lng: center.lng
            }} />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
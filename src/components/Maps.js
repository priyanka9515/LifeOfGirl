import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        {/* <GoogleMapReact */}
         {/* bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }} */}
        {/* //   defaultCenter={this.props.center}
        //   defaultZoom={this.props.zoom}
        // >
        //   <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        // </GoogleMapReact> */}
          <script src="http://www.google.com/jsapi"></script>
    
    initialize () {
      
        const loc = {};
        var geocoder = new google.maps.Geocoder();
        if(google.loader.ClientLocation) {
            loc.lat = google.loader.ClientLocation.latitude;
            loc.lng = google.loader.ClientLocation.longitude;

            var latlng = new google.maps.LatLng(loc.lat, loc.lng);
            geocoder.geocode({'latLng': latlng}, function(results, status) {
                if(status == google.maps.GeocoderStatus.OK) {
                    alert(results[0]['formatted_address']);
                };
            });
        }
    }

    google.load("maps", "3.x", {other_params: "sensor=false", callback:initialize});

    
      </div>
    );
  }
}

export default SimpleMap;

import React from 'react';
import LandingHeader from './LandingHeader'
import LandingContainer from './LandingContainer'
import LandingFooter from './LandingFooter'
import Geocode from "react-geocode";


class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.root, "Landing Page")
    this.root = props.root;
    this.state = {
      latitude: '',
      longitude: '',
      address: ''
    }

    this.getMyLocation = this.getMyLocation.bind(this);
    this.getAddressUser = this.getAddressUser.bind(this);
  }

  componentDidMount() {
    this.getMyLocation()

  }

  getAddressUser(lat, lng) {
    Geocode.setApiKey("AIzaSyAXz9PuBzPhMjAdUZmlyFdst6J8v6Vx1IU");
    let latitude = lat.toString();
    let longitude = lng.toString();
    // Geocode.setRegion("in");

    // console.log(latitude)
    // console.log(longitude)
    Geocode.fromLatLng(latitude, longitude).then(
      response => {
        // console.log(response, 'response');
        const addressUser = response.results[0].formatted_address;
        this.setState({ address: addressUser })
        this.root.address = this.state.address;
        //  console.log(addressUser, "AddressUser");
      },
      error => {
        // console.log(error)
        console.error(error);
      }
    );
  }

  getMyLocation() {
    const location = window.navigator && window.navigator.geolocation

    if (location) {
      location.getCurrentPosition((position) => {
        // console.log(position, "position")
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        this.root.latitude = this.state.latitude;
        this.root.longitude = this.state.longitude;
        this.getAddressUser(this.state.latitude, this.state.longitude);

      }, (error) => {
        this.setState({ latitude: 'err-latitude', longitude: 'err-longitude' })
      })
    }

  }

  render() {
    const { latitude, longitude, position } = this.state
    // console.log(position);
    // console.log(latitude, longitude)
    return <div className='container-fluid' >
      <LandingHeader root={this.root} />
      <LandingContainer root={this.root} />
     
      <LandingFooter root={this.root} />

    </div>
  }
}
export default LandingPage;
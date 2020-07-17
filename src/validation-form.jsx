import React, { Component } from "react";
import Geocode from "react-geocode";
import GoogleMaps from "./google-maps";

// set Google Maps Geocoding API for purposes of quota management. Optional, but recommended.
Geocode.setApiKey("AIzaSyCQldl1eVtGg5Y6OgjJ8_sZITLWmY7WEH0");

// set response Language. Defaults to English.
Geocode.setLanguage("en");

class ValidationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      foot: "",
      inch: "",
      education: "",
      street: "",
      street2: "",
      city: "",
      state: "",
      zip: "",
      fullAddress: "",
      email: "",
      lat: "",
      lng: "",
      mapHeight: "",
    };
  }

  componentDidMount() {
    this.loadFormData();
    this.setMapHeight();
  }

  async loadFormData() {
    await this.setState({
      firstName: this.props.form.firstName,
      lastName: this.props.form.lastName,
      dateOfBirth: this.props.form.dateOfBirth,
      foot: this.props.form.foot,
      inch: this.props.form.inch,
      education: this.props.form.education,
      street: this.props.form.street,
      street2: this.props.form.street2,
      city: this.props.form.city,
      state: this.props.form.state,
      zip: this.props.form.zip,
      fullAddress:
        this.props.form.street +
        " " +
        this.props.form.street2 +
        " " +
        this.props.form.city +
        " " +
        this.props.form.state +
        " " +
        this.props.form.zip,
      email: this.props.form.email,
      lat: "",
      lon: "",
    });
    this.retrieveLocationCoordinates();
  }

  retrieveLocationCoordinates() {
    Geocode.fromAddress(this.state.fullAddress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({
          lat,
          lng,
        });
        console.log(lat, lng);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  setMapHeight() {
    const titleHeight = document.getElementById("title-container").clientHeight;
    const contentHeight = document.getElementById("content-container")
      .clientHeight;
    const mapHeight = window.innerHeight - titleHeight;
    console.log("window height", window.innerHeight);
    console.log("title height", titleHeight);
    console.log("content height", contentHeight);
    console.log("map height", mapHeight);
    this.setState({
      mapHeight,
    });
  }

  dateToString(date) {
    var fullDate = new Date(date.replace("-", "/"));
    fullDate = fullDate.toDateString().slice(4, fullDate.toDateString().length);
    return fullDate;
  }

  render() {
    let {
      firstName,
      lastName,
      dateOfBirth,
      foot,
      inch,
      education,
      street,
      street2,
      city,
      state,
      zip,
      email,
      lat,
      lng,
      mapHeight,
    } = this.state;

    return (
      <div id="page-container" className="d-flex flex-column">
        <div id="title-container" className="text-center w-100 bg-info">
          <h2>Results Verification Page: John Le</h2>
        </div>
        <div className="d-flex w-100">
          <div id="content-container" className="text-center">
            <div>
              <span className="d-inline-block display-4 m-4">
                <u>
                  {firstName} {lastName}
                </u>
              </span>
              <b>Address:</b>
              <p>
                {street} {Number.isInteger(parseInt(street2)) ? "#" : ""}{" "}
                {street2}
                <br /> {city} {state} {zip}
              </p>
              <b>Email: </b>
              <p>{email}</p>
              <b>Date of Birth: </b>
              <p>{this.dateToString(dateOfBirth)}</p>
              <b>Height: </b>
              <p>
                {foot > 0 ? `${foot} ft.` : ""} {inch > 0 ? `${inch} in.` : ""}
              </p>
              <b>Education Level:</b>
              <p>{education}</p>
            </div>
          </div>
          <div
            id="map-container"
            className="d-flex flex-column text-center w-100"
          >
            <GoogleMaps
              lat={lat}
              lng={lng}
              mapHeight={mapHeight}
              className="border border-success"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ValidationForm;

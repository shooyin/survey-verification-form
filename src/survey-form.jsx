import React, { Component } from "react";
import Geocode from "react-geocode";
import ReCAPTCHA from "react-google-recaptcha";

// set Google Maps Geocoding API for purposes of quota management. Optional, but recommended.
Geocode.setApiKey("AIzaSyCQldl1eVtGg5Y6OgjJ8_sZITLWmY7WEH0");

// set response Language. Defaults to English.
Geocode.setLanguage("en");

class SurveyForm extends Component {
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
      email: "",
      emailConfirmation: "",
      captchaValue: "",
      captchaInvalidFlag: false,
      validDateOfBirth: true,
      validAddress: true,
      validEmailConfirmation: true,
    };
  }

  /*
    Retrieves the current date in YYYY-MM-DD format
  */
  todaysDate() {
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();

    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();

    var currentDay = year + "-" + month + "-" + day;
    return currentDay;
  }

  /* 
  Tests whether the requested address has
  a valid geocode from Google.
  */
  validateLocation() {
    var fullAddress =
      this.state.street +
      " " +
      this.state.street2 +
      " " +
      this.state.city +
      " " +
      this.state.state +
      " " +
      this.state.zip;

    Geocode.fromAddress(fullAddress).then(
      (response) => {
        this.setState({
          validAddress: true,
        });
      },
      (error) => {
        console.error(error);
        this.setState({
          validAddress: false,
        });
        return;
      }
    );
  }

  render() {
    const invalidField = "text-danger bold";

    return (
      <div className="d-flex flex-column w-100">
        <div className="text-center p-1 bg-info">
          <h4>CSC 642 Summer 2020 Individual Assignment: John Le</h4>
        </div>
        <form
          id="survey-form-container"
          onSubmit={this.handleSubmit}
          className="m-4"
        >
          {/* MARK: Name Input */}
          <p className="text-center display-4">Data Survey Form</p>
          <div className="form-group">
            <label>Name*</label>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First name"
                  value={this.state.firstName}
                  onChange={this.handleChangeFirstName}
                  maxLength="40"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last name"
                  value={this.state.lastName}
                  onChange={this.handleChangeLastName}
                  maxLength="40"
                  required
                />
              </div>
            </div>
          </div>

          {/* MARK: Date of Birth Input */}
          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="dateOfBirth">Date of Birth*</label>
              <input
                type="date"
                className="form-control"
                id="dateOfBirth"
                value={this.state.dateOfBirth}
                onChange={this.handleChangeDateOfBirth}
                max={this.todaysDate()}
                required
              />
            </div>

            {/* MARK: Height Input */}
            <div className="form-group col-md-3">
              <label>Height</label>
              <div className="row">
                <div className="col-md-5">
                  <input
                    type="number"
                    className="form-control"
                    id="foot"
                    placeholder="feet"
                    value={this.state.foot}
                    onChange={this.handleChangeFeet}
                    min="0"
                    max="9"
                    maxLength="2"
                  />
                </div>
                <div className="col-md-5">
                  <input
                    type="number"
                    className="form-control"
                    id="inch"
                    placeholder="inches"
                    value={this.state.inch}
                    onChange={this.handleChangeInches}
                    min="0"
                    max="11"
                    maxLength="2"
                  />
                </div>
              </div>
            </div>

            {/* MARK: Education Input */}
            <div className="form-group col-md-6">
              <label htmlFor="educationLevel">Education Level</label>
              <select
                id="educationLevel"
                className="form-control"
                defaultValue="n/a"
                onChange={this.handleChangeEducation}
              >
                <option value="n/a">Choose...</option>
                <option value="High School">High School</option>
                <option value="College">College</option>
                <option value="Graduate Studies">Graduate Studies</option>
                <option value="Ph.D">Ph.D</option>
              </select>
            </div>
          </div>

          <hr />

          {/* MARK: Address Section */}
          <div className="form-group">
            {this.state.validAddress ? (
              ""
            ) : (
              <div className="text-center">
                <small className={invalidField}>
                  <b>
                    Invalid Address: Please double-check the spelling and try
                    again.
                  </b>
                </small>
                <br />
              </div>
            )}
            {/* MARK: Street Input */}
            <label
              htmlFor="inputAddress"
              className={this.state.validAddress ? "" : invalidField}
            >
              Address*
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              value={this.state.address}
              onChange={this.handleChangeAddress1}
              maxLength="40"
              required
            />
          </div>

          <div className="form-row">
            {/* MARK: Street2 Input */}
            <div className="form-group col-md-2">
              <label
                htmlFor="inputAddress2"
                className={this.state.validAddress ? "" : invalidField}
              >
                Address 2
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
                value={this.state.address2}
                onChange={this.handleChangeAddress2}
                maxLength="15"
              />
            </div>

            {/* MARK: City Input */}
            <div className="form-group col-md-7">
              <label
                htmlFor="inputCity"
                className={this.state.validAddress ? "" : invalidField}
              >
                City*
              </label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                value={this.state.city}
                onChange={this.handleChangeCity}
                maxLength="40"
                required
              />
            </div>

            {/* MARK: State Input */}
            <div className="form-group col-md-1">
              <label
                htmlFor="inputState"
                className={this.state.validAddress ? "" : invalidField}
              >
                State*
              </label>
              <select
                id="inputState"
                className="form-control"
                value={this.state.state}
                onChange={this.handleChangeState}
                required
              >
                <option defaultValue="n/a">Choose...</option>
                <option value="AL">AL</option>
                <option value="AK">AK</option>
                <option value="AR">AR</option>
                <option value="AZ">AZ</option>
                <option value="CA">CA</option>
                <option value="CO">CO</option>
                <option value="CT">CT</option>
                <option value="DC">DC</option>
                <option value="DE">DE</option>
                <option value="FL">FL</option>
                <option value="GA">GA</option>
                <option value="HI">HI</option>
                <option value="IA">IA</option>
                <option value="ID">ID</option>
                <option value="IL">IL</option>
                <option value="IN">IN</option>
                <option value="KS">KS</option>
                <option value="KY">KY</option>
                <option value="LA">LA</option>
                <option value="MA">MA</option>
                <option value="MD">MD</option>
                <option value="ME">ME</option>
                <option value="MI">MI</option>
                <option value="MN">MN</option>
                <option value="MO">MO</option>
                <option value="MS">MS</option>
                <option value="MT">MT</option>
                <option value="NC">NC</option>
                <option value="NE">NE</option>
                <option value="NH">NH</option>
                <option value="NJ">NJ</option>
                <option value="NM">NM</option>
                <option value="NV">NV</option>
                <option value="NY">NY</option>
                <option value="ND">ND</option>
                <option value="OH">OH</option>
                <option value="OK">OK</option>
                <option value="OR">OR</option>
                <option value="PA">PA</option>
                <option value="RI">RI</option>
                <option value="SC">SC</option>
                <option value="SD">SD</option>
                <option value="TN">TN</option>
                <option value="TX">TX</option>
                <option value="UT">UT</option>
                <option value="VT">VT</option>
                <option value="VA">VA</option>
                <option value="WA">WA</option>
                <option value="WI">WI</option>
                <option value="WV">WV</option>
                <option value="WY">WY</option>
              </select>
            </div>

            {/* MARK: Zip Code Input */}
            <div className="form-group col-md-2">
              <label
                htmlFor="inputZip"
                className={this.state.validAddress ? "" : invalidField}
              >
                Zip*
              </label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                value={this.state.zip}
                onChange={this.handleChangeZipCode}
                minLength="5"
                maxLength="5"
                required
              />
            </div>
          </div>

          <hr />

          {/* MARK: Email Input */}
          <div className="form-group">
            {this.state.validEmailConfirmation ? (
              ""
            ) : (
              <div className="text-center">
                <small className={invalidField}>
                  <b>
                    Invalid Email Confirmation: Please double-check the spelling
                    and try again.
                  </b>
                </small>
                <br />
              </div>
            )}
            <label
              htmlFor="email"
              className={this.state.validEmailConfirmation ? "" : invalidField}
            >
              Email*
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handleChangeEmail}
              maxLength="40"
              required
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>

          {/* MARK: Confirm Email */}
          <div className="form-group pb-4">
            <label
              htmlFor="emailConfirmation"
              className={this.state.validEmailConfirmation ? "" : invalidField}
            >
              Confirm Email*
            </label>
            <input
              type="email"
              className="form-control"
              id="emailConfirmation"
              placeholder="Re-enter Email"
              aria-describedby="errorConfirmingEmail"
              value={this.state.emailConfirmation}
              onChange={this.handleChangeEmailConfirmation}
              maxLength="40"
              required
            />
            {this.state.validEmailConfirmation ? (
              ""
            ) : (
              <small
                id="errorConfirmingEmail"
                className="form-text text-danger"
              >
                Your email and confirmed email does not match.
              </small>
            )}
          </div>
          <div className="mt-4">
            {/* MARK: "Terms and Agreements" Checkbox */}
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="agreeCheck"
                  required
                />
                <label className="form-check-label" htmlFor="agreeCheck">
                  I agree with the{" "}
                  <a href="javascript:void(0)">Terms and Conditions</a>
                </label>
              </div>
            </div>

            {/* MARK: ReCaptcha */}
            {!this.state.captchaInvalidFlag ? (
              ""
            ) : (
              <div>
                <small className={invalidField}>
                  <b>Captcha Error: Try Again</b>
                </small>
                <br />
              </div>
            )}
            <ReCAPTCHA
              sitekey="6Ld0ZrIZAAAAAEbcZZPxtxtYXZoOxbsOpnKfbd1C"
              onChange={this.handleChangeCaptcha}
            />

            {/* MARK: Submit Button */}
            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }

  /* MARK: Input Change Handlers */
  handleChangeFirstName = (e) => {
    const { value, maxLength } = e.target;
    const message = value.slice(0, maxLength);

    this.setState({
      firstName: message,
    });
  };

  handleChangeLastName = (e) => {
    const { value, maxLength } = e.target;
    const message = value.slice(0, maxLength);

    this.setState({
      lastName: message,
    });
  };

  handleChangeDateOfBirth = (e) => {
    const { value } = e.target;

    this.setState({
      dateOfBirth: value,
    });
  };

  handleChangeFeet = (e) => {
    const { value, maxLength } = e.target;
    const message = value.slice(0, maxLength);

    this.setState({
      foot: message,
    });
  };

  handleChangeInches = (e) => {
    const { value, maxLength } = e.target;
    const message = value.slice(0, maxLength);

    this.setState({
      inch: message,
    });
  };

  handleChangeEducation = (e) => {
    const { value } = e.target;

    this.setState({
      education: value,
    });
  };

  handleChangeAddress1 = (e) => {
    const { value, maxLength } = e.target;
    const message = value.slice(0, maxLength);

    this.setState({
      street: message,
    });
  };

  handleChangeAddress2 = (e) => {
    const { value, maxLength } = e.target;
    const message = value.slice(0, maxLength);

    this.setState({
      street2: message,
    });
  };

  handleChangeCity = (e) => {
    const { value, maxLength } = e.target;
    const message = value.slice(0, maxLength);

    this.setState({
      city: message,
    });
  };

  handleChangeState = (e) => {
    const { value, maxLength } = e.target;
    const message = value.slice(0, maxLength);

    this.setState({
      state: message,
    });
  };

  handleChangeZipCode = (e) => {
    const { value, maxLength } = e.target;
    const message = value.slice(0, maxLength);

    this.setState({
      zip: message,
    });
  };

  handleChangeEmail = (e) => {
    const { value, maxLength } = e.target;
    const message = value.slice(0, maxLength);

    this.setState({
      email: message,
    });
  };

  handleChangeEmailConfirmation = (e) => {
    const { value, maxLength } = e.target;
    const message = value.slice(0, maxLength);

    this.setState({
      emailConfirmation: message,
    });
  };

  handleChangeCaptcha = (value) => {
    this.setState({
      captchaInvalidFlag: false,
      captchaValue: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    var { email, emailConfirmation, captchaValue } = this.state;

    var form;

    this.validateLocation();

    // Confirm that emails match
    if (email !== emailConfirmation) {
      this.setState({
        validEmailConfirmation: false,
      });
      return;
    }

    if (captchaValue !== "") {
      // Create valid form
      form = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        dateOfBirth: this.state.dateOfBirth,
        foot: this.state.foot,
        inch: this.state.inch,
        education: this.state.education,
        street: this.state.street,
        street2: this.state.street2,
        city: this.state.street2,
        state: this.state.state,
        zip: this.state.zip,
        email: this.state.email,
      };

      // Send form to Validation page
      this.props.onSubmit(e, form);
    } else {
      this.setState({
        captchaInvalidFlag: true,
      });
    }
  };
}

export default SurveyForm;

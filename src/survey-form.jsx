import React, { Component } from "react";
import ReCaptchaGoogle from "./recaptcha";
import Recaptcha from "react-recaptcha";

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
      validDateOfBirth: true,
      validEmailConfirmation: true,
    };
  }

  todaysDate() {
    var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear();

    if (month < 10) month = "0" + month.toString();
    if (day < 10) day = "0" + day.toString();

    var maxDate = year + "-" + month + "-" + day;
    return maxDate;
  }

  render() {
    return (
      <div className="d-flex flex-column">
        <div className="text-center p-1 bg-info">
          <h4>CSC 642 Summer 2020 Individual Assignment: John Le</h4>
        </div>
        <form
          id="survey-form-container"
          onSubmit={this.handleSubmit}
          className="p-4"
        >
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

          <div className="form-row">
            <div className="form-group col-md-4">
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
            <fieldset className="form-group col-md-2">
              <label>Height</label>
              <div className="form-row">
                <input
                  type="number"
                  className="form-control col-md-6"
                  id="foot"
                  placeholder="feet"
                  value={this.state.foot}
                  onChange={this.handleChangeFeet}
                  maxLength="2"
                />
                <input
                  type="number"
                  className="form-control col-md-6"
                  id="inch"
                  placeholder="inches"
                  value={this.state.inch}
                  onChange={this.handleChangeInches}
                  maxLength="2"
                />
              </div>
            </fieldset>

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

          <div className="form-group">
            <label htmlFor="inputAddress">Address*</label>
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
            <div className="form-group col-md-2">
              <label htmlFor="inputAddress2">Address 2</label>
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
            <div className="form-group col-md-7">
              <label htmlFor="inputCity">City*</label>
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
            <div className="form-group col-md-1">
              <label htmlFor="inputState">State*</label>
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
            <div className="form-group col-md-2">
              <label htmlFor="inputZip">Zip*</label>
              <input
                type="text"
                className="form-control"
                id="inputZip"
                value={this.state.zip}
                onChange={this.handleChangeZipCode}
                maxLength="10"
                required
              />
            </div>
          </div>

          <hr />

          <div className="form-group">
            <label htmlFor="email">Email*</label>
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
          <div className="form-group pb-4">
            <label htmlFor="emailConfirmation">Confirm Email*</label>
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
            {!this.state.confirmEmail ? (
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
          <div className="my-4">
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="agreeCheck"
                  required
                />
                <label className="form-check-label" htmlFor="agreeCheck">
                  I agree with the <a href="_blank">Terms and Conditions</a>
                </label>
              </div>
            </div>
            {/* <ReCaptchaGoogle /> */}
            {/* <Recaptcha sitekey="" render="explicit" hl={"ja"} /> */}
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }

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

  handleSubmit = (e) => {
    e.preventDefault();

    var {
      email,
      emailConfirmation,
      dateOfBirth,
      confirmEmail,
      confirmDateOfBirth,
    } = this.state;

    var form;

    // TODO: Fix Confirm Email and Date of Birth

    //if (confirmEmail === true && confirmDateOfBirth === true)
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
    this.props.onSubmit(e, form);
  };
}

export default SurveyForm;

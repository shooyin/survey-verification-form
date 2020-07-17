import React, { Component } from "react";
import { loadReCaptcha } from "react-recaptcha-google";
import SurveyForm from "./survey-form";
import ValidationForm from "./validation-form";
import { ReCaptcha } from "react-recaptcha-google";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // formSubmitted: true,
      // form: {
      //   firstName: "John",
      //   lastName: "Le",
      //   dateOfBirth: "1994-09-01",
      //   foot: "5",
      //   inch: "7",
      //   education: "College",
      //   street: "160 W. Virginia St.",
      //   street2: "2",
      //   city: "San Jose",
      //   state: "CA",
      //   zip: "95110",
      //   email: "jle17@mail.sfsu.edu",
      // },
      formSubmitted: false,
      form: null,
    };
  }

  componentDidMount() {
    loadReCaptcha();
  }

  handleReceivedForm(e, form) {
    e.preventDefault();
    console.log("Form Received", form);
    this.setState({
      formSubmitted: true,
      form: form,
    });
  }

  render() {
    let { formSubmitted } = this.state;
    return (
      <div className="App bg-light">
        {formSubmitted ? (
          <ValidationForm form={this.state.form} />
        ) : (
          <SurveyForm
            onSubmit={(e, form) => this.handleReceivedForm(e, form)}
          />
        )}
      </div>
    );
  }
}

export default App;

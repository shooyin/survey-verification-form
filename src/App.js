import React, { Component } from "react";
import SurveyForm from "./survey-form";
import ValidationForm from "./validation-form";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      form: null,
    };
  }

  /* perform this when a survey form is submitted */
  handleReceivedForm(e, form) {
    e.preventDefault();
    this.setState({
      formSubmitted: true,
      form: form,
    });
  }

  /* perform this when the user would like to "try again". */
  handleReset(e) {
    e.preventDefault();
    this.setState({
      formSubmitted: false,
      form: null,
    });
  }

  render() {
    let { formSubmitted } = this.state;
    return (
      <div className="App bg-light">
        {formSubmitted ? (
          <ValidationForm
            form={this.state.form}
            resetForm={(e) => this.handleReset(e)}
          />
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

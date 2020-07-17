import React, { Component } from "react";
import { ReCaptcha } from "react-recaptcha-google";

class ReCaptchaGoogle extends Component {
  constructor(props, context) {
    super(props, context);
    this.onLoadRecaptcha = this.onLoadRecaptcha.bind(this);
    this.verifyCallback = this.verifyCallback.bind(this);
  }

  componentDidMount() {
    if (this.captchaDemo) {
      console.log("started, just a second...");
      this.captchaDemo.reset();
      this.captchaDemo.execute();
    }
  }

  onLoadRecaptcha() {
    if (this.captchaDemo) {
      this.captchaDemo.reset();
      this.captchaDemo.execute();
    }
  }

  verifyCallback(recaptchaToken) {
    // Here you will get the final recaptchaToken!!!
    const { change } = this.props;
    // inside hidden field
    change("recaptchaResponse", recaptchaToken);
    // or state
    this.setState("recaptchaResponse", recaptchaToken);
    console.log(recaptchaToken, "<= your recaptcha token");
  }

  render() {
    return (
      <div>
        {/* You can replace captchaDemo ref with whatever works for your component */}
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
        <ReCaptcha
          ref={(el) => {
            this.captchaDemo = el;
          }}
          size="normal"
          render="explicit"
          sitekey="your_site_key"
          onloadCallback={this.onLoadRecaptcha}
          verifyCallback={this.verifyCallback}
        />
        <code>
          1. Add <strong>your site key</strong> in the ReCaptcha component.{" "}
          <br />
          2. Check <strong>console</strong> to see the token.
        </code>
      </div>
    );
  }
}

export default ReCaptchaGoogle;

import React, { useState } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";

export default class SignUp extends React.Component {
  // constructor() {
  //   this.state = {
  //     email: "Test",
  //   };
  // }

  // const [email, setEmail] = useState("");

  // Since `addToMailchimp` returns a promise, you
  // can handle the response in two different ways:

  // Note that you need to send an email & optionally, listFields
  // these values can be pulled from React state, form fields,
  // or wherever.  (Personally, I recommend storing in state).

  // _handleInput = (e) => {
  //   setEmail((prevState) => {
  //     const emailInput = {
  //       ...prevState,
  //       [this.e.target.name]: this.e.target.value,
  //     };

  //     return emailInput;
  //   });
  // };

  // useEffect(() => {
  //   this.email
  // });

  // _handleSubmit = (e) => {
  //   // e.preventDefault();
  //   addToMailchimp(email)
  //     .then((data) => {
  //       // I recommend setting data to React state
  //       // but you can do whatever you want (including ignoring this `then()` altogether)
  //       console.log(data);
  //     })
  //     .catch(() => {
  //       // unnecessary because Mailchimp only ever
  //       // returns a 200 status code
  //       // see below for how to handle errors
  //     });
  // };

  render() {
    return null;
    // <form onSubmit={this._handleSubmit(email)}>
    //   <input value="email" />
    // </form>
  }
}

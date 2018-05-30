import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import Nav from './Nav';
import Logo from './Logo';
import fire from '../config/keys';
import '../styling/contact.css';


class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      number: '',
      message: '',
      timestamp: Date.now(),
      formHidden: false,
      formResponse: false,
      formErrors:
        {
          name: '',
          email: '',
          number: '',
          address: '',
          message: '',
        },
      nameValid: false,
      emailValid: false,
      phoneNumberValid: false,
      addressValid: false,
      messageValid: false,
      formValid: false,
      selectedOption: false,
      radioButtonSections: {
        wedding: false,
        barBatMitzvah: false,
        corporate: false,
        other: false,
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.radioButtonChange = this.radioButtonChange.bind(this);
    this.hiddenEventSections = this.hiddenEventSections.bind(this);
  }

  componentDidMount() {
    const min = new Date().getFullYear();
    const max = min + 9;
    const select = document.getElementById('formYears');

    for (let i = min; i<=max; i++) {
      const opt = document.createElement('option');
      opt.value = i;
      opt.innerHTML = i;
      select.appendChild(opt);
    }
  }

  onChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(
      { [name]: value },
      () => { this.validateField(name, value); },
    );
  }

  onFormSubmit() {
    this.setState(currentState => ({
      formResponse: !currentState.formResponse,
    }), () => console.log(`Toggling visibility of Header!: ${this.state.formResponse}`))
  }


  onSubmit(event) {
    event.preventDefault();

    // get our form data out of state
    const {
      name, email, number, address, message, timestamp,
    } = this.state;

    const myDate = new Date(timestamp);
    const formatedTime = myDate.toJSON();

    fire.database().ref().push({
      name: name,
      email: email,
      number: number,
      address: address,
      message: message,
      timestamp: formatedTime
    }).then((response) => {
      console.log(response);
    })
      .catch((error) => {
        console.log(error);
      });

    this.formHider();
    this.onFormSubmit();
  }

  radioButtonChange(event) {
    if (event.target.checked === true) {
      this.setState({
        selectedOption: event.target.value,
      }, () => console.log(`Selected Option ${this.state.selectedOption}`));
    }
  }

  hiddenEventSections() {
    if (this.state.selectedOption === 'wedding') {
      this.setState({
        radioButtonSections: { wedding: true }
      }, () => console.log(`Wedding Section ${this.state.radioButtonSections.wedding}`))
    }
    if (this.state.selectedOption === 'barBatMitzvah') {
      this.setState({
        radioButtonSections: { barBatMitzvah: true }
      }, () => console.log(`Bar Bat Mitzvah Section ${this.state.radioButtonSections.barBatMitzvah}`))
    }
    if (this.state.selectedOption === 'corporate') {
      this.setState({
        radioButtonSections: {corporate: true }
      }, () => console.log(`Corporate Section ${this.state.radioButtonSections.corporate}`))
    } else if (this.state.selectedOption === 'other') {
      this.setState({
        radioButtonSections: { other: true }
      }, () => console.log(`Other Section ${this.state.radioButtonSections.barBatMitzvah}`))
    }
  }

  errorClass(error) {
    return (
      error.length === 0 ? '' : 'has-error'
    );
  }

  validateForm() {
    const {
      nameValid,
      emailValid,
      phoneNumberValid,
      addressValid,
      messageValid,
    } = this.state;

    this.setState({
      formValid: nameValid && emailValid && phoneNumberValid && messageValid
    });
  }

  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;
    let phoneNumberValid = this.state.phoneNumberValid;
    let addressValid = this.state.addressValid;
    let messageValid = this.state.messageValid;

    switch (fieldName) {
      case 'name':
        nameValid = value.match(/^[a-z ,.'-]+$/i) && value.length >= 2;
        fieldValidationErrors.name = nameValid ? '': ' is invalid';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'number':
        phoneNumberValid = value.length >= 10;
        fieldValidationErrors.number = phoneNumberValid ? '': ' is too short';
        break;
      case 'address':
        addressValid = value.length >= 4;
        fieldValidationErrors.number = addressValid ? '': ' is too short';
        break;
      case 'message':
        messageValid = value.match(/^[a-zA-Z0-9 ,.!'-]+$/i) && value.length >= 2;
        fieldValidationErrors.message = messageValid ? '': ' is invalid';
        break;
      default:
        break;
    }

    this.setState({formErrors: fieldValidationErrors,
      nameValid: nameValid,
      emailValid: emailValid,
      phoneNumberValid: phoneNumberValid,
      addressValid: addressValid,
      messageValid: messageValid,
    }, this.validateForm);
  }

  formHider() {
    this.setState(currentState => ({
      formHidden: !currentState.formHidden,
    }), () => console.log(`Toggling visibility of Header!: ${this.state.formHidden}`))
  }

  render() {


    const {
      name,
      email,
      number,
      address,
      message,
      formResponse,
      formHidden,
      formErrors,
      formValid
    } = this.state;


    if(formErrors.name.toString() === 'name') {
      console.log('helloooooo')
    }

    return (
      <div id="contactComponent">
        <Logo />
        <Nav />
        <form
          method="POST"
          action="send"
          id="contactForm"
          className="wow bounceInLeft formContainerStyle"
          onSubmit={this.onSubmit}
        >
          {/* <div
            id="quesWorkTog"
          >
            Have any questions?
            <div
              className="workStyle"
            >
              Fill out the form below and
            </div>
            <div
              className="workStyle"
            >
              lets work together!
            </div>
          </div> */}
          <FormErrors
            formErrors={formErrors}
            className="formErrorContainer"
          />

          {/* Name */}
          <div className={`
              form-group ${this.errorClass(formErrors.name)}
            `}
          >
            <label>
              Name
              <input
                className="inputStyle"
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={this.onChange}
              />
            </label>
          </div>

          {/* Email */}
          <div
            className={`
              form-group ${this.errorClass(formErrors.email)}
            `}
          >
            <label>
              Email
              <input
                className="inputStyle"
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={this.onChange}
              />
            </label>
          </div>

          {/* Phone Number */}
          <div
            className={`
                form-group ${this.errorClass(formErrors.number)}
              `}
          >
            <label>
              Phone Number
              <input
                className="inputStyle"
                type="tel"
                id="phoneNumber"
                name="number"
                value={number}
                onChange={this.onChange}
              />
            </label>
          </div>

          {/* Type of event */}
          <div
            id="eventTypeContainer"
          >
            <label>
              <input
                className="radioEventType"
                type="radio"
                name="eventType"
                value="wedding"
                checked={this.state.selectedOption === 'wedding'}
                onChange={this.radioButtonChange}
              />
              Wedding
            </label>

            <label>
              <input
                className="radioEventType"
                type="text"
                name="weddingNames"
                value="bridesName"
                onChange={this.hiddenEventSections}
              />
              Bride's Name
            </label>

            <label>
              <input
                className="radioEventType"
                type="radio"
                name="eventType"
                value="barBatMitzvah"
                checked={this.state.selectedOption === 'barBatMitzvah'}
                onChange={this.radioButtonChange}
              />
              Bar/Bat Mitzvah
            </label>

            <label>
              <input
                className="radioEventType"
                type="radio"
                name="eventType"
                value="corporate"
                checked={this.state.selectedOption === 'corporate'}
                onChange={this.radioButtonChange}
              />
              Corporate
            </label>

            <label>
              <input
                className="radioEventType"
                type="radio"
                name="eventType"
                value="other"
                checked={this.state.selectedOption === 'other'}
                onChange={this.radioButtonChange}
              />
              Other
            </label>
          </div>

          {/* Service */}
          <div
            id="serviceContainer"
          >
            <label>
              <input
                className="checkBoxServiceType"
                type="checkbox"
                name="serviceType"
                value="band"
              />
              Band
            </label>

            <label>
              <input
                className="checkBoxServiceType"
                type="checkbox"
                name="serviceType"
                value="dj"
              />
              DJ
            </label>

            <label>
              <input
                className="checkBoxServiceType"
                type="checkbox"
                name="serviceType"
                value="ceremony"
              />
              Ceremony
            </label>

            <label>
              <input
                className="checkBoxServiceType"
                type="checkbox"
                name="serviceType"
                value="acapella"
              />
              Acapella
            </label>

            <label>
              <input
                className="checkBoxServiceType"
                type="checkbox"
                name="serviceType"
                value="other"
              />
              Other
            </label>
          </div>

          {/* Address */}
          <div
            id="addressContainer"
          >
            <label>
                Address
              <input
                className="inputStyle"
                type="text"
                id="address"
                name="address"
                value={address}
                onChange={this.onChange}
              />
            </label>

            <label>
                City
              <input
                className="inputStyle"
                type="text"
                id="city"
                name="city"
                // value={city}
                onChange={this.onChange}
              />
            </label>

            <label>
              <select 
                name="state"
                // className="inputStyle"ij
                id="state"
              >
                <option value="" defaultValue="selected">Select a State</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
            </label>

            <label>
                Zip Code
              <input
                className="inputStyle"
                type="text"
                id="zip"
                name="zip"
                // value={zip}
                onChange={this.onChange}
              />
            </label>
          </div>

          {/* Date of Event */}
          <div
            id="dateOfEvent"
          >
            <label>
                Month
              <select
                id="month"
                name="month"
              >
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </label>

            <label>
              Day
              <select
                id="day"
                name="day"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
              </select>
            </label>

            <label
              className=""
            >
              Year
              <select
                id="formYears"
              />
            </label>
          </div>

          {/* Time */}
          <div>
            <label>
              Start Time
              <input
                className="inputStyle"
                type="text"
                id="startTime"
                name="startTime"
                // value={startTime}
                onChange={this.onChange}
              />
              </label>
          </div>

          {/* Number of Guests */}
          <div>
            <label>
              Number of Guests
              <input
                className="inputStyle"
                type="text"
                id="numberOfGuests"
                name="numberOfGuests"
                // value={numberOfGuests}
                onChange={this.onChange}
              />
              </label>
          </div>

          {/* Venue */}
          <div>
            <label>
              Venue
              <input
                className="inputStyle"
                type="text"
                id="venue"
                name="venue"
                // value={venue}
                onChange={this.onChange}
              />
              </label>
          </div>

          {/* Additional Info */}
          <div className=
            {`
              form-group ${this.errorClass(formErrors.message)}
            `}
          >
            <div
              className="labelContainer"
            >
              <div
                className="labelStyle"
                htmlFor="message"
              >
                Additional Information
              </div>
            </div>
            <textarea
              className="inputStyle textareaStyle"
              rows="12"
              cols="72"
              id="message"
              name="message"
              value={message}
              onChange={this.onChange}
            />
          </div>
          <button
            className="buttonStyle"
            type="submit"
            disabled={!formValid}
          >
            Submit
          </button>
          <footer
            className="footerStyle"
          >
            Copyright © 2018 Haviv Entertainment - All Rights Reserved.
          </footer>
        </form>
      </div>
    );
  }
}
export default Contact;

import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import { registerParticipant } from "../services/participantService";

class Conference extends Component {
  state = {
    account: {
      firstName: "",
      lastName: "",
      email: "",
      organisation: "",
    },
    errors: {},
    registrationId: "",
  };

  schema = {
    firstName: Joi.string().required().max(30),
    lastName: Joi.string().required().max(30),
    email: Joi.string().email().max(96),
    organisation: Joi.string().max(256),
  };

  componentDidMount() {
    const registrationId = localStorage.getItem("registrationId");
    this.setState({ registrationId });
  }

  handleNewRegistration = () => {
    localStorage.removeItem("registrationId");
    const account = {
      firstName: "",
      lastName: "",
      email: "",
      organisation: "",
    };
    const registrationId = "";
    this.setState({ account, registrationId });
  };

  translateErrorMessage = (errors, i) => {
    if (i === "email") errors[i] = "Моля, въведете валиден e-mail.";
    else if (i === "emailRegistered")
      errors.email = "Този e-mail вече е регистриран.";
    else if (i === "organisation")
      errors[i] =
        "Моля, въведете организация или интересите, които Ви мотивират да участвате.";
    else errors[i] = "Полето не може да бъде празно.";
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const result = Joi.validate(obj, schema);
    return result.error ? result.error.details[0].path[0] : null;
  };

  handleChange = ({ currentTarget: input }) => {
    let errors = { ...this.state.errors };
    const errorKey = this.validateProperty(input);
    if (errorKey) errors = this.translateErrorMessage(errors, errorKey);
    else delete errors[input.name];

    let account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account, errors });
  };

  validate = () => {
    const result = Joi.validate(this.state.account, this.schema, {
      abortEarly: false,
    });
    if (!result.error) return null;
    let errors = {};
    if (result.error) {
      for (let item of result.error.details) {
        errors = this.translateErrorMessage(errors, item.path[0]);
      }
    }
    return errors;
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    try {
      const { data } = await registerParticipant(this.state.account);
      let registrationId = this.state.registrationId;
      registrationId = data;
      this.setState({ registrationId });

      localStorage.setItem("registrationId", registrationId);
    } catch (ex) {
      let errors = {};
      if (ex.response && ex.response.status === 400) {
        for (let item in ex.response.data.errors) {
          errors = this.translateErrorMessage(errors, item);
        }
      }
      this.setState({ errors: errors || {} });
    }
  };

  renderInput = (name, label, value) => {
    return (
      <Input
        name={name}
        type="text"
        label={label}
        value={value}
        onChange={this.handleChange}
        errors={this.state.errors}
      />
    );
  };

  render() {
    const { firstName, lastName, email, organisation } = this.state.account;
    return (
      <div className="form_container">
        <h2 className="align_center">Национална велосипедна конференция</h2>
        <div className="text">
          <br />
          През м. октомври 2022 ще се проведе Национална велосипедна
          конференция. На нея ще бъдат обсъдени Националния велосипеден план и
          Схемата на Национална мрежа от велосипедни маршрути. <br />
          <br />
          Можете да се регистрирате за участие в конференцията като попълните
          формата за участие. На посочен от Вас e-mail ще получите актуална
          информация относно дата и мястото на провеждане, програмата и
          лекторите на събитието.
        </div>
        {this.state.registrationId && (
          <div>
            <h3 className="align_center">
              Вие сте регистрирани за конференцията.
            </h3>
            <button className="btn_arrow" onClick={this.handleNewRegistration}>
              Нова регистрация
            </button>
          </div>
        )}
        {!this.state.registrationId && (
          <form onSubmit={this.handleSubmit}>
            <h3 className="align_center">Форма за регистрация</h3>
            {this.renderInput("firstName", "Име", firstName)}
            {this.renderInput("lastName", "Фамилия", lastName)}
            {this.renderInput("email", "E-mail", email)}
            {this.renderInput("organisation", "Организация", organisation)}
            <button type="submit" className="btn_arrow">
              Регистрирай се
            </button>
          </form>
        )}
      </div>
    );
  }
}

export default Conference;

import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { debounce } from "lodash";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./modalLog.css";

export const RegisterModal = () => {
  const {
    nameValue,
    passwordValue,
    emailValue,
    passwordConfValue,
    errors
  } = useSelector(state => ({
    nameValue: state.registerData.nameValue,
    passwordValue: state.registerData.passwordValue,
    emailValue: state.registerData.emailValue,
    passwordConfValue: state.registerData.passwordConfValue,
    errors: state.errors
  }));
  const dispatch = useDispatch();
  const nameChange = debounce(inputText => {
    dispatch({ type: "CHANGE_NAME_VALUE", value: inputText });
  }, 100);
  const passwordChange = debounce(inputText => {
    dispatch({ type: "CHANGE_PASSWORD_VALUE", value: inputText });
  }, 100);
  const emailChange = debounce(inputText => {
    dispatch({ type: "CHANGE_EMAIL_VALUE", value: inputText });
  }, 100);
  const passwordConfChange = debounce(inputText => {
    dispatch({ type: "CHANGE_PASSWORD_CONF_VALUE", value: inputText });
  }, 100);
  const registerUser = () => {
    const userData = {
      name: nameValue,
      password: passwordValue,
      email: emailValue,
      password2: passwordConfValue
    };
    axios
      .post("/users/register", userData)
      .then(res => dispatch({ type: "CLOSE_REGISTER_MODAL" }))
      .then(res => dispatch({ type: "OPEN_MODAL_LOG" }))
      .catch(err =>
        dispatch({
          type: "GET_ERRORS",
          payload: err.response.data
        })
      );
  };
  return (
    <div className="modal" id="firstLink">
      <header className="modal__header">
        <h2>Register below</h2>
        <FontAwesomeIcon
          icon={faTimes}
          size="2x"
          onClick={() => dispatch({ type: "CLOSE_REGISTER_MODAL" })}
        />
      </header>

      <main className="modal__content">
        <div className="form-field">
          <label>
            Your name:{" "}
            <input
              className="input__default"
              type="text"
              id="name"
              name="name"
              onChange={e => nameChange(e.target.value)}
            />
            <span className='red-text'>{errors.name}</span>
          </label>
          <label>
            Your email:{" "}
            <input
              className="input__default"
              type="text"
              id="email"
              name="email"
              onChange={e => emailChange(e.target.value)}
            />
            <span className='red-text'>{errors.email}</span>
          </label>

          <label>
            Your password:{" "}
            <input
              className="input__default"
              type="text"
              id="password"
              name="password"
              onChange={e => passwordChange(e.target.value)}
            />
            <span className='red-text'>{errors.password}</span>
          </label>
          <label>
            Confirm your password:{" "}
            <input
              className="input__default"
              type="text"
              id="passwordConf"
              name="passwordConf"
              onChange={e => passwordConfChange(e.target.value)}
            />
            <span className='red-text'>{errors.password2}</span>
          </label>
        </div>
      </main>

      <footer className="modal__footer">
        <button
          className="modal__cancel"
          title="Отмена"
          onClick={() => dispatch({ type: "CLOSE_REGISTER_MODAL" })}
        >
          Cancel
        </button>
        <button
          id="register"
          className="modal__save"
          title="Log In"
          onClick={registerUser}
        >
          Register
        </button>
      </footer>
    </div>
  );
};

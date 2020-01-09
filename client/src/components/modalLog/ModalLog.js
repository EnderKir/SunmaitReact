import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { debounce } from "lodash";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./modalLog.css";

export const ModalLog = () => {
  const { loginValue, passwordValue, errors } = useSelector(state => ({
    loginValue: state.loginData.loginValue,
    passwordValue: state.loginData.passwordValue,
    errors: state.errors
  }));
  const dispatch = useDispatch();
  const openRegisterModal = () => {
    dispatch({ type: "CLOSE_MODAL_LOG" });
    dispatch({ type: "OPEN_REGISTER_MODAL" });
  };
  const getProjects = () => {
    axios
      .get("/projects")
      .then(res =>
        dispatch({
          type: "GET_PROJECTS",
          value: res.data
        })
      )
      .catch(function(error) {
        console.log(error.res);
      });
  };
  const loginUser = () => {
    const userData = { email: loginValue, password: passwordValue };
    axios
      .post("/users/login", userData)
      .then(res => {
        dispatch({ type: "LOGGED_IN" });
        dispatch({ type: "CLOSE_MODAL_LOG" });
        getProjects();
        // // Save to localStorage
        // // Set token to localStorage
        // const { token } = res.data;
        // localStorage.setItem("jwtToken", token);
        // // Set token to Auth header
        // setAuthToken(token);
        // // Decode token to get user data
        // const decoded = jwt_decode(token);
        // // Set current user
        // dispatch(setCurrentUser(decoded));
      })
      .catch(err =>
        dispatch({
          type: "GET_ERRORS",
          payload: err.response.data
        })
      );
  };
  const loginChange = debounce(inputText => {
    dispatch({ type: "CHANGE_LOGIN_VALUE", value: inputText });
  }, 100);
  const passwordChange = debounce(inputText => {
    dispatch({ type: "CHANGE_PASSWORD_VALUE", value: inputText });
  }, 100);
  return (
    <div className="modal" id="firstLink">
      <header className="modal__header">
        <h2>Welcome!</h2>
        <FontAwesomeIcon
          icon={faTimes}
          size="2x"
          onClick={() => dispatch({ type: "CLOSE_MODAL_LOG" })}
        />
      </header>

      <main className="modal__content">
        <div className="form-field">
          <label>
            Your email:{" "}
            <input
              className="input__default"
              type="text"
              id="name"
              name="name"
              onChange={e => loginChange(e.target.value)}
            />
            <span className="red-text">
              {errors.email}
              {errors.emailnotfound}
            </span>
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
            <span className="red-text">
              {errors.password}
              {errors.passwordincorrect}
            </span>
          </label>
        </div>
      </main>

      <footer className="modal__footer">
        <button
          className="open__register"
          title="Открыть регистрацию"
          onClick={openRegisterModal}
        >
          Register
        </button>
        <button
          className="modal__cancel"
          title="Отмена"
          onClick={() => dispatch({ type: "CLOSE_MODAL_LOG" })}
        >
          Cancel
        </button>
        <button
          id="modal-save"
          className="modal__save"
          title="Log In"
          onClick={loginUser}
        >
          Log In
        </button>
      </footer>
    </div>
  );
};

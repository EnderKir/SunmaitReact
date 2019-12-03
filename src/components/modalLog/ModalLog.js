import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { debounce } from "lodash";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./modalLog.css";

export const ModalLog = () => {
  const { loginValue, passwordValue } = useSelector(state => ({
    loginValue: state.loginData.loginValue,
    passwordValue: state.loginData.passwordValue
  }));
  const dispatch = useDispatch();
  const logAction = () => {
    if (loginValue === "Admin" && passwordValue === "1234") {
      dispatch({ type: "LOGGED_IN" });
      dispatch({ type: "CLOSE_MODAL_LOG" });
    }
  };
  const loginChange = debounce(inputText => {
    dispatch({ type: "CHANGE_LOGIN_VALUE", value: inputText });
  }, 500);
  const passwordChange = debounce(inputText => {
    dispatch({ type: "CHANGE_PASSWORD_VALUE", value: inputText });
  }, 500);
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
            Your Login:{" "}
            <input
              className="input__default"
              type="text"
              id="name"
              name="name"
              onChange={e => loginChange(e.target.value)}
            />
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
          </label>
        </div>
      </main>

      <footer className="modal__footer">
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
          title="Сохранить"
          onClick={logAction}
        >
          Log In
        </button>
      </footer>
    </div>
  );
};

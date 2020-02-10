import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./overlay.css";

export const Overlay = () => {
  const dispatch = useDispatch();
  const { mobileFlag, modalLogFlag } = useSelector(state => ({
    mobileFlag: state.mobileMenuCondition.isMobileMenuOpen,
    modalLogFlag: state.modalLogCondition.isModalLogOpen,
  }));
  const handleClick = () => {
    dispatch({ type: "CLOSE_MOBILE_MENU" });
    dispatch({ type: "CLOSE_MODAL_LOG" });
  };
  return (
    <div
      className="overlay"
      style={{
        width: mobileFlag ||  modalLogFlag ? "100%" : "0",
        height: mobileFlag ||  modalLogFlag ? "100%" : "0"
      }}
      onClick={handleClick}
    ></div>
  );
};

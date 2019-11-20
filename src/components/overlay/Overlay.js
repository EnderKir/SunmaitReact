import React from "react";
import { useDispatch, useSelector } from "react-redux";

import "./overlay.css";

export const Overlay = () => {
  const dispatch = useDispatch();
  const { mobileFlag } = useSelector(state => ({
    mobileFlag: state.mobileMenuCondition.isMobileMenuOpen
  }));
  const handleClick = () => {
    document.body.classList.remove("stop-scrolling");
    dispatch({ type: "CLOSE_MOBILE_MENU" });
  };
  return (
    <div
      className="overlay"
      style={{
        width: mobileFlag ? "100%" : "0",
        height: mobileFlag ? "100%" : "0"
      }}
      onClick={handleClick}
    ></div>
  );
};

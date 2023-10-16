// import React from "react";

const Button = ({ isActive, handleClick }) => {
  return (
    <button className="menu-btn" onClick={handleClick}>
      {isActive ? (
        <img src="/images/icon-menu-close.svg" />
      ) : (
        <img src="/images/icon-menu.svg" />
      )}
    </button>
  );
};

export default Button;

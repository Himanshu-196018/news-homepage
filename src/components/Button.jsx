// import React from "react";

const Button = ({ isActive, handleClick }) => {
  return (
    <button className="menu-btn" onClick={handleClick}>
      {isActive ? (
        <img src="/images/icon-menu-close.svg" alt="menu close icon" />
      ) : (
        <img src="/images/icon-menu.svg" alt="menu burger icon" />
      )}
    </button>
  );
};

export default Button;

import React from "react";

const Header = () => {
  return (
    <header>
      <h1>W.</h1>
      <nav>
        <ul>
          <li>
            <a href="#" className="nav-link hover hover-orangered">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link hover hover-orangered">
              New
            </a>
          </li>
          <li>
            <a href="#" className="nav-link hover hover-orangered">
              Popular
            </a>
          </li>
          <li>
            <a href="#" className="nav-link hover hover-orangered">
              Trending
            </a>
          </li>
          <li>
            <a href="#" className="nav-link hover hover-orangered">
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

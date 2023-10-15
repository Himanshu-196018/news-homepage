// import React from "react";

const Header = () => {
  return (
    <header>
      <img src="/images/logo.svg" />
      <h1 className="sr-only">World News</h1>
      <nav>
        <ul>
          <li>
            <a href="#" className="nav-link hover hover-orange">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-link hover hover-orange">
              New
            </a>
          </li>
          <li>
            <a href="#" className="nav-link hover hover-orange">
              Popular
            </a>
          </li>
          <li>
            <a href="#" className="nav-link hover hover-orange">
              Trending
            </a>
          </li>
          <li>
            <a href="#" className="nav-link hover hover-orange">
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import { useState, useEffect } from "react";
import Button from "./Button";

function isMobileWidth() {
  return window.innerWidth < 700;
}

const Header = () => {
  const [isMobile, setIsMobile] = useState(isMobileWidth());
  const [isActive, setIsActive] = useState(!isMobileWidth());

  useEffect(() => {
    function handleWindowResize() {
      setIsMobile(isMobileWidth());
      setIsActive(!isMobileWidth());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function handleClick() {
    setIsActive((prev) => !prev);
  }

  return (
    <header>
      <img src="/images/logo.svg" alt="W. news logo" />
      <h1 className="sr-only">World News</h1>
      <nav>
        {isMobile && <Button isActive={isActive} handleClick={handleClick} />}
        {isActive && (
          <ul>
            <li>
              <a href="#" className="nav-link hover hover-red">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link hover hover-red">
                New
              </a>
            </li>
            <li>
              <a href="#" className="nav-link hover hover-red">
                Popular
              </a>
            </li>
            <li>
              <a href="#" className="nav-link hover hover-red">
                Trending
              </a>
            </li>
            <li>
              <a href="#" className="nav-link hover hover-red">
                Categories
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;

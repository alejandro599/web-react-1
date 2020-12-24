import React, { useState, useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "../style/Navbar.scss";
/*const handleClicks = () =>{
  window[`scrollTo`]({top:0,behavior:`smooth`})
}*/
function Navbar() {
  let logoItem = useRef(null);
  useEffect(() => {
    TweenMax.to(logoItem, 0.8, {
      opacity: 1,
      ease: Power3.ease,
      delay: 0.9,
    });
  }, []);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavBar] = useState(false);

  const handleClick = () => {
    setClick(!click);
    
  }
  const closeMobileMenu = () => {
    setClick(false);
    window[`scrollTo`]({top:0,behavior:`smooth`})
  }
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav
        ref={(el) => {
          logoItem = el;
        }}
        className={navbar ? "navbar active" : "navbar"}
      >
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu }>
            <img className="navbar-logo" src="images/logo.png" alt="" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ¿Quiénes Somos?
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/bloques"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Bloques 
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Iniciar Sesión</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

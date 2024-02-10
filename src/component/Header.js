import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div id="main-wrapper" className="main-wrapper">
        <header className="edu-header header-style-4 header-fullwidth no-topbar">
          <div id="edu-sticky-placeholder"></div>
          <div className="header-mainmenu">
            <div className="container-fluid">
              <div className="header-navbar">
                <div className="header-brand">
                  <div className="logo">
                    <a href="index.html">
                      <img className="logo-light" src="assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                      <img className="logo-dark" src="assets/images/logo/logo-white.png" alt="Corporate Logo" />
                    </a>
                  </div>
                </div>
                <div className="header-mainnav">
                  <nav className="mainmenu-nav">
                    <ul className="mainmenu">
                      <li className="has-droupdown"><a href="www.google.com">Home</a></li>
                      <li className="has-droupdown"><a href="www.google.com">Pages</a></li>
                      <li className="has-droupdown"><a href="#">Courses</a></li>
                      <li className="has-droupdown"><a href="#">Blog</a></li>
                      <li className="has-droupdown"><a href="#">Contact</a></li>
                    </ul>
                  </nav>
                </div>
                <div className="header-right">
                  <ul className="header-action">
                    <li className="header-btn">
                      <a href="contact-us.html" className="edu-btn btn-medium btn-curved">Try for free <i className="icon-4"></i></a>
                    </li>
                    <li className="mobile-menu-bar d-block d-xl-none">
                      <button className="hamberger-button" onClick={toggleMenu}>
                        <i className="icon-54"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className={`popup-mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="inner">
            <div className="header-top">
              <div className="logo">
                <a href="index.html">
                  <img className="logo-light" src="assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                  <img className="logo-dark" src="assets/images/logo/logo-white.png" alt="Corporate Logo" />
                </a>
              </div>
              <div className="close-menu">
                <button className="close-button" onClick={toggleMenu}>
                  <i className="icon-73"></i>
                </button>
              </div>
            </div>
            <ul className="mainmenu">
              <li className="has-droupdown"><a href="#">Home</a></li>
              <li className="has-droupdown"><a href="#">Pages</a></li>
              <li className="has-droupdown"><a href="#">Courses</a></li>
              <li className="has-droupdown"><a href="#">Blog</a></li>
              <li className="has-droupdown"><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

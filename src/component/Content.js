import React from 'react'

export default function Content() {
  return (
    <div className="edu-about-area about-style-6">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6">
          <div className="about-image-gallery">
            <div className="main-img-1">
              <img src="assets/images/about/about-09.png" alt="About Image" />
            </div>
            <div className="main-img-2 bounce-slide">
              <img src="assets/images/about/about-10.png" alt="About Image" />
            </div>
            <ul className="shape-group">
              <li className="shape-1">
                <img src="assets/images/about/shape-11.png" alt="Shape" />
              </li>
              <li className="shape-2">
                <img src="assets/images/about/shape-12.png" alt="Shape" />
              </li>
              <li className="shape-3 scene">
                <img data-depth="1" src="assets/images/about/shape-13.png" alt="Shape" />
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6">
            
          <div className="about-content">
            <div className="section-title section-left">
              <span >Welcome to the Study Hall School Junior</span>
              <h2 className="title">Welcome To Best Preschool Class Center</h2>
              <span className="shape-line"><i className="icon-19"></i></span>
              <p>Magna aliquaenim minim veniam quis nostrud exercitation ullamco laborisLorem ipsum dolor sit amet consectetur adipisicing elit sed do eius tempor incididunt labore.</p>
            </div>
            <div className="about-mission">
              <div className="row g-5 row--20">
                <div className="col-lg-6">
                  <h5 className="title">Our Vision</h5>
                  <p>Magna aliquaenim minim veniamquis nostrud exercitation ulamco laboris Lorem ipsum dolor sit amet.</p>
                  <ul className="features-list">
                    <li>Transportation</li>
                    <li>Outdoor Games</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <h5 className="title">Our Mission</h5>
                  <p>Consectetur do eius adipisicing elit sed do eius tempor incididunt labore.</p>
                  <p>dolore magna aliqua. Ut enim ad minim veniam quis nosud exercitation ulamco.</p>
                </div>
              </div>
            </div>
            <a href="www.google.com" className="edu-btn btn-curved">
              Get Start Today <i className="icon-4"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

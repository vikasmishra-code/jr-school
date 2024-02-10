import React from 'react';
// import logo from 'assets/images/animated-svg-icons/online-class.svg';

export default function About() {
  return (
    <div className="hero-banner hero-style-7">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
           
            <div className="banner-content">
              <h1 className="title">
                A Brighter Future For Kids
              </h1>
              <p >
                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
              </p>
              <div className="banner-btn">
                <a href="www.google.com" className="edu-btn btn-curved">
                  Find courses <i className="icon-4"></i>
                </a>
              </div>
              <div className="features-list" >
                <div className="features-box color-extra02-style edublink-svg-animate">
                  <div className="icon">
                  <img className="svgInject" src="assets/images/animated-svg-icons/online-class.svg" alt="Instructor Icon" />
                  </div>
                  <div className="content">
                    <h5 className="title">3,020 <br />Online Courses</h5>
                  </div>
                </div>
                <div className="features-box color-secondary-style edublink-svg-animate">
                  <div className="icon">
                    <img className="svgInject" src="assets/images/animated-svg-icons/instructor.svg" alt="Instructor Icon" />
                  </div>
                  <div className="content">
                    <h5 className="title">Top <br />Instructors</h5>
                  </div>
                </div>
                <div className="features-box color-primary-style edublink-svg-animate">
                  <div className="icon">
                    <img className="svgInject" src="assets/images/animated-svg-icons/certificate.svg" alt="Certificate Icon" />
                  </div>
                  <div className="content">
                    <h5 className="title">Online <br />Certificates</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-gallery">
        <div className="thumbnail thumbnail-1">
          <img src="assets/images/banner/kid-3.webp" alt="Girl Image 1" />
        </div>
        <div className="thumbnail thumbnail-2">
          <img src="assets/images/banner/kid-4.webp" alt="Girl Image 2" />
        </div>
      </div>
      <ul className="shape-group">
        <li className="shape-1 scene">
          <img data-depth="2" src="assets/images/banner/icon-3.png" alt="Shape 1" />
        </li>
        <li className="shape-2 scene">
          <img data-depth="-2" src="assets/images/banner/icon-1.png" alt="Shape 2" />
        </li>
        <li className="shape-3 scene">
          <img data-depth="2" src="assets/images/banner/icon-5.png" alt="Shape 3" />
        </li>
        <li className="shape-4 scene" >
          <img data-depth="-2" src="assets/images/banner/icon-2.png" alt="Shape 4" />
        </li>
        <li className="shape-5 scene" >
          <img data-depth="2" src="assets/images/banner/icon-4.png" alt="Shape 5" />
        </li>
        <li className="shape-6" >
          <img className="rotateit" src="assets/images/about/shape-25.png" alt="Shape 6" />
        </li>
        <li className="shape-7">
          <img className="rotateit" src="assets/images/about/shape-13.png" alt="Shape 7" />
        </li>
      </ul>
    </div>
  );
}

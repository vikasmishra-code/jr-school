import React from 'react'

export default function Footer() {
  return (
    <footer className="edu-footer footer-kindergarten footer-style-6">
    <div className="footer-top">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <div className="edu-footer-widget">
              <div className="logo">
                <a href="index.html">
                  <img className="logo-dark" src="assets/images/logo/logo-dark.png" alt="Corporate Logo" />
                </a>
              </div>
              <p className="description">Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore magna aliqua enim.</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div className="edu-footer-widget explore-widget">
              <h4 className="widget-title">Online Platform</h4>
              <div className="inner">
                <ul className="footer-link link-hover">
                  <li><a href="about-one.html">About</a></li>
                  <li><a href="course-one.html">Courses</a></li>
                  <li><a href="team-one.html">Instructor</a></li>
                  <li><a href="event-grid.html">Events</a></li>
                  <li><a href="team-details.html">Instructor Profile</a></li>
                  <li><a href="purchase-guide.html">Purchase Guide</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6 col-12">
            <div className="edu-footer-widget quick-link-widget">
              <h4 className="widget-title">Links</h4>
              <div className="inner">
                <ul className="footer-link link-hover">
                  <li><a href="contact-us.html">Contact Us</a></li>
                  <li><a href="gallery-grid.html">Gallery</a></li>
                  <li><a href="blog-standard.html">News & Articles</a></li>
                  <li><a href="faq.html">FAQ's</a></li>
                  <li><a href="my-account.html">Sign In/Registration</a></li>
                  <li><a href="coming-soon.html">Coming Soon</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="edu-footer-widget">
              <h6 className="widget-title">Contacts</h6>
              <div className="inner">
                <p className="description">Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor dolore.</p>
                <div className="widget-information">
                  <ul className="information-list">
                    <li><span>Add:</span>70-80 Upper St Norwich NR2</li>
                    <li><span>Call:</span><a href="tel_3A+011235641231">+01 123 5641 231</a></li>
                    <li><span>Email:</span><a href="mailto:info@edublink.com" target="_blank">info@edublink.com</a></li>
                  </ul>
                </div>
                <ul className="social-share icon-transparent">
                  <li><a href="www.google.com" className="color-fb"><i className="icon-facebook"></i></a></li>
                  <li><a href="www.google.com" className="color-linkd"><i className="icon-linkedin2"></i></a></li>
                  <li><a href="www.google.com" className="color-ig"><i className="icon-instagram"></i></a></li>
                  <li><a href="www.google.com" className="color-twitter"><i className="icon-twitter"></i></a></li>
                  <li><a href="www.google.com" className="color-yt"><i className="icon-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-area bg-image">
      <div className="container">
        <div className="row" style={{ marginTop: '84px' }}>
          <div className="col-lg-12">
            <div className="inner text-center">
              <p>Copyright 2023. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

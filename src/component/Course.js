import React from 'react'

export default function Course() {
  return (
    <div className="edu-course-area course-area-7">
    <div className="container edublink-animated-shape">
      <div className="section-title section-center">
        <span className="pre-title pre-textsecondary">Popular Courses</span>
        <h2 className="title">Pick A Course To Get Started</h2>
        <span className="shape-line"><i className="icon-19"></i></span>
      </div>
      <div className="row g-5">
        
        <div className="col-12 col-lg-4 col-md-6">
          <div className="edu-course course-style-7 bg-color-extra02">
            <div className="inner">
              <div className="thumbnail">
                <a href="course-details.html">
                  <img src="assets/images/course/course-21.jpg" alt="Course Meta" />
                </a>
                <div className="course-price price-round">$30</div>
              </div>
              <div className="content">
                <span className="course-level">Drawing</span>
                <h5 className="title">
                  <a href="course-details.html">The Ultimate Drawing Course - Beginner to Advanced</a>
                </h5>
                <ul className="course-meta">
                  <li><i className="icon-24"></i>8 Lessons</li>
                  <li><i className="icon-25"></i>20 Students</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.</p>
              </div>
            </div>
          </div>
        </div>
       
        <div className="col-12 col-lg-4 col-md-6">
          <div className="edu-course course-style-7 bg-color-secondary">
            <div className="inner">
              <div className="thumbnail">
                <a href="course-details.html">
                  <img src="assets/images/course/course-22.jpg" alt="Course Meta" />
                </a>
                <div className="course-price price-round">$40</div>
              </div>
              <div className="content">
                <span className="course-level">Techniques</span>
                <h5 className="title">
                  <a href="course-details.html">Powerful Calming Techniques For Kids and Teens</a>
                </h5>
                <ul className="course-meta">
                  <li><i className="icon-24"></i>15 Lessons</li>
                  <li><i className="icon-25"></i>45 Students</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.</p>
              </div>
            </div>
          </div>
        </div>
       
        <div className="col-12 col-lg-4 col-md-6">
          <div className="edu-course course-style-7 bg-color-primary">
            <div className="inner">
              <div className="thumbnail">
                <a href="course-details.html">
                  <img src="assets/images/course/course-23.jpg" alt="Course Meta" />
                </a>
                <div className="course-price price-round">$50</div>
              </div>
              <div className="content">
                <span className="course-level">Parenting</span>
                <h5 className="title">
                  <a href="course-details.html">Parenting Skills to Raise Responsible Children</a>
                </h5>
                <ul className="course-meta">
                  <li><i className="icon-24"></i>32 Lessons</li>
                  <li><i className="icon-25"></i>59 Students</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectur elit sed eiusmod ex tempor incididunt labore dolore magna.</p>
              </div>
            </div>
          </div>
        </div>
       
      </div>

      <ul className="shape-group">
        <li className="shape-1 scene">
          <img data-depth="2" src="assets/images/banner/icon-3.png" alt="Shape" />
        </li>
        <li className="shape-2 scene">
          <img data-depth="-2" src="assets/images/banner/icon-2.png" alt="Shape" />
        </li>
      </ul>
    </div>
    <ul className="shape-group">
      <li className="shape-3 scene">
        <img data-depth="2" src="assets/images/banner/icon-4.png" alt="Shape" />
      </li>
    </ul>
  </div>
  )
}

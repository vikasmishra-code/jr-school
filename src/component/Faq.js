import React from 'react'

export default function Faq() {
  return (
    <div className="edu-faq-area faq-style-4">
    <div className="container">
      <div className="row g-5 row--45 align-items-end">
        <div className="col-lg-6">
          <div className="edu-faq-content">
            <div
              className="section-title section-left"
              
            >
              <span className="pre-title pre-textsecondary">Education For Everyone</span>
              <h2 className="title">Ages We Meet Kids Where They Are</h2>
              <span className="shape-line">
                <i className="icon-19"></i>
              </span>
            </div>
            <div
              className="faq-accordion"
              id="faq-accordion"
              
            >
              <div className="accordion">
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button
                      className="accordion-button style-extra02"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                    >
                      First School (1 - 2 Years)
                    </button>
                  </h5>
                  <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex
                        tempor incididunt labore dolore magna aliquaenim ad minim eniam.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button
                      className="accordion-button collapsed style-extra05"
                      type="button" data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      
                    >
                      Preschool (2 – 3 years)
                    </button>
                  </h5>
                  <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faq-accordion">
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex
                        tempor incididunt labore dolore magna aliquaenim ad minim eniam.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button
                      className="accordion-button collapsed style-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                    >
                      Kindergarten (3 – 5 years)
                    </button>
                  </h5>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faq-accordion"
                  >
                    <div className="accordion-body">
                      <p>
                        Lorem ipsum dolor sit amet consectur adipiscing elit sed eius mod ex
                        tempor incididunt labore dolore magna aliquaenim ad minim eniam.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="faq-thumbnail">
            <div className="thumbnail">
              <img src="assets/images/1.png" alt="Faq Thumbnail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

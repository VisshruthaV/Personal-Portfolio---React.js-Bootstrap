import React from "react";
const AboutUs = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Heading */}
        <p className="text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">About Me</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          Get To Know Me
        </h2>
        {/* Heading end*/}
        <div className="row">
          <div className="col-lg-8 text-center text-lg-start wow fadeInUp">
            <h2 className="text-8 fw-400 mb-3">
              I'm{" "}
              <span className="fw-700 border-bottom border-3 border-primary">
               <span className="fw-700 text-primary">Vi</span>sshrutha Velumani
              </span>
            </h2>
            <p className="text-3">
              I strive to lead my work with <span className="fw-700 shadow">evidence</span>. With data being the evidentiary foundation to all worldly functions,
              I harness the power of data to transform my past work and future work in software engineering, data & business analytics, and
              product management & development.
            </p>
            <p className="text-3">
               I hold a bachelor's in computer science from Wayne State University in Detroit, Michigan and a master's in business data analytics
               from the University of Windsor in Windsor, Ontario. 
              Outside of education & work, I love to immerse myself in art and dance - both of which I've been practicing from 5 years old! Favorite color? 
              I will let you take an educated guess.
            </p>
          </div>

          <div
            className="col-lg-4 mt-4 mt-lg-0 wow fadeInUp"
            data-wow-delay="0.2s"
          >
            <div className="featured-box style-4">
              {/*<div className="featured-box-icon text-25 fw-500 bg-primary rounded-circle">*/}
                <span className="wow heartBeat" data-wow-delay="1.3s">
                  <img
                    className="img-fluid wow heartBeat" data-wow-delay="1.3s"
                    src="images/wayne_logo.png"
                    title="FAQ"
                    alt="faq"
                    />{" "}
                </span>
              {/*</div>*/}
              <h3 className="text-3 wow rubberBand" data-wow-delay="2s">
                Bachelor's in <span className="fw-700">Computer Science</span>
              </h3>
            </div>

            <div className="featured-box style-4">
               {/*<div className="featured-box-icon text-25 fw-500 bg-primary rounded-circle">*/}
                <span className="wow heartBeat" data-wow-delay="1.3s">
                  <img
                    className="img-fluid wow heartBeat" data-wow-delay="1.3s"
                    src="images/uwin_logo.png"
                    title="FAQ"
                    alt="faq"
                    />{" "}
                </span>
              {/*</div>*/}
              <h3 className="text-3 wow rubberBand" data-wow-delay="2s">
                Master's in <span className="fw-700">Business Data Analytics</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row gy-3 mt-4">
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.2s">
            <p className="text-muted fw-500 mb-0">Email:</p>
            <p className="text-4 fw-600 mb-0">
              <a className="link-dark" href="mailto:chat@callum.com">
                visshrutha@gmail.com
              </a>
            </p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
            <p className="text-muted fw-500 mb-0">From:</p>
            <p className="text-4 text-dark fw-600 mb-0">Michigan, USA.</p>
          </div>
          <div className="col-6 col-lg-3 wow fadeInUp" data-wow-delay="0.4s">
            <p className="text-muted fw-500 mb-0">Currently In:</p>
            <p className="text-4 text-dark fw-600 mb-0">Ontario, Canada.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

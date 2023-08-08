import React from "react";
import videobg from "../../../videos/code_numbers.mp4";
import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";
import { scrollDuration } from "../../../config/commonConfig";

const StandardMenuVideoBgIntro = () => {
  return (
    <section id="home">
      <div className="hero-wrap">
        <div className="hero-mask opacity-9 bg-primary" />
        <div className="player hero-bg ">
          <video
            src={videobg}
            autoPlay
            muted
            loop
            style={{
              width: "100%",
              height: "100vh",
              minHeight: "100%",
              objectFit: "cover",
            }}
          ></video>
        </div>
        <div className="hero-content d-flex fullscreen-with-header">
          <div className="container my-auto py-5 py-lg-0">
            <div className="row py-4">
              <div className="col-lg-7 text-center text-lg-start align-self-center order-1 order-lg-0">
                <h1 className="text-9 fw-300 mb-0 text-uppercase">
                  Hi, I'm <span className="shadow-lg">Vi Velumani</span>, specializing in
                </h1>
                <h2 className="text-11 fw-600 text-uppercase mb-0 ms-n1">
                  <Typewriter
                    options={{
                      strings: ["Software Engineering", "Data Analytics", "Product Management"],
                      autoStart: true,
                      loop: true,
                    }}
                  />{" "}
                </h2>
                <p className="text-5">based out of Ontario, Canada.</p>
                <Link
                  className="btn btn-dark rounded-0 smooth-scroll mt-3"
                  smooth="easeInOutQuint"
                  duration={scrollDuration}
                  style={{ cursor: "pointer" }}
                  to="portfolio"
                >
                  Check Out My Work
                </Link>
                <Link
                  className="btn btn-link text-dark smooth-scroll mt-3 text-5"
                  smooth="easeInOutQuint"
                  duration={scrollDuration}
                  style={{ cursor: "pointer" }}
                  to="contact"
                >
                  Hire Me
                  <span className="text-5 ms-2">
                    <i className="far fa-arrow-alt-circle-down" />
                  </span>
                </Link>{" "}
              </div>
              <div className="col-lg-5 text-center align-self-center mb-4 mb-lg-0 order-0 order-lg-1">
                <div className="bg-transparent rounded-pill d-inline-block p-3 shadow-lg wow zoomIn">
                  {" "}
                  <img
                    className="img-fluid rounded-pill d-block"
                    src="images/vi-standing-transparent.png"
                    title="I'm Vi"
                    alt="I'm Vi"
                  />
                </div>
              </div>
            </div>
          </div>
          <Link
            className="scroll-down-arrow text-dark smooth-scroll"
            smooth="easeInOutQuint"
            duration={scrollDuration}
            style={{ cursor: "pointer" }}
            to="about"
          >
            <span className="animated">
              <i className="fas fa-arrow-down" />
            </span>
          </Link>{" "}
        </div>
      </div>
    </section>
  );
};

export default StandardMenuVideoBgIntro;

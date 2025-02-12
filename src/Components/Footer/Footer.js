import React from "react";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="line-div"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="para-content position-relative">
              <h3 className="heading large">Join the</h3>
              <h3 className="heading large"> Revolution</h3>
              <p>
                Be part of the movement that's building trust at scale. Whether
                you're securing a DePIN network or authenticating IoT devices,
                Sync layer ensures your foundation is built on trust.
              </p>
              <button className="common-button ghost text-uppercase border-0">
                Partner With Us
              </button>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-4">
            <div className="para-content no-line position-relative">
              <h3 className="heading-title">On which planet</h3>
              <ul className="ps-0 mb-0 link-listing">
                <li>
                  <a href="https://x.com/synclayerai">x.com</a>
                </li>
                {/*<li>
                  <a href="#">Linkedin</a>
                </li>
                <li>
                  <a href="#">Discord</a>
                </li>
                <li>
                  <a href="#">Youtube</a>
                </li>*/}
              </ul>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="heading-content">
              <h2 className="heading large ps-md-5 mb-0 d-flex align-items-center justify-content-center">
                SYNC LAYER
              </h2>
              <p className="mt-4 ps-4 mb-0">
                © 2025 Sync Layer Private Limited
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

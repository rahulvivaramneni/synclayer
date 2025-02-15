import React, { useEffect } from "react";
import Graphic from "../../Assets/Images/graphic-1.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Offer = () => {
  useEffect(() => {
    AOS.init();
  })
  return (
    <section className="offer-section dark-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="offer-content">
              <h2 className="heading large">
                What we <span>offer</span>
              </h2>
              <img src={Graphic} alt="Graphics" className="mt-4" data-aos="fade-top" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="para-content px-md-4 position-relative">
              <div className="inner-content" data-aos="fade-left">
                <h3>Device Validation Redefined</h3>
                <p className="mb-3">
                  Sync layer validates every device before it contributes data
                  to decentralized networks. This ensures:
                </p>
                <ul className="mb-0 ps-0">
                  <li className="d-flex">
                    <span className="me-2 d-inline-block">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2160_2716)">
                          <path
                            d="M11.25 1.5L11.654 3.29368C11.9968 4.81511 13.1849 6.00323 14.7063 6.34595L16.5 6.75L14.7063 7.15405C13.1849 7.49677 11.9968 8.68485 11.654 10.2063L11.25 12L10.846 10.2063C10.5032 8.68485 9.31515 7.49677 7.7937 7.15405L6 6.75L7.7937 6.34595C9.31507 6.00323 10.5032 4.81511 10.846 3.29369L11.25 1.5Z"
                            stroke="#CAFF4D"
                            stroke-width="1.125"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.25 9L5.53861 10.2812C5.78341 11.3679 6.63206 12.2166 7.71878 12.4614L9 12.75L7.71878 13.0386C6.63206 13.2834 5.78341 14.132 5.53861 15.2188L5.25 16.5L4.96139 15.2188C4.71659 14.132 3.86794 13.2834 2.7812 13.0386L1.5 12.75L2.7812 12.4614C3.86794 12.2166 4.71659 11.368 4.96139 10.2812L5.25 9Z"
                            stroke="#CAFF4D"
                            stroke-width="1.125"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2160_2716">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Authenticity: Only genuine devices can participate.
                  </li>
                  <li className="d-flex">
                    <span className="me-2 d-inline-block">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2160_2716)">
                          <path
                            d="M11.25 1.5L11.654 3.29368C11.9968 4.81511 13.1849 6.00323 14.7063 6.34595L16.5 6.75L14.7063 7.15405C13.1849 7.49677 11.9968 8.68485 11.654 10.2063L11.25 12L10.846 10.2063C10.5032 8.68485 9.31515 7.49677 7.7937 7.15405L6 6.75L7.7937 6.34595C9.31507 6.00323 10.5032 4.81511 10.846 3.29369L11.25 1.5Z"
                            stroke="#CAFF4D"
                            stroke-width="1.125"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.25 9L5.53861 10.2812C5.78341 11.3679 6.63206 12.2166 7.71878 12.4614L9 12.75L7.71878 13.0386C6.63206 13.2834 5.78341 14.132 5.53861 15.2188L5.25 16.5L4.96139 15.2188C4.71659 14.132 3.86794 13.2834 2.7812 13.0386L1.5 12.75L2.7812 12.4614C3.86794 12.2166 4.71659 11.368 4.96139 10.2812L5.25 9Z"
                            stroke="#CAFF4D"
                            stroke-width="1.125"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2160_2716">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Integrity: Prevents tampered or compromised devices from
                    contributing faulty data.
                  </li>
                  <li className="d-flex">
                    <span className="me-2 d-inline-block">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2160_2716)">
                          <path
                            d="M11.25 1.5L11.654 3.29368C11.9968 4.81511 13.1849 6.00323 14.7063 6.34595L16.5 6.75L14.7063 7.15405C13.1849 7.49677 11.9968 8.68485 11.654 10.2063L11.25 12L10.846 10.2063C10.5032 8.68485 9.31515 7.49677 7.7937 7.15405L6 6.75L7.7937 6.34595C9.31507 6.00323 10.5032 4.81511 10.846 3.29369L11.25 1.5Z"
                            stroke="#CAFF4D"
                            stroke-width="1.125"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M5.25 9L5.53861 10.2812C5.78341 11.3679 6.63206 12.2166 7.71878 12.4614L9 12.75L7.71878 13.0386C6.63206 13.2834 5.78341 14.132 5.53861 15.2188L5.25 16.5L4.96139 15.2188C4.71659 14.132 3.86794 13.2834 2.7812 13.0386L1.5 12.75L2.7812 12.4614C3.86794 12.2166 4.71659 11.368 4.96139 10.2812L5.25 9Z"
                            stroke="#CAFF4D"
                            stroke-width="1.125"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2160_2716">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    Seamless Trust: No disruptions, only smooth operations
                    across networks.
                  </li>
                </ul>
              </div>
              <div className="inner-content" data-aos="fade-left">
                <h3>User Centric Security</h3>
                <p className="mb-3">
                  Traditional systems rely on central authorities to establish
                  security. Sync layer changes the game by putting users and
                  their devices at the center of the trust equation. Every
                  validation is user-specific, ensuring complete control and
                  transparency.
                </p>
              </div>
              <div className="inner-content" data-aos="fade-left">
                <h3>A Scalable Solution for the Future</h3>
                <p className="mb-3">
                  Whether you're a contributor to a DePIN network or part of a
                  broader decentralized ecosystem, Sync layer ensures that your
                  data originates from verified sources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;

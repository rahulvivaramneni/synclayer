import React from "react";
import Mission2 from "../../Assets/Images/mission-2.svg";
import Mission1 from "../../Assets/Images/mission-1.svg";

const Mission = () => {
  return (
    <section className="mission-section">
      <div className="container">
        <div className="line-div"></div>
        <div className="row">
          <div className="col-lg-6">
            <div className="para-content px-lg-4 position-relative">
              <div className="mx-4">
                <span className="pointer d-flex align-items-center justify-content-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 2L15.5387 4.39157C15.9957 6.42015 17.5798 8.00431 19.6084 8.46127L22 9L19.6084 9.53873C17.5798 9.99569 15.9957 11.5798 15.5387 13.6084L15 16L14.4613 13.6084C14.0043 11.5798 12.4202 9.99569 10.3916 9.53873L8 9L10.3916 8.46127C12.4201 8.00431 14.0043 6.42015 14.4613 4.39158L15 2Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M7 12L7.38481 13.7083C7.71121 15.1572 8.84275 16.2888 10.2917 16.6152L12 17L10.2917 17.3848C8.84275 17.7112 7.71121 18.8427 7.38481 20.2917L7 22L6.61519 20.2917C6.28879 18.8427 5.15725 17.7112 3.70827 17.3848L2 17L3.70827 16.6152C5.15725 16.2888 6.28879 15.1573 6.61519 13.7083L7 12Z"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <h2 className="heading my-3">Why Sync layer?</h2>
                <p className="mb-3">
                  The world is moving towards blockchain. From centralized
                  systems to decentralized networks. From service-centric
                  security to user-centric trust.
                </p>
                <p>
                  At Sync layer, we bridge the gap, ensuring every device
                  contributing to a decentralized network is secure, authentic,
                  and reliable.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img-content px-lg-4 text-center">
              <div className="mx-lg-4 px-md-0 px-4 text-md-start text-center">
                <img src={Mission1} alt="Image2" />
              </div>
            </div>
          </div>
        </div>
        <div className="row margin-row">
          <div className="col-lg-6 order-lg-2 order-1">
            <div className="para-content px-lg-4 position-relative">
              <div className="mx-lg-4">
                <span className="pointer d-flex align-items-center justify-content-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1312 2.5C14.1462 2.17555 13.0936 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10.9548 21.8396 9.94704 21.5422 9"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.5 4.5L12 12M19.5 4.5V2M19.5 4.5H22"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
                <h2 className="heading my-3">Our Mission</h2>
                <p className="mb-2">
                  To redefine security for the decentralized age by focusing on
                  user empowerment, device integrity, and seamless
                  trust-building.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-lg-1 order-2">
            <div className="img-content px-4 text-center">
              <div className="">
                <img src={Mission2} alt="Image2" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

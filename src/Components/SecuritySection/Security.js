import React from "react";
import Graphic from "../../Assets/Images/security-img.svg";
import Graphic2 from "../../Assets/Images/security-img-2.svg";

const Security = () => {
  return (
    <section className="security-section dark-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="img-div">
              <img src={Graphic} alt="Graphic" />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="para-content">
              <h3 className="heading large">
                <span>Security</span> for a User Centric <span>Future</span>
              </h3>

              <p className="text-white">
                Sync layer aligns with the shift toward decentralization by
                prioritizing user control.
                <br /> Security isn't imposed by a central authority; it's built
                collaboratively with you.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="d-lg-block d-none img-div mt-5">
              <img src={Graphic2} alt="Graphics" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;

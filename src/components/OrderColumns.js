import React from "react";

export default function CartColumns() {
  return (
    <div className="conatiner-fluid text-center d-none d-large d-lg-block">
      <div className="row">
        <div className="col-10 mx-auto col-lg-2">
          <p className="text-uppercase badge badge-secondary text-wrap">date</p>
        </div>
        <div className="col-10 mx-auto col-lg-2 ">
          <p className="text-uppercase badge badge-secondary text-wrap">
            total payment
          </p>
        </div>
        <div className="col-10 mx-auto col-lg-8 ">
          <p className="text-uppercase badge badge-secondary text-wrap">
            product names
          </p>
        </div>
      </div>
    </div>
  );
}

import React, { Component } from "react";

export default class YourOrders extends Component {
  render() {
    const { id, total_price, date } = this.props.order;
    let theDate = new Date(date);
    let dateString = theDate.toDateString();

    return (
      <div className="row my-2 text-capitilaize text-center">
        <div className="col-10 mx-auto col-lg-2 border border-dark">
          <span className="d-lg-none">Delivered : </span>
          {dateString} <i className="far fa-calendar-alt"></i>
        </div>
        <div className="col-10 mx-auto col-lg-2 border border-info">
          <span className="d-lg-none">total payment : </span>
          {total_price.toFixed(2)} <i className="fas fa-dollar-sign"></i>
        </div>
        <div className="col-10 mx-auto col-lg-2 border border-dark">
          <span className="d-lg-none">Products : </span>
          deliciuos cheese <i className="fas fa-cheese"></i>
        </div>
      </div>
    );
  }
}

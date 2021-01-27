import React, { Component } from "react";

export default class YourOrders extends Component {
  render() {
    const { total_price, date, order_items } = this.props.order;

    let theDate = new Date(date);
    let dateString = theDate.toDateString();

    let products = order_items.map((product) => product.product);
    let productTitle = products.map((product) => product.title);

    //console.log(productTitle);
    //console.log(id, title);

    return (
      <div className="row my-2 text-capitalize text-center">
        <div className="col-10 mx-auto col-lg-2  ">
          <span className="d-lg-none">Date : </span>
          <div className="border border-dark">
            {dateString} <i className="far fa-calendar-alt" />
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-2  ">
          <span className="d-lg-none">total payment : </span>
          <div className="badge badge-dark text-wrap">
            <i className="fas fa-dollar-sign" /> {total_price.toFixed(2)}
          </div>
        </div>
        <div className="col-10 mx-auto col-lg-8 border border-dark">
          <span className="d-lg-none">Product Names : </span>
          {productTitle.map((title, index) => (
            <span key={index}>
              <i className="fas fa-cheese" /> {title}
            </span>
          ))}
        </div>
      </div>
    );
  }
}

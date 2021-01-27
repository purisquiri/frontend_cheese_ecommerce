import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            image,
            description,
            price,
            title,
            in_cart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={image} className="img-fluid" alt="cheese" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  {/* <h2>quantity Available: {quantity}</h2> */}
                  <h4 className="text-capitalize text-muted mt-3 mb-2">
                    (1.30lb aprox per piece on-line )
                  </h4>
                  <h4 className="text-blue">
                    price : <span>$</span>
                    {price.toFixed(2)}
                  </h4>
                  <p className="text-capitalize text-muted font-weight-bold mt-3 mb-0">
                    descripion:
                  </p>
                  <p className="text-muted lead">{description}</p>
                  <div>
                    <Link to="/home">
                      <ButtonContainer>back to products</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      cart
                      disabled={in_cart ? true : false}
                      onClick={() => value.addToCart(id)}
                    >
                      {in_cart ? "in Cart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
        {/* {(value) => console.log(value.detailProduct)} */}
      </ProductConsumer>
    );
  }
}

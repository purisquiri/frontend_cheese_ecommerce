import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
// import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, image, price, in_cart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {(value) => (
              <div
                className="img-container p-5"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img src={image} alt="cheese" className="card-img-top" />
                </Link>
                <button
                  className="cart-btn"
                  disabled={in_cart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                  }}
                >
                  {in_cart ? (
                    <p className="text-capitalize mb=0" disabled>
                      in Cart
                    </p>
                  ) : (
                    <i className="fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>
          {/* card footer */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center text-blue mb-0">{title}</p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">$</span>
              {price.toFixed(2)}
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

// validations for props

// Product.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number,
//     img: PropTypes.string,
//     title: PropTypes.string,
//     price: PropTypes.string,
//     in_cart: PropTypes.bool,
//   }).isRequired,
// };

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
    border-radius: 0.8rem;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rbga(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.1);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0rem 0.2rem;
    background: var(--lightOrange);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    //transform: translate(100%, 100%);
    //transition: all 0.5s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainOrange);
    cursor: pointer;
  }
`;

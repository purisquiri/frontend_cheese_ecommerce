import React from "react";
//import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";
const userId = localStorage.getItem("user_id");
const token = localStorage.getItem("token");

export default function CartTotals({ value, history, orderSumary }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart, cart } = value;

  const saveOrder = () => {
    fetch("http://localhost:3000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user_id: userId,
        total_price: cartTotal,
        order_items: cart.map((item) => {
          return { product_id: item.id, count: item.count };
        }),
      }),
    });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            {/* <Link to="/home"> */}
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              type="button"
              onClick={() => clearCart()}
            >
              clear cart
            </button>
            {/* </Link> */}
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>$ {cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
              saveOrder={saveOrder}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

import React, { Component } from "react";
import YourOrders from "./YourOrders";
import OrderColumns from "./OrderColumns";
import Title from "./Title";

const token = localStorage.getItem("token");
const userId = localStorage.getItem("user_id");
const username = localStorage.getItem("username");

export default class UserOrders extends Component {
  constructor() {
    super();
    this.state = {
      pastOrders: [],
    };
  }

  componentDidMount() {
    if (token) {
      fetch(`http://localhost:3000/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.orders.map((order) =>
            this.setState({
              pastOrders: [...this.state.pastOrders, order],
            })
          );
        });
    }
  }

  render() {
    return (
      <div>
        <br />
        <br />

        <Title name={username} title="Past Orders" />

        {this.state.pastOrders.length > 0 ? (
          <OrderColumns />
        ) : (
          <div className="text-center text-title">
            Login or create an account
          </div>
        )}

        {this.state.pastOrders.map((order) => {
          return <YourOrders key={order.id} order={order} />;
        })}
      </div>
    );
  }
}

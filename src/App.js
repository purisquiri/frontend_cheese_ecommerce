import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import SignIn from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

export default class App extends Component {
  // state = {
  //   orderSumary: "",
  // };

  handleUser = (userData) => {
    localStorage.setItem("user_id", userData.id);
    localStorage.setItem("username", userData.name);
  };
  // orderSumary = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   this.setState({ orderSumary: e });
  //   console.log(this.state.orderSumary);
  // };

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          {/* <Route
            path="/cart"
            component={(props) => (
              <Cart {...props} orderSumary={this.orderSumary} />
            )}
          /> */}
          <Route
            path="/signup"
            component={(props) => (
              <SignUp {...props} handleUser={this.handleUser} />
            )}
          />
          <Route
            path="/login"
            component={(props) => (
              <SignIn {...props} handleUser={this.handleUser} />
            )}
          />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

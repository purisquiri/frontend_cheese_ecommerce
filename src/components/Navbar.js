import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import Logout from "../components/Logout";

//const username = localStorage.getItem("username");

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      logout: false,
      username: localStorage.getItem("username"),
    };
  }

  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/home">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/home" className="nav-link">
              go to store
            </Link>
          </li>
          {/* <li className="nav-item ml-5">Welcome: {username}</li> */}
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-1">
              {this.state.username} cart
              <i className="fas fa-cart-plus" />
            </span>
          </ButtonContainer>
        </Link>
        <Link to="/signup" className="ml-auto">
          <ButtonContainer>
            <span className="mr-1">
              SignUp
              <i className="fas fa-user-plus" />
            </span>
          </ButtonContainer>
        </Link>
        <Link to="/home" className="ml-auto">
          <ButtonContainer onClick={() => this.setState({ logout: true })}>
            <span className="mr-1">
              Logout
              <i className="fas fa-sign-out-alt" />
            </span>
          </ButtonContainer>
        </Link>
        {this.state.logout === true ? <Logout /> : null}
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  box-shadow: 2px 2px 4px #000000;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
`;

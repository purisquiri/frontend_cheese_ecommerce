import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import Logout from "../components/Logout";

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
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 fixed-top">
        <Link to="/home">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        {/* <ul className="navbar-nav align-items-center"> */}
        {/* <li className="nav-item ml-5"> */}
        <Link to="/home" className="nav-link">
          <ButtonContainer>
            <span className="mr-1">
              store
              <i className="fas fa-store"></i>
            </span>
          </ButtonContainer>
        </Link>
        {/* </li> */}
        {/* <li className="nav-item ml-5"> */}
        <Link to="/user" className="ml-auto">
          <ButtonContainer>
            <span className="mr-1">
              History
              <i className="fas fa-user-tie" />
            </span>
          </ButtonContainer>
        </Link>
        {/* </li> */}
        {/* <li className="nav-item ml-5"> */}
        <Link to="/cart" className="nav-link">
          <ButtonContainer>
            <span className="mr-1">
              cart
              {/* cart */}
              <i className="fas fa-cart-plus" />
            </span>
          </ButtonContainer>
        </Link>
        {/* </li> */}
        {/* </ul> */}

        <Link to="/signup" className="ml-auto">
          <ButtonContainer>
            <span className="mr-1">
              SignUp
              <i className="fas fa-user-plus" />
            </span>
          </ButtonContainer>
        </Link>

        <Link to="/home" className="nav-link">
          <ButtonContainer onClick={() => this.setState({ logout: true })}>
            <span className="mr-1">
              Logout
              <i className="fas fa-sign-out-alt" />
            </span>
          </ButtonContainer>
        </Link>

        <div className="nav-item ml-5 text-title">
          {this.state.username ? (
            <div>Welcome {this.state.username}</div>
          ) : null}
        </div>
        {this.state.logout === true ? <Logout /> : null}
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  box-shadow: 2px 2px 4px #000000;
  .nav-link {
    // color: var(--mainWhite) !important;
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  .navbar-brand {
    transition: all 0.5s linear;
  }
  .navbar-brand:hover {
    transform: scale(1.1);
  }
`;

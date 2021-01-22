import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { useHistory } from "react-router-dom";

export default function SignUp({ handleUser }) {
  const [name, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log(event, name, password);

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          name,
          password,
        },
      }),
    })
      .then((resp) => resp.json())

      .then((data) => {
        //console.log(data);
        localStorage.setItem("token", data.jwt);

        if (data.user !== undefined) {
          handleUser(data.user);
          history.push("/home");
          window.location.reload();
        } else {
          alert("Incorrect credentials");
        }
      });
    setUsername("");
    setPassword("");
  };

  return (
    <form className="container py-5" onSubmit={(event) => handleSubmit(event)}>
      <div className="ol-10 mx-auto text-center col-md-6 my-3">
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="User name"
            value={name}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        {/* <Link to="/"> */}
        <ButtonContainer>Sign in</ButtonContainer>
        {/* </Link> */}

        {/* <p className="forgot-password text-right">
            Already registered <a href="#">sign in?</a>
          </p> */}
      </div>
    </form>
  );
}

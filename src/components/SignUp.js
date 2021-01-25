import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import { useHistory } from "react-router-dom";

export default function SignUp({ handleUser }) {
  const [name, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event, name, email, password);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          name,
          email,
          password,
        },
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) throw data.errors;
        else return data;
      })
      .then((data) => {
        // console.log(data);
        localStorage.setItem("token", data.jwt);

        if (data.user) {
          handleUser(data.user);
          history.push("/home");
          window.location.reload();
        } else {
          alert("Please fill in empty fields");
        }
      })
      .catch((errors) => {
        setErrors(errors);
        console.error(errors);
      });
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
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
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
        <ButtonContainer>Create Account</ButtonContainer>
        {/* </Link> */}

        <p className="forgot-password text-right">
          Already registered <a href="/login">sign in?</a>
        </p>
      </div>
    </form>
  );
}

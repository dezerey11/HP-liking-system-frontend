import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalCtx } from "../App";
import axios from "axios";
import "./login.css";

const Login = () => {
  const { gState, setGState } = useContext(GlobalCtx);
  const { url } = gState;
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, password } = form;

    try {
      const response = await axios.post(
        `${url}auth/login`,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      window.localStorage.setItem("token", JSON.stringify(response.data));
      setGState({ ...gState, token: response.data.token });
      navigate("/");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="login">
      <h1 className="title">Log In</h1>
      <br />
      {error && <h4 className="error">Incorrect Username or Password</h4>}
      <form onSubmit={handleSubmit}>
        <h3>Username</h3>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
        />
        <h3>Password</h3>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <br />
        <br />

        <input type="submit" value="Log In" className="button" />
      </form>
      <br />
      <Link to="/signup">
        <button role="link" className="button">
          Sign Up
        </button>
      </Link>
    </div>
  );
};

export default Login;

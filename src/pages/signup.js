import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalCtx } from "../App";
import axios from "axios";
import "./signup.css";

const Signup = () => {
  const { gState } = useContext(GlobalCtx);
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
      await axios.post(
        `${url}auth/signup`,
        { username, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigate("/login");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="signup">
      <h1 className="title">Sign Up</h1>
      <br />
      {error && <h4 className="error">Something went wrong. Try again.</h4>}
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

        <input type="submit" name="signup" value="Sign Up" className="button" />
      </form>
      <br />
      <Link to="/login">
        <button role="link" className="button">
          Return to Log In
        </button>
      </Link>
    </div>
  );
};

export default Signup;

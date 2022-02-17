import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { GlobalCtx } from "../App";

const Header = () => {
  const { gState } = React.useContext(GlobalCtx);

  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  };

  if (gState.token) {
    return (
      <div>
        <div className="header">
          <Link to="/" className="home-link">
            <img
              src="https://www.freeiconspng.com/thumbs/harry-potter-logo/harry-potter-logo-transparent-1.png"
              className="hp-logo"
              alt="hp-logo"
            />
          </Link>
          <Link to="/" onClick={logout} className="header-link">
            <h2>Log Out</h2>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="header">
        <Link to="/" className="home-link">
          <img
            src="https://www.freeiconspng.com/thumbs/harry-potter-logo/harry-potter-logo-transparent-1.png"
            className="hp-logo"
            alt="hp-logo"
          />
        </Link>
        <Link to="/login" className="header-link">
          <h2>Log In</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;

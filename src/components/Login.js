import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div>
        <label>Name:</label>
        <input />
      </div>
      <div>
        <label>Password:</label>
        <input />
      </div>
      <div className="button-container">
        <button className="cancel">Cancel</button>
        <button className="submit">Login</button>
      </div>
    </div>
  );
};

export default Login;

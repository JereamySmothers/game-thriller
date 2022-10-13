import "../components/css/login.css";

import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Please Login to continue</h1>
        <label for="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required />
        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Login;

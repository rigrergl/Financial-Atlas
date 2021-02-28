import React from "react";
import "../styles/login.css";

const Login = () => {
  return (
    <div>
      <div className="main">
        <form action="#">
          <fieldset>
            <legend>Welcome</legend>
            <label>
              First Name
              <input className="input" type="text" />
            </label>
            <label>
              Last Name
              <input className="input" type="text" />
            </label>
            <br />
            <button className="button" >Submit</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;

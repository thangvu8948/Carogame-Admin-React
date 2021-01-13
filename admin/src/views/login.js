import React, { useState } from "react";
import "../assets/login.css";
import AccountService from "../services/account.service";
import $ from "jquery";
const SERVER_HOST = "http://localhost:1337/";
export default function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // function validateForm() {
  //     return email.length > 0 && password.length > 0;
  // }
  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmitLogin = async (event) => {
    event.preventDefault();
    const res = await AccountService.login(userName, password);
    if (Boolean(res.token)) {
      const tokens = res.token.split(".");
      const data = JSON.parse(atob(tokens[1]));
      if (data.RoleID == 1) {
        window.location.href = "/";
      } else {
        //đẩy qua user
        alert("Redirect to user");
      }
    }
    if (Boolean(res.IsVeryfied)) {
      window.location.href = `/notify/${res.IsVeryfied}`;
    }
  };
  const handleSubmitRegister = async (event) => {
    event.preventDefault();
    var data = {};
    $("#signupform")
      .serializeArray()
      .map(function (x) {
        data[x.name] = x.value;
      });
    console.log(data);
    const res = await AccountService.register(data);
    if (res) {
      alert("Sign Up Successfull");
      window.location.href = `/notify/${res}`;
    } else {
      alert("Sign Up Failed. Please try with different name");
    }
  };
  return (
    <div className="row">
      <div className="col-md-6 mx-auto p-0" style={{display:"block"}}>
        <div className="card" style={{display:"block", margin:"0 auto", left:"0", marginTop:"30px"}}>
          <div className="login-box">
            <div className="login-snip">
              <input
                id="tab-1"
                type="radio"
                name="tab"
                className="sign-in"
                checked
              />
              <label for="tab-1" className="tab">
                Login
              </label>
              <input id="tab-2" type="radio" name="tab" className="sign-up" />
              <label for="tab-2" className="tab">
              </label>
              <div className="login-space">
                <form onSubmit={handleSubmitLogin}>
                  <div className="login">
                    <div className="group">
                      <label for="user" className="label">
                        Username
                      </label>
                      <input
                        id="user"
                        onChange={handleUserNameChange}
                        type="text"
                        className="input"
                        placeholder="Enter your username"
                      />
                    </div>
                    <div className="group">
                      <label for="pass" className="label">
                        Password
                      </label>
                      <input
                        id="pass"
                        onChange={handlePasswordChange}
                        type="password"
                        className="input"
                        data-type="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    {/* <div className="group">
                                        <input id="check" type="checkbox" className="check"  />
                                        <label for="check">
                                            <span className="icon"></span>
                                                
                                                </label>
                                    </div> */}
                    <div className="group">
                      <input type="submit" className="button" value="Sign In" />
                    </div>
                  </div>
                </form>
                
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

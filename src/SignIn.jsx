import React from "react";
import { Link } from "react-router-dom";
import Icons from "./component/icon/index";
import { Input, Form } from "antd";

const SignIn = () => {
  return (
    <div className="sign-in-layout">
      <div className="sign-in-left-container">
        <div className="greetings-container">
          <h1 className="sign-in-header">Welcome Back!</h1>
          <br />
          <p className="sign-in-information">
            To keep connected with us please login with your personal info
          </p>
        </div>

        <Icons />
      </div>

      <div className="sign-in-right-container">
        <div className="sign-in-right-wrapper">
          <h1 className="sign-in-right-header">Sign In</h1>
          <Form>
            <div className="input-container">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please input your email.",
                  },
                  {
                    type: "email",
                    message: "The input is not valid E-mail.",
                  },
                ]}
              >
                <Input type="email" />
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>

            <div className="icon-phone">
              <Icons />
            </div>

            <div className="form-button-container">
              <button className="sign-in-button">Sign In</button>
            </div>
          </Form>
        </div>

        <Link to="/CreateAccount" className="sign-up-link">
          <p className="sign-up-button">Creat a New Account</p>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;

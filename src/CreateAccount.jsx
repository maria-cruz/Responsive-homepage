// import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Input, Form } from "antd";
// import { useAuth } from "./contexts/index";
const CreateAccount = () => {
  const handleSubmitForm = () => {
    alert("Done!");
  };
  // const handleSubmitForm = (e) => {
  //   e.preventDefault();
  //   signup(
  //     firstName.current.value,
  //     lastname.current.value,
  //     password.current.value,
  //     email.current.value
  //   );
  // };
  // const firstName = useRef();
  // const lastname = useRef();
  // const password = useRef();
  // const email = useRef();
  // const { signup } = useAuth();
  return (
    <div className="create-account-layout">
      <div className="create-account-left-container"></div>
      <div className="create-account-right-container">
        <div className="right-container-wrapper">
          <h1 className="right-container-header">Sign Up</h1>
          <Form onFinish={handleSubmitForm}>
            <div className="input-container">
              <Form.Item
                label="First name"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name.",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Last name"
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name.",
                  },
                ]}
              >
                <Input />
              </Form.Item>
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
                <Input.Password />
              </Form.Item>
            </div>

            <div className="create-account-button-container">
              <Link to="/">
                <button className="back-button">Cancel</button>
              </Link>
              <button htmlType="submit" className="sign-up-button">
                Sign Up
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;

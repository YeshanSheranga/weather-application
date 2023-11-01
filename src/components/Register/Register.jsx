import React from "react";
import "./Register.css";
import { useFormik } from "formik";
import {Link} from 'react-router-dom'

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password:"",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="container-reg">
      {/* <div className="weather-title">
        <h2>Weather Analyzer</h2>
      </div> */}
      <div className="sub-container-reg">
        <div className="sub-left"></div>
        <div className="sub-right">
          <form onSubmit={formik.handleSubmit}>
            <div className="reg-title">
              <h2>Register</h2>
            </div>
            <div className="user username">
              <input
                id="username"
                name="username"
                type="text"
                placeholder="username"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </div>

            <div className="user user-email">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className="user user-password">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>

            <button type="submit" className="btn">
              Register
            </button>
            <div className="account">
              <p>
                Do you have an account{" "}
                <Link to="/login">
                  <p>Login</p>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

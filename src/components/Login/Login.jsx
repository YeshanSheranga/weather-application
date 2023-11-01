import React from 'react'
import './Login.css'
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log("Values",values);
        alert(JSON.stringify(values, null, 2));
        if(values.email ==="yeshan2022@gmail.com" && values.password ==="12345"){
          localStorage.setItem("loggedIn", "true");
          navigate("/home");
        }else{
          alert("Something Went Wrong Please Try Again!!")
        }
      },
    });
  return (
    <div className="login">
      <div className="login-container">
        <form onSubmit={formik.handleSubmit}>
          <div className="reg-title">
            <h2>Login</h2>
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login
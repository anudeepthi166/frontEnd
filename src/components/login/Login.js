import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../slice/loginSlice";
import { useState, useEffect } from "react";

function Login() {
  //state
  let { userObj, loginStatus, errorMessage } = useSelector(
    (state) => state.login
  );
  let navigate = useNavigate();
  let dispatch = useDispatch();
  //formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(userLogin(values));
    },
  });
  //useEffect
  useEffect(() => {
    //check loginstatus
    if (loginStatus == "idle") {
      navigate("/login");
    }
    if (loginStatus === "success") {
      //navigate based on role
      console.log(userObj);
      if (userObj.roleId === 1) {
        navigate("/admin");
      }
      if (userObj.roleId === 2) {
        navigate("/user");
      }
    }
  });
  return (
    <div className="row">
      <div className="container mt-5">
        <div className="card text-center shadow p-3 m-3 mt-5 w-75 mx-auto my-auto">
          <div className="card-body">
            <div>Login</div>
            {/* form */}
            <form onSubmit={formik.handleSubmit}>
              {/* email */}
              <div className="mt-2">
                <label htmlFor="email">Email</label>
                <input id="email" type="text" onChange={formik.handleChange} />
              </div>
              {/* password */}
              <div className="mt-2">
                <label htmlFor="email">Password</label>
                <input
                  id="password"
                  type="password"
                  onChange={formik.handleChange}
                />
              </div>
              {/* login button */}
              <div className="mt-2">
                <button
                  type="submit"
                  className="btn btn-outline-success me-3 float-end"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

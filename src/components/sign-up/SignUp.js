import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function SignUp() {
  // navigate
  let navigate = useNavigate();
  //formik
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log("Form Values", values);
      //setting role
      values.roleId = 2;
      //make api request
      let response = await axios.post(
        "http://localhost:5000/user/sign-up",
        values
      );
      //on successfull registration
      if (response.status === 201) {
        navigate("/login");
      }
    },
  });
  return (
    <div className="row">
      <div className="container mt-5">
        <div className="card text-center shadow p-3 m-3 mt-5 w-75 mx-auto my-auto">
          <div className="card-body">
            <div>Sign Up</div>
            {/* form */}
            <form onSubmit={formik.handleSubmit}>
              {/* userName */}
              <div className="mt-2">
                <label htmlFor="userName">User anem</label>
                <input
                  id="userName"
                  type="text"
                  onChange={formik.handleChange}
                />
              </div>
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
              {/* sign up button */}
              <div className="mt-2">
                <button
                  type="submit"
                  className="btn btn-outline-success me-3 float-end"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

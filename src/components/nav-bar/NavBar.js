import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function NavBar() {
  //navigate
  let navigate = useNavigate();
  return (
    <div className="mb-3 navigation-bar">
      <div className="container">
        <ul className="nav justify-content-end">
          {/* sign up */}
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link nav-bar" : "inactive nav-link"
              }
              to="/sign-up"
            >
              Sign Up
            </NavLink>
          </li>
          {/* login */}
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive ? "active nav-link nav-bar" : "inactive nav-link"
              }
              to="/login"
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>

      {/* <button onClick={() => navigate("/sign-up")}>Sign Up</button>
      <button onClick={() => navigate("/login")}>Login</button> */}
    </div>
  );
}

export default NavBar;

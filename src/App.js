import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import components
import Login from "./components/login/Login";
import SignUp from "./components/sign-up/SignUp";
import RootLayout from "./components/root-layout/RootLayout";
import Admin from "./components/admin/Admin";
import User from "./components/user/User";

function App() {
  const browserRouterObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "/sign-up",
          element: <SignUp />,
        },
        {
          path: "/admin",
          element: <Admin />,
        },
        {
          path: "/user",
          element: <User />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={browserRouterObj} />
    </div>
  );
}

export default App;

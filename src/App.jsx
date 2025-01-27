import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./App.css";
import Signup from "./Components/SignUp";
import AuthProvider from "./context/AuthProvider";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />
    }
  ]);

  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;

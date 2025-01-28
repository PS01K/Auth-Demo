import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Layout() {
  const authCtx = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Unauthenticated user (User has not logged in)
  //   if (Object.keys(authCtx.currentUser).length === 0) {
  //     navigate("/login");
  //   }
  // }, []);
  
  // if (Object.keys(authCtx.currentUser).length === 0) {
  //   return <h2>Loading...</h2>;
  // }

  if (Object.keys(authCtx.currentUser).length === 0) {
    return <Navigate to="/login" />;
  }
  
  return (
    <>
      <h2>Header</h2>
      <Outlet />
      <h2>Footer</h2>
    </>
  );
}

export default Layout;

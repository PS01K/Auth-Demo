import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";

function Dashboard() {
  const authCtx = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(authCtx.currentUser).length === 0) {
      navigate("/");
    }
  }, []);
  
  if (Object.keys(authCtx.currentUser).length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>Dashboard Screen</h2>
    </>
  );
}

export default Dashboard;

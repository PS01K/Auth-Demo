import { useAuth } from "../context/AuthProvider";

function Dashboard() {
  const authCtx = useAuth();

  async function onLogout() {
    try {
      await authCtx.logout();
      authCtx.setCurrentUser({});
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Dashboard Screen</h1>
      <button onClick={onLogout}>Logout</button>
    </>
  );
}

export default Dashboard;

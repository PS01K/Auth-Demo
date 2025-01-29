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

  function upload() {
    const file = document.querySelector("#fileInput").files[0];
    if (!file) return alert("Please select a file!");
    console.log(file);
  }

  return (
    <div className="dashboard">
      <h1>Dashboard Screen</h1>
      <input type="file" id="fileInput" accept="image/*,application/pdf" />
      <button onClick={upload}>Upload</button>
      <br />
      <button
        onClick={onLogout}
        className="bg-black text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-300"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;

import { useState } from "react";
import HierarchyTreePage from "@/pages/HierarchyTreePage/HierarchyTreePage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import { ToastContainer } from "react-toastify";

function App() {
  const [userId, setUserId] = useState<number | null>(null);

  return (
    <div className="font-inter">
      {!userId ? (
        <LoginPage setUser={setUserId} />
      ) : (
        <HierarchyTreePage userId={userId} setUser={setUserId} />
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;

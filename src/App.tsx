import { useState } from "react";
import HierarchyTreePage from "@/pages/HierarchyTreePage/HierarchyTreePage";
import LoginPage from "@/pages/LoginPage/LoginPage";

function App() {
  const [userId, setUserId] = useState<number | null>(null);

  return (
    <div className="font-inter">
      {!userId ? (
        <LoginPage setUser={setUserId} />
      ) : (
        <HierarchyTreePage userId={userId} setUser={setUserId} />
      )}
    </div>
  );
}

export default App;

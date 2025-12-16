import { useState } from "react";
import HierarchyTreePage from "./components/HierarchyTreePage";
import LoginPage from "./components/LoginPage";

function App() {
  const [user, setUser] = useState<string | null>(null);

  return (
    <div className="font-inter ">
      {!user ? (
        <LoginPage setUser={setUser} />
      ) : (
        <>
          <HierarchyTreePage userId={user} setUser={setUser} />
        </>
      )}
    </div>
  );
}

export default App;

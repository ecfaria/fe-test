import { useState } from "react";
import HierarchyTreePage from "./components/HierarchyTreePage";
import LoginPage from "./components/LoginPage";

function App() {
  const [user, setUser] = useState<string | null>(null);

  return (
    <div className="p-4">
      {!user ? (
        <LoginPage setUser={setUser} />
      ) : (
        <>
          <div className="text-3xl font-inter text-primary">
            Hierarchy Tree test
          </div>
          <HierarchyTreePage />
        </>
      )}
    </div>
  );
}

export default App;

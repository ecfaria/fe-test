import useFetchData from "../hooks/useFetchData";
import TreeNode from "./TreeNode";
import { buildOrgTree } from "../utils/buildOrgTree";

function LogoutButton({ handleLogout }: { handleLogout: () => void }) {
  return (
    <button className="text-red-500 underline" onClick={handleLogout}>
      Logout
    </button>
  );
}

function HierarchyTreePage({ userId, setUser }: { userId: number }) {
  const { users } = useFetchData();

  const currentUser = users?.find((user) => user.id === userId);

  const orgTree = users ? buildOrgTree(users) : [];

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-primary/10">
        <h1 className="text-3xl text-primary ">Hierarchy Tree test</h1>
        {currentUser && (
          <span>
            {`${currentUser.firstName} ${currentUser.lastName}`}{" "}
            <LogoutButton handleLogout={() => setUser(null)} />
          </span>
        )}
      </div>
      <div className="p-4">
        <TreeNode users={orgTree} />
      </div>
    </>
  );
}

export default HierarchyTreePage;

import useFetchData from "@/hooks/useFetchData";
import TreeNode from "./TreeRoot";
import { buildOrgTree } from "@/utils/buildOrgTree";

function LogoutButton({ handleLogout }: { handleLogout: () => void }) {
  return (
    <button className="text-red-500 underline" onClick={handleLogout}>
      Logout
    </button>
  );
}

function HierarchyTreePage({
  userId,
  setUser,
}: {
  userId: number;
  setUser: (userId: number | null) => void;
}) {
  const { users, isLoading } = useFetchData();

  const currentUser = users?.find((user) => user.id === userId);

  const orgTree = users ? buildOrgTree(users) : [];

  return (
    <>
      <header className="flex justify-between items-center p-4 bg-primary/10">
        <h1 className="text-2xl md:text-3xl text-primary ">Hierarchy Tree</h1>
        {currentUser && (
          <span>
            {`${currentUser.firstName} ${currentUser.lastName}`}{" "}
            <LogoutButton handleLogout={() => setUser(null)} />
          </span>
        )}
      </header>

      <main className="p-4">
        {isLoading ? "Loading..." : <TreeNode users={orgTree} />}
      </main>
    </>
  );
}

export default HierarchyTreePage;

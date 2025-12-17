import type { User } from "@/hooks/useFetchData";
import UserNode from "./UserNode";

function TreeNode({ users }: { users: User[] }) {
  return (
    <ul className="ml-2 md:ml-4 border-l pl-2 md:pl-4 mb-4 border-neutral-200">
      {users?.map((user) => (
        <UserNode key={user.id} user={user} />
      ))}
    </ul>
  );
}
export default TreeNode;

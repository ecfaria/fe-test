import { useState } from "react";
import UserAvatar from "@/components/UserAvatar";
import TreeNode from "./TreeRoot";
import type { User } from "@/hooks/useFetchData";

function UserNode({ user }: { user: User & { reports: User[] } }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasReports = user.reports?.length > 0;

  const handleToggle = () => {
    if (hasReports) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <li key={user.id}>
      <div
        className="flex items-center mb-2 gap-2 cursor-pointer hover:bg-primary/10 p-2 rounded transition-all"
        onClick={handleToggle}
      >
        {
          <span className="font-extrabold text-2xl text-primary w-6">
            {user.reports.length > 0 ? "+" : "-"}
          </span>
        }
        <UserAvatar
          firstName={user.firstName}
          lastName={user.lastName}
          photo={user.photo}
        />
        <h2 className="text-lg font-semibold text-neutral-600">
          {user.firstName} {user.lastName}
        </h2>
        <p className="text-neutral-400">{user.email}</p>
      </div>
      {isExpanded && user.reports && <TreeNode users={user.reports} />}
    </li>
  );
}

export default UserNode;

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
    <li key={user.id} className="hover:bg-primary/10 rounded transition-all">
      <div
        className="flex items-center mb-2 md:mb-0 gap-1 md:gap-2 cursor-pointer  md:p-2"
        onClick={handleToggle}
      >
        <span className="font-extrabold text-2xl text-primary w-6">
          {user.reports.length > 0 ? "+" : "-"}
        </span>
        <UserAvatar
          firstName={user.firstName}
          lastName={user.lastName}
          photo={user.photo}
        />
        <div className="flex flex-col md:flex-row md:gap-2 md:items-center min-w-0">
          <h2 className="md:text-lg font-semibold text-neutral-600">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-neutral-400 text-sm md:text-base overflow-hidden text-ellipsis whitespace-nowrap">
            {user.email}
          </p>
        </div>
      </div>
      {isExpanded && user.reports && <TreeNode users={user.reports} />}
    </li>
  );
}

export default UserNode;

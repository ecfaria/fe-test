import { useState } from "react";

export interface User {
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  managerId?: number;
  password: string;
  photo?: string;
}

function UserAvatar({
  firstName,
  lastName,
  photo,
}: {
  firstName: string;
  lastName: string;
  photo?: string;
}) {
  const [imageError, setImageError] = useState(false);

  if (!photo || imageError) {
    return (
      <div className="w-14 h-14 rounded-full mr-2 border-2 border-primary bg-primary flex items-center justify-center text-white">
        {`${firstName.charAt(0)}${lastName.charAt(0)}`}
      </div>
    );
  }

  return (
    <img
      src={photo}
      alt={`${firstName} ${lastName}`}
      className="w-14 h-14 rounded-full mr-2 border-2 border-primary object-cover"
      onError={() => setImageError(true)}
    />
  );
}

function TreeNode({ users }: { users?: User[] }) {
  const [isExpanded, setIsExpanded] = useState();

  return (
    <ul className="ml-4 border-l pl-4 mb-4">
      {users?.map((user) => (
        <li key={user.id}>
          <div className="flex items-center mb-2 gap-2">
            <UserAvatar
              firstName={user.firstName}
              lastName={user.lastName}
              photo={user.photo}
            />
            <h2 className="text-lg font-semibold">
              {user.firstName} {user.lastName}
            </h2>
            <p>{user.email}</p>
          </div>
          {user.reports && user.reports.length > 0 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mb-2 text-sm text-blue-500"
            >
              {isExpanded ? "Collapse" : "Expand"} Reports (
              {user.reports.length})
            </button>
          )}
          {isExpanded && user.reports && <TreeNode users={user.reports} />}
        </li>
      ))}
    </ul>
  );
}
export default TreeNode;

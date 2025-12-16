import { useEffect, useState } from "react";
import TreeNode, { type User } from "./TreeNode";

function buildOrgTree(users: User[]) {
  const userListById: { [key: string]: User & { reports: User[] } } = {};
  const roots = [];

  for (const user of users) {
    userListById[user.id] = { ...user, reports: [] };
  }

  for (const user of users) {
    if (!user.managerId) {
      roots.push(userListById[user.id]);
      continue;
    }

    userListById[user.managerId].reports.push(userListById[user.id]);
  }

  return roots;
}

function App() {
  const [data, setData] = useState<{ users?: User[] }>({});

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("https://gongfetest.firebaseio.com/.json");
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);

  const orgTree = buildOrgTree(data.users || []);

  return (
    <div className="p-4">
      <div className="text-3xl font-inter text-primary">
        Hierarchy Tree test
      </div>
      {data.users && <TreeNode users={orgTree} />}
    </div>
  );
}

export default App;

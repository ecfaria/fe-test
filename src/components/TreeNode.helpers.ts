import type { User } from "../hooks/useFetchData";

type OrgUser = User & { reports: OrgUser[] };

export function buildOrgTree(users: User[]): OrgUser[] {
  const userListById: { [key: string]: OrgUser } = {};
  const roots: OrgUser[] = [];

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

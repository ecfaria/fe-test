import useFetchData from "../hooks/useFetchData";
import TreeNode from "./TreeNode";
import { buildOrgTree } from "./TreeNode.helpers";

function HierarchyTreePage() {
  const data = useFetchData();

  console.log(data);

  const orgTree = data.users ? buildOrgTree(data.users) : [];

  return <TreeNode users={orgTree} />;
}

export default HierarchyTreePage;

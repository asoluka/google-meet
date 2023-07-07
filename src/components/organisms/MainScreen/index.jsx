import { ActionPane } from "../../organisms/ActionPane";
import { UserGrid } from "../../organisms/UserGrid";

const users = [
  { id: 1, name: "Austin" },
  { id: 2, name: "Taddy" },
  { id: 3, name: "David" },
  { id: 4, name: "Peculiar" },
  { id: 5, name: "Jeff" },
  { id: 6, name: "Tsola" },
];

export const MainScreen = ({ isActionPaneOpen, setOpenActionPane }) => {
  return (
    <div className="main-screen">
      <UserGrid users={users} />
      <ActionPane {...{ isActionPaneOpen, setOpenActionPane }} />
    </div>
  );
};

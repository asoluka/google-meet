import { ToolBar } from "./components/organisms/ToolBar";
import { UserGrid } from "./components/organisms/UserGrid";

const users = [
  { id: 1, name: "Austin" },
  { id: 2, name: "Taddy" },
  { id: 3, name: "David" },
  { id: 4, name: "Peculiar" },
  { id: 5, name: "Jeff" },
  { id: 6, name: "Tsola" },
];

function App() {
  return (
    <div>
      <UserGrid users={users} />
      <ToolBar />
    </div>
  );
}

export default App;

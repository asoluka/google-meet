import { useState } from "react";
import { MainScreen } from "../../organisms/MainScreen";
import { ToolBar } from "../../organisms/ToolBar";

export const HomePage = () => {
  const [openActionPane, setOpenActionPane] = useState(false);

  return (
    <div>
      <MainScreen
        isActionPaneOpen={openActionPane}
        setOpenActionPane={setOpenActionPane}
      />
      <ToolBar
        setOpenActionPane={setOpenActionPane}
        time="08:45 PM"
        meetingTitle="DYEN Extra classes"
      />
    </div>
  );
};

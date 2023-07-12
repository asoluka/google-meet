import { useState } from "react";
import { MainScreen } from "../../organisms/MainScreen";
import { ToolBar } from "../../organisms/ToolBar";

export const HomePage = () => {
  const [openActionPane, setOpenActionPane] = useState(false);
  const [config, setConfig] = useState({
    micActive: false,
    videoActive: false,
    showCaption: false,
    showReactionOptions: false,
    shareScreen: false,
    raiseHand: false,
    showMoreOptions: false,
    activePane: {
      type: "meetingDetails",
    },
  });

  return (
    <div>
      <MainScreen
        isActionPaneOpen={openActionPane}
        setOpenActionPane={setOpenActionPane}
        config={config}
        setConfig={setConfig}
      />
      <ToolBar
        setOpenActionPane={setOpenActionPane}
        time="08:45 PM"
        meetingTitle="DYEN Extra classes"
        config={config}
        setConfig={setConfig}
      />
    </div>
  );
};

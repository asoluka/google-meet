import React from "react";
import { Icon } from "../../atoms";

export const ActionPane = ({ isActionPaneOpen, setOpenActionPane, config }) => {
  console.log({ isActionPaneOpen, setOpenActionPane });

  if (isActionPaneOpen)
    return (
      <div className="action-pane">
        {config.activePane.type === "meetingDetails" && (
          <div>
            <div className="flex align-center justify-between p-1">
              <p>Meeting Details</p>
              <button onClick={() => setOpenActionPane(false)}>
                <Icon name="close" height="20px" />
              </button>
            </div>
            <div>Meeting Details Content</div>
          </div>
        )}

        {config.activePane.type === "userGroup" && (
          <div>
            <div className="flex align-center justify-between p-1">
              <p>User Group</p>
              <button onClick={() => setOpenActionPane(false)}>
                <Icon name="close" height="20px" />
              </button>
            </div>
            <div>User Group Content</div>
          </div>
        )}

        {config.activePane.type === "chat" && (
          <div>
            <div className="flex align-center justify-between p-1">
              <p>Chat</p>
              <button onClick={() => setOpenActionPane(false)}>
                <Icon name="close" height="20px" />
              </button>
            </div>
            <div>Chat Content</div>
          </div>
        )}

        {config.activePane.type === "activityGroup" && (
          <div>
            <div className="flex align-center justify-between p-1">
              <p>Activity Group</p>
              <button onClick={() => setOpenActionPane(false)}>
                <Icon name="close" height="20px" />
              </button>
            </div>
            <div>Activity group Content</div>
          </div>
        )}
      </div>
    );

  return null;
};

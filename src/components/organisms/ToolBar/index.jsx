import React from "react";
import { Icon } from "../../atoms";

export const ToolBar = ({ setOpenActionPane, time, meetingTitle }) => {
  function handleActionPaneState() {
    setOpenActionPane((prev) => !prev);
  }

  return (
    <div className="toolbar">
      <div>
        {time} | {meetingTitle}
      </div>
      <div className="meeting-actions">
        <div className="action-icon">
          <Icon name="audio-on" fill="white" />
        </div>
        <div className="action-icon">
          <Icon name="video-off" fill="white" />
        </div>
        <div className="action-icon">
          <Icon name="caption" fill="white" />
        </div>
        <div className="action-icon">
          <Icon name="emoji" fill="white" />
        </div>
        <div className="action-icon">
          <Icon name="share-screen" fill="white" />
        </div>
        <div className="action-icon">
          <Icon name="raise-hand" fill="white" />
        </div>
        <div className="action-icon">
          <Icon name="more-options-vertical" fill="white" />
        </div>
        <div className="action-icon">
          <Icon name="phone" fill="white" />
        </div>
      </div>

      <div className="display-icons">
        <div className="display-icon">
          <Icon onClick={handleActionPaneState} name="info" fill="white" />
        </div>
        <div className="display-icon">
          <Icon
            onClick={handleActionPaneState}
            name="user-group"
            fill="white"
          />
        </div>
        <div className="display-icon">
          <Icon onClick={handleActionPaneState} name="chat" fill="white" />
        </div>
        <div className="display-icon">
          <Icon
            onClick={handleActionPaneState}
            name="activity-group"
            fill="white"
          />
        </div>
      </div>
    </div>
  );
};

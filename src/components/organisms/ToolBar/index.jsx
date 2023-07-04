import React from "react";
import { Icon } from "../../atoms";

export const ToolBar = ({ time, meetingTitle }) => {
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
      <div className="display-icons">Display</div>
    </div>
  );
};

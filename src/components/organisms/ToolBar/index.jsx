import React from "react";
import { Icon } from "../../atoms";
import { WrappedIcon } from "../../molecules/WrappedIcon";

export const ToolBar = ({
  setOpenActionPane,
  time,
  meetingTitle,
  config,
  setConfig,
}) => {
  function handleActionPaneState(type) {
    setOpenActionPane(true);
    setConfig((prev) => ({
      ...prev,
      activePane: {
        ...prev.activePane,
        type,
      },
    }));
  }

  return (
    <div className="toolbar">
      <div>
        {time} | {meetingTitle}
      </div>
      <div className="meeting-actions">
        <WrappedIcon
          setConfig={setConfig}
          activeState={config.micActive}
          title="micActive"
          iconType="audio-on"
          color="white"
          alternateIcon="audio-off"
        />
        <WrappedIcon
          setConfig={setConfig}
          activeState={config.videoActive}
          title="videoActive"
          iconType="video-on"
          color="white"
          alternateIcon="video-off"
        />
        <WrappedIcon
          setConfig={setConfig}
          activeState={config.showCaption}
          title="showCaption"
          activeStateColor="#8ab4f7"
          iconType="caption"
          color="white"
        />
        <WrappedIcon
          setConfig={setConfig}
          activeState={config.showReactionOptions}
          title="showReactionOptions"
          activeStateColor="#8ab4f7"
          iconType="emoji"
          color="white"
        />
        <WrappedIcon
          setConfig={setConfig}
          activeState={config.shareScreen}
          activeStateColor="#8ab4f7"
          title="shareScreen"
          iconType="share-screen"
          color="white"
        />
        <WrappedIcon
          setConfig={setConfig}
          activeState={config.raiseHand}
          title="raiseHand"
          activeStateColor="#8ab4f7"
          iconType="raise-hand"
          color="white"
        />
        <WrappedIcon
          setConfig={setConfig}
          activeState={config.showMoreOptions}
          title="showMoreOptions"
          activeStateColor="#8ab4f7"
          iconType="more-options-vertical"
          color="white"
        />
        <div className="action-icon">
          <Icon name="phone" fill="white" />
        </div>
      </div>

      <div className="display-icons">
        <div className="display-icon">
          <Icon
            onClick={() => handleActionPaneState("meetingDetails")}
            name="info"
            fill="white"
          />
        </div>
        <div className="display-icon">
          <Icon
            onClick={() => handleActionPaneState("userGroup")}
            name="user-group"
            fill="white"
          />
        </div>
        <div className="display-icon">
          <Icon
            onClick={() => handleActionPaneState("chat")}
            name="chat"
            fill="white"
          />
        </div>
        <div className="display-icon">
          <Icon
            onClick={() => handleActionPaneState("activityGroup")}
            name="activity-group"
            fill="white"
          />
        </div>
      </div>
    </div>
  );
};

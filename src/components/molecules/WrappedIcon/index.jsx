import React from "react";
import { Icon } from "../../atoms";

export const WrappedIcon = ({
  activeState,
  setConfig,
  title,
  iconType,
  color,
  activeStateColor,
  alternateIcon,
}) => {
  return (
    <div
      className="action-icon"
      style={{
        backgroundColor: activeState ? activeStateColor || "red" : "#3c4043",
      }}
      onClick={() =>
        setConfig((prev) => {
          return { ...prev, [title]: !prev[title] };
        })
      }
      title={title}
    >
      <Icon
        name={iconType}
        fill={activeState && activeStateColor === "#8ab4f7" ? "#3c4043" : color}
      />
    </div>
  );
};

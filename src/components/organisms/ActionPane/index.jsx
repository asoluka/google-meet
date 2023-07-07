import React from "react";

export const ActionPane = ({ isActionPaneOpen, setOpenActionPane }) => {
  console.log({ isActionPaneOpen, setOpenActionPane });
  if (isActionPaneOpen) return <div className="action-pane">ActionPane</div>;

  return null;
};

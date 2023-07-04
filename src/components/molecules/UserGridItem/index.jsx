import React from "react";
import { Avatar, Icon } from "../../atoms";

export const UserGridItem = ({ imgURL, name }) => {
  return (
    <div className="grid-item">
      <div className="audio-icon-wrapper">
        <Icon name="audio-on" fill="#fff" />
      </div>

      <div className="user-avatar-wrapper">
        <Avatar imgURL={imgURL} name={name} />
      </div>

      <div className="user-name-wrapper">
        <p>{name}</p>
      </div>
    </div>
  );
};

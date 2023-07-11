import React from "react";
import { UserGridItem } from "../../molecules/UserGridItem";

export const UserGrid = ({ users, config }) => {
  return (
    <div className="user-grid">
      {users.map((item) => (
        <UserGridItem key={item.id} name={item.name} config={config}>
          {item.name}
        </UserGridItem>
      ))}
    </div>
  );
};

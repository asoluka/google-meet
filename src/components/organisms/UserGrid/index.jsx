import React from "react";
import { UserGridItem } from "../../molecules/UserGridItem";

export const UserGrid = ({ users }) => {
  return (
    <div className="user-grid">
      {users.map((item) => (
        <UserGridItem key={item.id} name={item.name}>
          {item.name}
        </UserGridItem>
      ))}
    </div>
  );
};

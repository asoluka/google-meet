import React from "react";

export const Avatar = ({ imgURL, name }) => {
  return (
    <div className="avatar">
      {imgURL ? <img src={imgURL} alt={name} /> : <p>{name?.split("")[0]}</p>}
    </div>
  );
};

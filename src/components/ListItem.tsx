import React, { useState } from "react";

import { ReactComponent as Star } from "../assets/star.svg";

const ListItem: React.FC<{
  toggleConversationType: any;
  item: any;
}> = ({ toggleConversationType, item }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleMessageField = () => {
    setIsSelected(!isSelected);
    localStorage.setItem(
      "selectedId",
      JSON.stringify({ id: item.id, selected: true })
    );
  };

  return (
    <div
      className={`list-item ${
        isSelected ? "list-item--selected" : "list-item--not-selected"
      }`}
      onClick={toggleMessageField}
    >
      <div className="list-item__profile-img" />
      <div className="list-item__user-section">
        <h4 className="list-item__name">{`${item.firstName} ${item.lastName}`}</h4>
        <p className="list-item__message">Lorem Ipsum</p>
      </div>
      <div className="list-item__favourites-section">
        <p className="list-item__time-sent">1h</p>
        <Star
          className="list-item__star"
          fill={item.isFavorite ? "#333333" : "#d2d2d2"}
          onClick={(e) => toggleConversationType(e, item.id)}
        />
      </div>
    </div>
  );
};

export default ListItem;

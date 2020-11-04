import React from "react";

import { ReactComponent as Star } from "../assets/star.svg";
import { userDataFormat } from "../models";

interface ListItemProps {
  toggleConversationType: (
    event: React.MouseEvent<SVGSVGElement>,
    id: number
  ) => void;
  item: userDataFormat;
  handleSelected: (selected: userDataFormat) => void;
}

const ListItem: React.FC<ListItemProps> = ({
  toggleConversationType,
  item,
  handleSelected,
}) => {
  return (
    <div
      className={`list-item ${
        item.isSelected ? "list-item--selected" : "list-item--not-selected"
      }`}
      onClick={() => handleSelected(item)}
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

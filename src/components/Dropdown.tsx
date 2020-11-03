import React from "react";

const Dropdown: React.FC<{
  filterFavourite: any;
  favouriteConversation: string;
}> = ({ filterFavourite, favouriteConversation }) => (
  <select
    className="dropdown"
    value={favouriteConversation}
    onChange={filterFavourite}
  >
    <option value="conversations">All conversations</option>
    <option value="isFavorite">Favourites</option>
  </select>
);

export default Dropdown;

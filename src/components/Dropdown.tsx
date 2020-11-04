import React from "react";

interface DropdownProps {
  filterFavourite: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  favouriteConversation: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  filterFavourite,
  favouriteConversation,
}) => (
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

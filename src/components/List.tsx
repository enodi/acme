import React from "react";

import ListItem from "./ListItem";
import { userDataFormat } from "../models";

interface ListProps {
  userData: userDataFormat[];
  toggleConversationType: (
    event: React.MouseEvent<SVGSVGElement>,
    id: number
  ) => void;
  handleSelected: (selected: userDataFormat) => void;
}

const List: React.FC<ListProps> = ({
  userData,
  toggleConversationType,
  handleSelected,
}) => (
  <div>
    {userData.length > 0 &&
      userData.map((item: userDataFormat) => (
        <ListItem
          key={`list-item-${item.id}`}
          item={item}
          toggleConversationType={toggleConversationType}
          handleSelected={handleSelected}
        />
      ))}
  </div>
);

export default List;

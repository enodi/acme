import React from "react";

import ListItem from "./ListItem";

const List: React.FC<{
  userData: any;
  toggleConversationType: any;
}> = ({ userData, toggleConversationType }) => (
  <div>
    {userData.length > 0 &&
      userData.map((item: any) => (
        <ListItem
          key={`list-item-${item.id}`}
          item={item}
          toggleConversationType={toggleConversationType}
        />
      ))}
  </div>
);

export default List;

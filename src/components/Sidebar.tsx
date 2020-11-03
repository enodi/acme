import React from "react";

import Search from "./Search";
import Button from "./Button";
import Dropdown from "./Dropdown";
import List from "./List";

const Sidebar: React.FC<{
  userData: any;
  toggleConversationType: any;
  filterByFullname: any;
  filterFavourite: any;
  favouriteConversation: string;
}> = ({
  userData,
  toggleConversationType,
  filterByFullname,
  filterFavourite,
  favouriteConversation,
}) => {
  return (
    <aside className="sidebar">
      <div className="sidebar__top-section">
        <div>
          <Search filterByFullname={filterByFullname} />
          <Button />
        </div>
        <div>
          <Dropdown
            filterFavourite={filterFavourite}
            favouriteConversation={favouriteConversation}
          />
          <Button text="Follow up" />
        </div>
      </div>
      <div className="sidebar__listItem">
        <List
          userData={userData}
          toggleConversationType={toggleConversationType}
        />
      </div>
    </aside>
  );
};

export default Sidebar;

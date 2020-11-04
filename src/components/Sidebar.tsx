import React from "react";

import Search from "./Search";
import Button from "./Button";
import Dropdown from "./Dropdown";
import List from "./List";
import { userDataFormat } from "../models";

interface SidebarProps {
  userData: userDataFormat[];
  toggleConversationType: (
    event: React.MouseEvent<SVGSVGElement>,
    id: number
  ) => void;
  filterByFullname: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filterFavourite: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  favouriteConversation: string;
  toggle: boolean;
  handleSelected: (selected: userDataFormat) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  userData,
  toggleConversationType,
  filterByFullname,
  filterFavourite,
  favouriteConversation,
  toggle,
  handleSelected,
}) => {
  return (
    <aside className={`sidebar ${toggle && "header--show-sidebar"}`}>
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
          handleSelected={handleSelected}
          toggleConversationType={toggleConversationType}
        />
      </div>
    </aside>
  );
};

export default Sidebar;

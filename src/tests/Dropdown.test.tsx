import React from "react";
import { shallow } from "enzyme";

import Dropdown from "../components/Dropdown";

let filterFavourite: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  wrapper: any;
beforeEach(() => {
  filterFavourite = jest.fn();
  wrapper = shallow(
    <Dropdown
      filterFavourite={filterFavourite}
      favouriteConversation={"isFavorite"}
    />
  );
});

test("should render Dropdown component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should sort by isFavorite", () => {
  const value = "isFavorite";
  wrapper.find("select").simulate("change", { target: { value } });
  expect(filterFavourite).toHaveBeenCalled();
});

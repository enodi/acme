import React from "react";
import { shallow } from "enzyme";

import ListItem from "../components/ListItem";
import { selectedItem } from "./fixtures";

let toggleConversationType, handleSelected, wrapper: any;
beforeEach(() => {
  toggleConversationType = jest.fn();
  handleSelected = jest.fn();
  wrapper = shallow(
    <ListItem
      toggleConversationType={toggleConversationType}
      item={selectedItem}
      handleSelected={handleSelected}
    />
  );
});

test("should render ListItem component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should find text rendered on list item", () => {
  expect(wrapper.find("h4").text()).toEqual("Kirby Rotte");
});

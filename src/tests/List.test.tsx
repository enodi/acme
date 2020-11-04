import React from "react";
import { shallow } from "enzyme";

import List from "../components/List";
import { selectedItem } from "./fixtures";

let toggleConversationType, handleSelected, wrapper: any;
beforeEach(() => {
  toggleConversationType = jest.fn();
  handleSelected = jest.fn();
  wrapper = shallow(
    <List
      toggleConversationType={toggleConversationType}
      userData={[selectedItem]}
      handleSelected={handleSelected}
    />
  );
});

test("should render List component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

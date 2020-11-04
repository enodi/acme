import React from "react";
import { shallow } from "enzyme";

import ChatConversation from "../components/ChatConversation";
import { selectedItem } from "./fixtures";

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<ChatConversation conversation={selectedItem} />);
});

test("should render ChatConversation component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should find text rendered on chat", () => {
  expect(wrapper.find("span").text()).toEqual(selectedItem.messages[0]);
});

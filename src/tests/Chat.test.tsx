import React from "react";
import { shallow } from "enzyme";

import Chat from "../pages/Chat";

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<Chat />);
});

test("should render Chat component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

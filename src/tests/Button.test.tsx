import React from "react";
import { shallow } from "enzyme";

import Button from "../components/Button";

let wrapper: any;
beforeEach(() => {
  wrapper = shallow(<Button text="Follow up" />);
});

test("should render Button component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

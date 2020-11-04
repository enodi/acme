import React from "react";
import { shallow } from "enzyme";

import Header from "../components/Header";
import { selectedItem } from "./fixtures";

let toggleSidebar, wrapper: any;
beforeEach(() => {
  toggleSidebar = jest.fn();
  wrapper = shallow(
    <Header toggleSidebar={toggleSidebar} selectedItem={selectedItem} />
  );
});

test("should render Header component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should find text rendered on header", () => {
  expect(wrapper.find("span").text()).toEqual("Kirby Rotte");
});

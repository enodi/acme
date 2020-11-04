import React from "react";
import { shallow } from "enzyme";

import Search from "../components/Search";
import { selectedItem } from "./fixtures";

let filterByFullname: (event: React.ChangeEvent<HTMLInputElement>) => void,
  wrapper: any;
beforeEach(() => {
  filterByFullname = jest.fn();
  wrapper = shallow(<Search filterByFullname={filterByFullname} />);
});

test("should render Search component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle search change", () => {
  const value = selectedItem.firstName;
  wrapper.find("input").simulate("change", value);
  expect(filterByFullname).toHaveBeenLastCalledWith(value);
});

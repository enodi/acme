import React from "react";
import { shallow } from "enzyme";

import InputField from "../components/InputField";
import { selectedItem } from "./fixtures";

let handleKeyDown,
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  wrapper: any;
beforeEach(() => {
  handleKeyDown = jest.fn();
  onTextChange = jest.fn();
  wrapper = shallow(
    <InputField
      handleKeyDown={handleKeyDown}
      onTextChange={onTextChange}
      messageText={selectedItem.messages[0]}
    />
  );
});

test("should render InputField component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = selectedItem.messages[0];
  wrapper.find("input").simulate("change", value);
  expect(onTextChange).toHaveBeenLastCalledWith(value);
});

import React from "react";
import { shallow } from "enzyme";

import ChatScreen from "../components/ChatScreen";
import { selectedItem } from "./fixtures";

let handleKeyDown, onTextChange, wrapper: any;
beforeEach(() => {
  handleKeyDown = jest.fn();
  onTextChange = jest.fn();
  wrapper = shallow(
    <ChatScreen
      handleKeyDown={handleKeyDown}
      selectedItem={selectedItem}
      conversation={selectedItem}
      onTextChange={onTextChange}
      messageText={selectedItem.messages[0]}
    />
  );
});

test("should render ChatScreen component correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

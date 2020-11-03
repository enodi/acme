import React from "react";

const InputField: React.FC<{
  handleKeyDown: any;
  onTextChange: any;
  messageText: string;
}> = ({ handleKeyDown, onTextChange, messageText }) => (
  <input
    placeholder="Send a message"
    className="input-field"
    onKeyDown={handleKeyDown}
    onChange={onTextChange}
    value={messageText}
  />
);

export default InputField;

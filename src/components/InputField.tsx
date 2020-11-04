import React from "react";

interface InputFieldProps {
  handleKeyDown: (event: any) => void;
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  messageText: string;
}

const InputField: React.FC<InputFieldProps> = ({
  handleKeyDown,
  onTextChange,
  messageText,
}) => (
  <input
    placeholder="Send a message"
    className="input-field"
    onKeyDown={handleKeyDown}
    onChange={onTextChange}
    value={messageText}
  />
);

export default InputField;

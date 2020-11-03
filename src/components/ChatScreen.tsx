import React from "react";

import InputField from "../components/InputField";

const ChatScreen: React.FC<{
  handleKeyDown: any;
  messages: any;
  onTextChange: any;
  messageText: string;
}> = ({ handleKeyDown, messages, onTextChange, messageText }) => {
  const item = localStorage.getItem("selectedId");
  console.log(item, "######");
  return (
    <section className="chat-screen">
      {messages.length > 0 ? (
        messages.map((message: string, index: number) => (
          <p key={`message-${index}`}>{message}</p>
        ))
      ) : (
        <div className="chat-screen__info">
          <h1>Select a conversation</h1>
          <p>
            Start by selecting a conversation or searching for someone specific
          </p>
        </div>
      )}

      <InputField
        handleKeyDown={handleKeyDown}
        onTextChange={onTextChange}
        messageText={messageText}
      />
    </section>
  );
};

export default ChatScreen;

import React from "react";

import InputField from "./InputField";
import ChatConversation from "./ChatConversation";
import { userDataFormat } from "../models";

interface ChatScreenProps {
  selectedItem: userDataFormat;
  conversation: userDataFormat;
  handleKeyDown: (event: any) => void;
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  messageText: string;
}

const ChatScreen: React.FC<ChatScreenProps> = ({
  selectedItem,
  conversation,
  handleKeyDown,
  onTextChange,
  messageText,
}) => (
  <section className="chat-screen">
    {conversation.messages && conversation.messages.length > 0 ? (
      <ChatConversation conversation={conversation} />
    ) : (
      <div className="chat-screen__info">
        <h1>Select a conversation</h1>
        <p>
          Start by selecting a conversation or searching for someone specific
        </p>
      </div>
    )}
    {selectedItem?.isSelected && (
      <InputField
        handleKeyDown={handleKeyDown}
        onTextChange={onTextChange}
        messageText={messageText}
      />
    )}
  </section>
);

export default ChatScreen;

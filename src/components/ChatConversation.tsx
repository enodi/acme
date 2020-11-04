import React from "react";

import { userDataFormat } from "../models";

interface ChatConversationProps {
  conversation: userDataFormat;
}

const ChatConversation: React.FC<ChatConversationProps> = ({
  conversation,
}) => (
  <div className="chat-screen__area">
    {conversation.messages.map((message: string, index: number) => (
      <div key={`message-${index}`}>
        <span className="chat-screen__bubble">{message}</span>
      </div>
    ))}
  </div>
);

export default ChatConversation;

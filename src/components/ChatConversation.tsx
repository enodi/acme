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
      <span key={`message-${index}`} className="chat-screen__bubble">
        {message}
      </span>
    ))}
  </div>
);

export default ChatConversation;

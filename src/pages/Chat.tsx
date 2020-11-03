import React, { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import ChatScreen from "../components/ChatScreen";
import data from "../MOCK_DATA.json";

const Chat: React.FC = () => {
  const [favouriteConversation, setFavouriteConversation] = useState(
    "conversations"
  );
  const [userData, setUserData] = useState<any>([]);
  const [messages, setMessages] = useState<any>([]);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    setUserData(data);
  }, []);

  const filterFavourite = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "isFavorite") {
      setFavouriteConversation(event.target.value);
      const favourites = userData.filter(
        (item: any) => item.isFavorite === true
      );
      setUserData(favourites);
    } else {
      setFavouriteConversation(event.target.value);
      setUserData(data);
    }
  };

  const filterByFullname = (event: React.ChangeEvent<HTMLInputElement>) => {
    const filteredData = data.filter((item) => {
      const firstName = item.firstName.toLowerCase();
      const lastName = item.lastName.toLowerCase();

      return (
        `${firstName} ${lastName}`.indexOf(event.target.value.toLowerCase()) !==
        -1
      );
    });

    setUserData(filteredData);
  };

  const toggleConversationType = (
    event: React.ChangeEvent<HTMLImageElement>,
    id: number
  ) => {
    event.stopPropagation();
    const updatedData: any[] = [];
    userData.reduce((acc: any, item: any) => {
      if (item.id === id) {
        item.isFavorite = !item.isFavorite;
      }
      updatedData.push(item);
    }, {});
    setUserData(updatedData);
  };

  const handleKeyDown = (event: any) => {
    const newMessage = [];
    if (event.key === "Enter") {
      newMessage.push(event.target.value);
      setMessages(newMessage);
      setMessageText("");
    }
  };

  const onTextChange = (event: any) => setMessageText(event.target.value);

  return (
    <>
      <header>hello</header>
      <div className="chat">
        <Sidebar
          userData={userData}
          toggleConversationType={toggleConversationType}
          filterByFullname={filterByFullname}
          filterFavourite={filterFavourite}
          favouriteConversation={favouriteConversation}
        />
        <ChatScreen
          handleKeyDown={handleKeyDown}
          messages={messages}
          onTextChange={onTextChange}
          messageText={messageText}
        />
      </div>
    </>
  );
};

export default Chat;

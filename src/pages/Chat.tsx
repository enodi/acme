import React, { useState, useEffect } from "react";

import Sidebar from "../components/Sidebar";
import ChatScreen from "../components/ChatScreen";
import Header from "../components/Header";
import data from "../MOCK_DATA.json";
import { userDataFormat } from "../models";

const Chat: React.FC = () => {
  const [favouriteConversation, setFavouriteConversation] = useState(
    "conversations"
  );
  const [userData, setUserData] = useState<any>([]);
  const [messageText, setMessageText] = useState("");
  const [toggle, setToggle] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>({});
  const [messages, setMessages] = useState<any>([]);
  const [conversation, setConversation] = useState<any>({});

  useEffect(() => {
    setUserData(data);
  }, []);

  const filterFavourite = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value === "isFavorite") {
      setFavouriteConversation(event.target.value);
      const favourites = userData.filter(
        (item: userDataFormat) => item.isFavorite === true
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
    event: React.MouseEvent<SVGSVGElement>,
    id: number
  ) => {
    event.stopPropagation();
    const updatedData: userDataFormat[] = [];
    userData.reduce((acc: {}, item: userDataFormat) => {
      if (item.id === id) {
        item.isFavorite = !item.isFavorite;
      }
      updatedData.push(item);
    }, {});
    setUserData(updatedData);
  };

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setMessageText(event.target.value);

  const toggleSidebar = () => setToggle(!toggle);

  const hideOverlay = () => setToggle(false);

  const handleSelected = (selected: userDataFormat) => {
    const isSelected = false;
    const updatedData: userDataFormat[] = [];
    setMessages([]);
    setConversation({});

    userData.reduce((acc: {}, item: userDataFormat) => {
      if (selected.id === item.id) {
        item.isSelected = !isSelected;
        setSelectedItem(item);
      } else {
        item.isSelected = isSelected;
      }
      updatedData.push(item);
    }, {});
    setUserData(updatedData);
  };

  const handleKeyDown = (event: any) => {
    const chat: string[] = [];
    if (event.key === "Enter") {
      chat.push(event.target.value);
      setMessages([...messages, ...chat]);
      selectedItem.messages = [...messages, ...chat];
      setConversation(selectedItem);
      setMessageText("");
    }
  };

  return (
    <div className="wrapper">
      <Header toggleSidebar={toggleSidebar} selectedItem={selectedItem} />
      <div className="chat">
        {toggle && <div className="overlay" onClick={hideOverlay} />}
        <Sidebar
          userData={userData}
          toggleConversationType={toggleConversationType}
          filterByFullname={filterByFullname}
          filterFavourite={filterFavourite}
          favouriteConversation={favouriteConversation}
          toggle={toggle}
          handleSelected={handleSelected}
        />
        <ChatScreen
          selectedItem={selectedItem}
          conversation={conversation}
          handleKeyDown={handleKeyDown}
          onTextChange={onTextChange}
          messageText={messageText}
        />
      </div>
    </div>
  );
};

export default Chat;

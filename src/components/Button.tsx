import React from "react";

import { ReactComponent as Chat } from "../assets/chat.svg";

const Button: React.FC<{ text?: string }> = ({ text }) => (
  <button className={text ? "button-text" : "button-img"}>
    {text ? text : <Chat style={{ width: 18, height: 18 }} fill={"#fff"} />}
  </button>
);

export default Button;

import React from "react";
import Content from "./Content";
import Musty from "./Musty";
import "./style.css";
export default function BlockTime({ children, time }) {
  console.log(children);
  return (
    <div className="blocktime">
      <Musty time={time} />
      <Content content={children} />
    </div>
  );
}

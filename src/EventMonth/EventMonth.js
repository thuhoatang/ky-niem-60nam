import React from "react";
import CardEvent from "../CardEvent/CardEvent";
import "./EventMonth.css";
import clickhere from "../image/clickhere.svg";

const EventMonth = () => {
  return (
    <div className="sukien">
      <div className="title-sukien text-right">
        <p>Sự kiện</p>
        <span>Sự kiện UTE vào tháng 11/2022 này</span>
      </div>
      {/* card */}
      <div className="double-card">
        <img
          src={clickhere}
          style={{ position: "absolute", top: "200px", left: "-100px" }}
        />

        <CardEvent
          numberCard="01"
          titleText="Kỷ niệm 60 năm thành lập"
          srcImg="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dW5pdmVyc2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <CardEvent
          numberCard="02"
          titleText="Hiến chương 20/11/2022"
          srcImg="https://images.unsplash.com/photo-1511629091441-ee46146481b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhY2hlciUyMGRheXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
    </div>
  );
};

export default EventMonth;

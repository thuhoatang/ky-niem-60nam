import React from "react";
import logoCalender from "../image/logo-calender.svg";

const AfterHeader = () => {
  return (
    <>
      <div className="card-thoigianhinhthanh text-center">
        <p>Thời gian hình thành và phát triển</p>
        <h6>05/09/1962 - 05/09/2022</h6>
      </div>
      <div className="img-logo-calender">
        <img src={logoCalender} />
      </div>
    </>
  );
};

export default AfterHeader;

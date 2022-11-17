import React, { useState } from "react";
import "./Header.css";
import logoUTE from "../image/logoUte.png";
import SlideHeader from "../SlideHeader/SlideHeader";
import { useNavigate } from "react-router-dom";

const Header = ({ title, selected }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        {/* logo menu */}
        <div className="logo-menu">
          <div className="logoUTE">
            <img src={logoUTE} onClick={() => navigate("ky-niem-60nam")} />
          </div>
          <div className="menu">
            <p
              className={selected == "home" ? `selected` : ""}
              onClick={() => navigate("ky-niem-60nam")}
            >
              <b className="">Giới thiệu</b>
            </p>
            <p
              className={selected == "history" ? `selected` : ""}
              onClick={() => navigate("ky-niem-60nam/lich-su-hinh-thanh")}
            >
              <b>Lịch sử</b>
            </p>

            <p>
              <b>Liên hệ</b>
            </p>
          </div>
        </div>

        <div className="title-60namthanhlap">
          {/* Title Kỷ niệm 60 năm.... */}
          <div className="content-60namthanhlap">
            <p className="title">
              <b>{title}</b>
            </p>
            <p className="content-text">
              Xin chào bạn đã đến với ngày hội kỉ niệm 60 năm thành lập và phát
              triển trường ĐHSPKT. Là một cột mốc đáng tự hào, nơi ghi dấu lịch
              sử thành lập mái trường này...
            </p>
          </div>
          {/* Slide image */}
        </div>
      </div>
      <div className="slide-img-header">
        <SlideHeader />
      </div>
    </>
  );
};

export default Header;

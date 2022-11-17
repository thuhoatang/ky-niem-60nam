import React, { useEffect, useState } from "react";
import "./CardEvent.css";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const CardEvent = ({ srcImg, numberCard, titleText }) => {
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <>
      <div
        className="card"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => navigate("ky-niem-60nam/lich-su-hinh-thanh")}
      >
        <div className="title-card">
          <div className="header-title">
            <div>
              <p>{numberCard}</p>
            </div>
            <div className="horizontal-bar"></div>
          </div>
          <p className="text-title-card">{titleText}</p>
        </div>
        <div className="img-card">
          <img src={srcImg} />
        </div>
        {isHovering && (
          <div className="btn-redirect">
            <Icon
              icon="bxs:chevron-right-square"
              style={{ fontSize: "70px", color: "#ad7c30" }}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CardEvent;

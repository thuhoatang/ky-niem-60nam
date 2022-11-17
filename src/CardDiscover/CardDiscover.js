import React from "react";
import "./CardDiscover.css";
import { Icon } from "@iconify/react";
import img1 from "../image/img4.jpg";
import img2 from "../image/img3.jpg";
import img3 from "../image/img6.jpg";
import img4 from "../image/img13.jpg";
import img5 from "../image/img5.jpg";
import img6 from "../image/img17.jpg";
import video from "../image/videodemo.mp4";

const CardDiscover = () => {
  return (
    <>
      <div className="card-khampha">
        <div className="header-khampha">
          <div className="title-khampha-left">
            <p>Khám phá</p>
            <span>
              Hãy cùng khám phá ngôi nhà chung UTE của chúng tôi nhé...
            </span>
          </div>
          <div className="title-khampha-right">
            <div className="header-title-kp-right m-3">
              <Icon
                icon="entypo:address"
                style={{ fontSize: "60px", color: "#ad7c30" }}
              />
              <span>
                <b>Địa chỉ liên hệ</b>
              </span>
            </div>
            <div className="card-title-kp-right text-center">
              <span>48 Cao Thắng - Hải Châu - Đà Nẵng</span>
            </div>
          </div>
        </div>
        {/* slide */}
        <div className="horizontal-slider">
          <div className="slider-container">
            <div className="item">
              <img src={img1} />
            </div>
            <div className="item">
              <img src={img2} />
            </div>
            <div className="item">
              <img src={img3} />
            </div>
            <div className="item">
              <img src={img4} />
            </div>
            <div className="item">
              <img src={img5} />
            </div>
            <div className="item">
              <img src={img6} />
            </div>
          </div>
        </div>
        {/* video minh hoa */}
        <video controls loop autoPlay muted>
          <source src={video} type="video/mp4" />
          <source src={video} type="video/ogg" />
        </video>
      </div>
    </>
  );
};

export default CardDiscover;

import React from "react";
import "./Footer.css";
import logodhspkt from "../image/logo-dhspkt.svg";
import avt from "../image/thuhoa.jpg";

const Footer2 = ({ tops }) => {
  return (
    <>
      <div className="footer">
        <div className="card-footer">
          <div className="footer-left">
            <img src={logodhspkt} />
            <p>Liên hệ với chúng tôi</p>
            <div className="input">
              <input type="email" placeholder="Email" />
              <br />
              <input type="text" placeholder="Nội dung" />
              <br />
              <button>Gửi thông tin</button>
            </div>
            <span>
              Địa chỉ: số 48 Cao Thắng, TP. Đà Nẵng - Điện thoại: (0236) 3822571
              - Email: dhspktdn@ute.udn.vn
            </span>
          </div>
          <div className="footer-right">
            <div className="info-text">
              <p>
                {" "}
                <b>Thông tin sinh viên</b>
              </p>
              <p>Tăng Thị Thu Hòa</p>
              <p>MSV: 1911505310123</p>
              <p>Khoa Công Nghệ Số</p>
            </div>
            <div className="info-img">
              <img src={avt} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer2;

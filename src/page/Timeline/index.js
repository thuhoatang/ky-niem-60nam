import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import BlockTime from "../../BlockTime";
import Header from "../../Header/Header";
import "./style.css";
import Footer2 from "../../Footer2/Footer";

export default function Timeline({}) {
  const { ref: rocketRef, inView: rocketInv } = useInView();
  const { ref: blocktime1, inView: blocktime1Inv } = useInView();
  const { ref: text2, inView: text2Inv } = useInView();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(rocketInv);
  return (
    <div className="time-line">
      <Header title="Quá trình xây dựng" selected="history" />
      <BlockTime time="1960">
        <div ref={blocktime1}>
          <div>
            <img
              className={blocktime1Inv ? "img_bot_to_top" : null}
              src={require("./images/thanh_lap1960.png")}
              width="400px"
            />
          </div>

          <p className={blocktime1Inv ? "text_right_to_left" : null}>
            Năm 1960, đặt viên đá đầu tiên xây dựng.
            <br />
            Trường được mang tên
            <strong>“Trường Kỹ thuật Đà Nẵng”</strong>
          </p>
        </div>
      </BlockTime>
      <BlockTime time="1962">
        <img src={require("./images/khai_giang1962.png")} width="400px" />
        <div>
          <p
            ref={text2}
            style={{ width: "100%" }}
            className={text2Inv ? "text_right_to_left" : null}
          >
            Tháng 9/1962, trường tổ chức khai giảng khóa đầu tiên. Nay từ năm
            học đầu tiên, trường đã được trang bị cơ sở vật chất thực hành và
            giáo vụ đúng tiêu chuẩn Quốc tế thời đó cho một trường kỹ thuật công
            nghiệp.
          </p>
        </div>

        <div className="su_menh">
          <img src={require("./images/su_menh_cua_truong.png")} width="400px" />
          <p className="mx-5">
            <b> Sứ mệnh của trường</b> là chuẩn bị cho học sinh hoàn tất bậc
            trung học với trình độ cần thiết.
          </p>
        </div>
        <p>
          Sự nổi tiếng của trường gắn liền với{" "}
          <strong>màu áo xanh kỹ thuật</strong> truyền thống và phương thức đào
          tạo nghiêm khắc
        </p>
        <img src={require("./images/mau_ao_ky_thuat_1.png")} width="400px" />
      </BlockTime>

      <BlockTime time="1976">
        <div ref={blocktime1}>
          <p className={blocktime1Inv ? "text_right_to_left" : null}>
            Chuyển đổi thành
            <strong> “ Trường Công nhân Kỹ thuật Nguyễn Văn Trỗi ”</strong>
            trở thành một trong những trường có{" "}
            <strong>thương hiệu ở miền Trung và cả nước</strong>
          </p>
          <div>
            <img
              className={blocktime1Inv ? "img_bot_to_top" : null}
              src={require("./images/mau_ao_ky_thuat_2.png")}
              width="400px"
            />
          </div>
        </div>
      </BlockTime>

      <BlockTime time="1994">
        <div ref={blocktime1}>
          <p className={blocktime1Inv ? "text_right_to_left" : null}>
            Ngày 4/4/1994: Theo nghị định 32-CP của chính phủ, Đại học Đà Nẵng
            được thành lập trên cơ sở sáp nhập các trường trên địa bàn Đà Nẵng,
            trong đó có trường Công nhân Kỹ thuật Nguyễn Văn Trỗi. Lấy tên là:
            <strong> “ Trường Cao Đẳng Công Nghệ ”</strong>
          </p>
          <div>
            <img
              className={blocktime1Inv ? "img_bot_to_top" : null}
              src={require("./images/1994_01.jpg")}
              width="400px"
            />
          </div>
          <p>
            {" "}
            Là một trong năm trường thành viên đầu tiên đem lại cho trường vị
            thế mới
          </p>
          <div>
            <img
              className={blocktime1Inv ? "img_bot_to_top" : null}
              src={require("./images/1994_02.jpg")}
              width="400px"
            />
          </div>
          <p>
            Nhiều phòng thí nghiệm, xưởng thực hành được đầu tư nhiều thiết bị
            hiện đại đáp ứng được yêu cầu đào tạo và nghiên cứu khoa học.
          </p>
          <div>
            <img
              className={blocktime1Inv ? "img_bot_to_top" : null}
              src={require("./images/1994_06.jpg")}
              width="400px"
            />
            <img
              className={blocktime1Inv ? "img_bot_to_top" : null}
              src={require("./images/1994_07.jpg")}
              width="450px"
              style={{ margin: "0px 20px" }}
            />
          </div>
        </div>
      </BlockTime>
      <BlockTime time="2017">
        <div ref={blocktime1}>
          <p className={blocktime1Inv ? "text_right_to_left" : null}>
            Ngày 8 tháng 11 năm 2017: Thủ tướng Chính phủ Việt Nam đã ký Quyết
            định số 1749/QĐ–TTg thành lập trường
            <strong> “ Đại học Sư phạm Kỹ thuật ” </strong>
            thuộc Đại học Đà Nẵng
          </p>
          <div>
            <img
              className={blocktime1Inv ? "img_bot_to_top" : null}
              src={require("./images/2017_06.jpg")}
              width="400px"
            />
            <img
              className={blocktime1Inv ? "img_bot_to_top" : null}
              src={require("./images/thayHieuTruong.jpg")}
              width="450px"
              style={{ margin: "0px 20px" }}
            />
          </div>
          <p className={blocktime1Inv ? "text_right_to_left" : null}>
            Được xây dựng ở Trung tâm TP Đà Nẵng, cơ sở vật chất khang trang và
            hiện đại. Diện tích <strong>42.000m2</strong>
          </p>
          <div>
            <img
              className={blocktime1Inv ? "img_bot_to_top" : null}
              src={require("./images/2017_05.jpg")}
              width="400px"
            />
            <img
              className={blocktime1Inv ? "img_bot_to_top" : null}
              src={require("./images/2017_02.jpg")}
              width="400px"
              style={{ margin: "0px 20px" }}
            />
          </div>
        </div>
      </BlockTime>
      <BlockTime time="2022">
        <div ref={blocktime1} style={{ marginBottom: "100px" }}>
          <p className={blocktime1Inv ? "text_right_to_left" : null}>
            Trường ĐH Sư phạm Kỹ thuật Đà Nẵng đã hoàn thành cơ sở II ở
            <strong>
              {" "}
              “ Khu Đô thị Đại học Đà Nẵng thuộc phường Hoà Quý, quận Ngũ Hành
              Sơn, Thành phố Đà Nẵng ”
            </strong>{" "}
            với khối nhà làm việc 5 tầng và khối nhà học 4 tầng
          </p>
          <div>
            <img
              className={blocktime1Inv ? "img_bot_to_top" : null}
              src={require("./images/coso2.PNG")}
              width="400px"
            />
            <img
              className={blocktime1Inv ? "img_bot_to_top" : null}
              src={require("./images/khaigiang.PNG")}
              width="470px"
              style={{ margin: "0px 20px" }}
            />
          </div>
        </div>
      </BlockTime>
      <Footer2 />
    </div>
  );
}

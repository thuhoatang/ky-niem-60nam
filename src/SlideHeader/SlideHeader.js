import React, { useEffect, useState } from "react";
import "./SlideHeader.css";
import slide01 from "../image/sliderhd01.png";
import slideHeader02 from "../image/img3.jpg";
import slideHeader03 from "../page/Timeline/images/2017_05.jpg";
import slideHeader04 from "../page/Timeline/images/2017_06.jpg";

const arr = [slide01, slideHeader02, slideHeader03, slideHeader04];
const SlideHeader = () => {
  const [imageCurr, setImageCurr] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      let tam = imageCurr;
      tam = tam + 1;
      if (tam == arr.length) {
        tam = tam - arr.length;
      }
      setImageCurr(tam);
    }, 1500);
  });
  return (
    <>
      <div className="img-slide">
        <img src={arr[imageCurr]} />
      </div>
    </>
  );
};

export default SlideHeader;

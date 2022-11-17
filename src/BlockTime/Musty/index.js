import React from "react";
import { useInView } from "react-intersection-observer";
import "./style.css";
export default function Musty({ time }) {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="musty">
      <div className="line">
        {inView ? <div className="cycle">{time}</div> : null}
      </div>
    </div>
  );
}

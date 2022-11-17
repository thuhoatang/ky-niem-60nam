import React from "react";
import { Icon } from "@iconify/react";
import "./ButtonUp.css";

const ButtonUp = () => {
  return (
    <div className="button-up">
      <Icon
        icon="ph:arrow-circle-up-fill"
        style={{ fontSize: "70px", color: "#ad7c30" }}
      />
    </div>
  );
};

export default ButtonUp;

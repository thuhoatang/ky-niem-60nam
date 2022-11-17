import React from "react";
import AfterHeader from "../AfterHeader/AfterHeader";
import ButtonUp from "../ButtonUp/ButtonUp";
import CardDiscover from "../CardDiscover/CardDiscover";
import EventMonth from "../EventMonth/EventMonth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = ({ selected }) => {
  return (
    <>
      <div style={{ maxHeight: "3000px" }}>
        <Header
          title={`Kỷ niệm 60 năm SPKT Xây dựng & phát triển`}
          selected={selected}
        />
        <AfterHeader />
        <EventMonth />
        <CardDiscover />
        <Footer top="-150px" />
      </div>
    </>
  );
};

export default Home;

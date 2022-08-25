import React, { useState, useEffect } from "react";
import "/workspace/react-hello-webapp/src/js/views/home/homeStyles.css";
import CardJedi from "/workspace/react-hello-webapp/src/js/component/card/cardJedi/cardJedi.jsx";
import CardPlanets from "../../component/card/cardPlanets/cardPlanets.jsx";
import CardVehicles from "../../component/card/cardVehicles/cardVehicles.jsx";

const Home = () => {
  return (
    <>
      <CardJedi />
      <CardPlanets />
      <CardVehicles />
    </>
  );
};
export default Home;

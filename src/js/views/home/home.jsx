import React, { useState, useEffect } from "react";
import "../home/homeStyles.css";
import CardJedi from "../../component/card/cardJedi/cardJedi.jsx";
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

import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext.jsx";
import "../vehicle/vehicleStyle.css";

export const Vehicle = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  let vehiclesIdArray = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24];
  let mapVehicles = vehiclesIdArray.map(
    (id) =>
      "https://starwars-visualguide.com/assets/img/vehicles/" + id + ".jpg"
  );

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <img src={mapVehicles[params.theid]} />
        </div>
        <div className="col infoText">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quod excepturi minima recusandae aspernatur nihil!
            Libero excepturi, nobis quisquam laborum adipisci recusandae
            aspernatur voluptas repellat quae tempore cumque velit nemo?
          </p>
        </div>
      </div>
      <hr />
      <div className="row my-2">
        <div className="col-2 props d-flex flex-column">
          <b>Name:</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>Manufacturer:</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>Const in credits:</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>Max. Atmosphering speed:</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>Crew:</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>Passengers:</b>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-2 props d-flex flex-column">
          <b>{store.vehicles[params.theid].name}</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>{store.vehicles[params.theid].manufacturer}</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>{store.vehicles[params.theid].cost_in_credits}</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>{store.vehicles[params.theid].max_atmosphering_speed}</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>{store.vehicles[params.theid].crew}</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>{store.vehicles[params.theid].passengers}</b>
        </div>
      </div>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};

Vehicle.propTypes = {
  match: PropTypes.object,
};

export default Vehicle;

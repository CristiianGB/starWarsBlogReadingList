import React, { useEffect, useState } from "react";
import "../cardVehicles/cardVehiclesStyles.css";
import { useContext } from "react";
import { Context } from "../../../store/appContext.jsx";
import { Link } from "react-router-dom";

const CardVehicles = () => {
  const { store, actions } = useContext(Context);
  let vehiclesIdArray = [4, 6, 7, 8, 14, 16, 18, 19, 20, 24];

  let mapVehicles = vehiclesIdArray.map(
    (id) =>
      "https://starwars-visualguide.com/assets/img/vehicles/" + id + ".jpg"
  );

  useEffect(() => {
    actions.fetchVehicles();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h3 className="my-3 titleSection">Vehicles:</h3>
        <div className="d-flex overflow-auto">
          {store.vehicles.map((VehiclesInfo, i) => (
            <div className="card p-2 my-2 mx-3 carta">
              <img
                src={mapVehicles[i]}
                className="card-img-top vehiclesImg"
                alt="VehiclesFace"
              />
              <div className="card-body d-flex bodyCarta">
                <h5 className="card-title newFont">
                  <b>{VehiclesInfo.name}</b>
                </h5>
                <p className="card-text newFont">
                  <b>Model:</b> {VehiclesInfo.model}
                </p>
                <p className="card-text newFont">
                  <b>Length:</b> {VehiclesInfo.length}
                </p>
                <p className="card-text newFont">
                  <b>Class:</b> {VehiclesInfo.vehicle_class}
                </p>
              </div>
              <div>
                <Link to={`/vehicles/${i}`}>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Learn More</span>
                  </button>
                </Link>
                <i
                  className={
                    store.favorites.includes(VehiclesInfo.name)
                      ? "fa fa-heart"
                      : "fa fa-heart-o"
                  }
                  onClick={() =>
                    store.favorites.includes(VehiclesInfo.name)
                      ? actions.eraseFavorites(VehiclesInfo.name)
                      : actions.addFavorites(VehiclesInfo.name)
                  }
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CardVehicles;

import React, { useEffect, useState } from "react";
import "../cardPlanets/cardPlanetsStyles.css";
import { useContext } from "react";
import { Context } from "../../../store/appContext.jsx";
import { Link } from "react-router-dom";

const CardPlanets = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchPlanets();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h3 className="my-3 titleSection">Planets:</h3>
        <div className="d-flex overflow-auto">
          {store.planets.map((PlanetsInfo, i) => (
            <div className="card p-2 my-2 mx-3 carta">
              <img
                src={
                  i == 0
                    ? `https://starwars-visualguide.com/assets/img/placeholder.jpg`
                    : `https://starwars-visualguide.com/assets/img/planets/${
                        i + 1
                      }.jpg`
                }
                className="card-img-top planetsImg"
                alt="PlanetsFace"
              />
              <div className="card-body d-flex bodyCarta">
                <h5 className="card-title newFont">
                  <b>{PlanetsInfo.name}</b>
                </h5>
                <p className="card-text newFont">
                  <b>Population:</b> {PlanetsInfo.population}
                </p>
                <p className="card-text newFont">
                  <b>Terrain:</b> {PlanetsInfo.terrain}
                </p>
              </div>
              <div>
                <Link to={`/planets/${i + 1}`}>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Learn More</span>
                  </button>
                </Link>
                <i
                  className={
                    store.favorites.includes(PlanetsInfo.name)
                      ? "fa fa-heart"
                      : "fa fa-heart-o"
                  }
                  onClick={() =>
                    store.favorites.includes(PlanetsInfo.name)
                      ? actions.eraseFavorites(PlanetsInfo.name)
                      : actions.addFavorites(PlanetsInfo.name)
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
export default CardPlanets;

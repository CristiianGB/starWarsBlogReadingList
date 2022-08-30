import React, { useEffect, useState } from "react";
import "../cardJedi/cardJediStyles.css";
import { useContext } from "react";
import { Context } from "../../../store/appContext.jsx";
import { Link } from "react-router-dom";

const CardJedi = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.fetchJedi();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <h3 className="my-3 titleSection">Characters:</h3>
        <div className="d-flex overflow-auto">
          {store.jedi.map((jediInfo, i) => (
            <div className="card p-2 my-2 mx-3 carta">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${
                  i + 1
                }.jpg`}
                className="card-img-top jediImg "
                alt="jediFace"
              />
              <div className="card-body bodyCarta">
                <h5 className="card-title newFont">
                  <b>{jediInfo.name}</b>
                </h5>
                <p className="card-text newFont">
                  <b>Gender:</b> {jediInfo.gender}
                </p>
                <p className="card-text newFont">
                  <b>Hair color:</b> {jediInfo.hair_color}
                </p>
                <p className="card-text newFont">
                  <b>Eye color:</b> {jediInfo.eye_color}
                </p>
              </div>
              <div className="d-inline">
                <Link to={`/people/${i}`}>
                  <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Learn More</span>
                  </button>
                </Link>
                <i
                  className={
                    store.favorites.includes(jediInfo.name)
                      ? "fa fa-heart"
                      : "fa fa-heart-o"
                  }
                  onClick={() =>
                    store.favorites.includes(jediInfo.name)
                      ? actions.eraseFavorites(jediInfo.name)
                      : actions.addFavorites(jediInfo.name)
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
export default CardJedi;

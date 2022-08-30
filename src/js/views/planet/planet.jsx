import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext.jsx";
import "../planet/planetStyles.css";

export const Planet = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <img
            src={
              params.theid == 1
                ? `https://starwars-visualguide.com/assets/img/placeholder.jpg`
                : `https://starwars-visualguide.com/assets/img/planets/${parseInt(
                    params.theid
                  )}.jpg`
            }
            alt="jediInfoFace"
          />
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
          <b>Rotation period:</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>Orbital period:</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>Diameter:</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>Climate:</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>Gravity:</b>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-2 props d-flex flex-column">
          <b>{store.planets[params.theid - 1].name}</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>{store.planets[params.theid - 1].rotation_period}</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>{store.planets[params.theid - 1].orbital_period}</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>{store.planets[params.theid - 1].diameter}</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>{store.planets[params.theid - 1].climate}</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>{store.planets[params.theid - 1].gravity}</b>
        </div>
      </div>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};

Planet.propTypes = {
  match: PropTypes.object,
};

export default Planet;

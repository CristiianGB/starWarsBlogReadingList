import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../../store/appContext.jsx";
import "../jedi/jediStyles.css";

export const Jedi = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${
              parseInt(params.theid) + 1
            }.jpg`}
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
          <b>Birth year:</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>Gender:</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>Height:</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>Skin color:</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>Eye color:</b>
        </div>
      </div>
      <div className="row my-2">
        <div className="col-2 props d-flex flex-column">
          <b>{store.jedi[params.theid].name}</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>{store.jedi[params.theid].birth_year}</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>{store.jedi[params.theid].gender}</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>{store.jedi[params.theid].height}</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>{store.jedi[params.theid].skin_color}</b>
        </div>
        <div className="col-2 props d-flex flex-column">
          <b>{store.jedi[params.theid].eye_color}</b>
        </div>
      </div>
      <br />
      <Link to="/">
        <button className="btn btn-primary">Back home</button>
      </Link>
    </div>
  );
};

export default Jedi;

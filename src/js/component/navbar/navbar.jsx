import React from "react";
import { Link } from "react-router-dom";
import "../navbar/navbarStyles.css";
import { useContext } from "react";
import { Context } from "../../store/appContext.jsx";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand" href="/">
          <img
            className="icon"
            src="https://icon-library.com/images/star-wars-icon-png/star-wars-icon-png-8.jpg"
            alt="theSupreme"
          />
        </a>
        <div className="">
          <div className="navbar" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  data-bs-target="#navbarNavDarkDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Favorites
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-dark dropdown-menu-end menuFav"
                  id="navbarDarkDropdownMenuLink"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  {store.favorites == false ? <li>no hay favoritos.</li> : ""}
                  {store.favorites.map((fav, i) => (
                    <div className="row ">
                      <div className="col-10 d-inline-block">
                        {" "}
                        <li className="my-auto">{fav}</li>
                      </div>
                      <div className="col-2 d-inline-block">
                        <i
                          className="fa fa-heartbeat botonBorrarFav mt-2 my-auto"
                          onClick={() => actions.eraseFavorites(fav)}
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

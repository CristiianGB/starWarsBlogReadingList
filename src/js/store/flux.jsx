const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      jedi: [],
      planets: [],
      vehicles: [],
      favorites: [],
    },
    actions: {
      fetchJedi: () => {
        fetch("https://swapi.dev/api/people", {
          method: "GET",
          headers: { "Content-type": "application/json" },
        })
          .then((response) => response.json())
          .then((response) => setStore({ jedi: response.results }))
          .catch((err) => console.error(err));
      },
      fetchPlanets: () => {
        fetch("https://swapi.dev/api/planets", {
          method: "GET",
          headers: { "Content-type": "application/json" },
        })
          .then((response) => response.json())
          .then((response) => setStore({ planets: response.results }))
          .catch((err) => console.error(err));
      },
      fetchVehicles: () => {
        fetch("https://swapi.dev/api/vehicles", {
          method: "GET",
          headers: { "Content-type": "application/json" },
        })
          .then((response) => response.json())
          .then((response) => setStore({ vehicles: response.results }))
          .catch((err) => console.error(err));
      },
      addFavorites: (nombre) => {
        const store = getStore();
        setStore({ favorites: [...store.favorites, nombre] });
      },
      eraseFavorites: (nombre) => {
        const store = getStore();
        store.favorites = store.favorites.filter((obj) => nombre != obj);
      },
    },
  };
};

export default getState;

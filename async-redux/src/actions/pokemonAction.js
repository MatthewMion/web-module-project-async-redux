import axios from "axios";

export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILED = "FETCH_POKEMON_FAILED";

export const getPokemon = () => (dispatch) => {
  dispatch({ type: FETCH_POKEMON_START });
  axios
    .get(
      `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}`
    )
    .then((res) => {
      dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: FETCH_POKEMON_FAILED, payload: err });
    });
};

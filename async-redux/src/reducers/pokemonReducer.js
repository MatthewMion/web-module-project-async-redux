import {
  FETCH_POKEMON_START,
  FETCH_POKEMON_SUCCESS,
  FETCH_POKEMON_FAILED,
} from "../actions/pokemonAction";

const initialState = {
  pokemon: [],
  moves: [],
  error: "",
  isFetching: false,
};

const pokemonReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_START:
      return {
        ...state,
        pokemon: [],
        isFetching: true,
        error: "",
      };
    case FETCH_POKEMON_SUCCESS:
      return {
        ...state,
        pokemon: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_POKEMON_FAILED:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default pokemonReducer;

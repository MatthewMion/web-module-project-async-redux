import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPokemon } from "../actions/pokemonAction";
import { Button, Typography } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
const PokemonList = (props) => {
  //   const randomNumber = Math.floor(Math.random() * 5) + 1;
  const fetchPokemon = (e) => {
    e.preventDefault();
    props.getPokemon();
    // console.log(props.moves[randomNumber].move.name);
  };
  //   const randomMove = props.moves[randomNumber].move;
  useEffect(() => {
    props.getPokemon();
  }, []);
  return (
    <div className="pokemon">
      <Typography variant="h1" color="primary">
        Who's That Pokemon?!
      </Typography>
      <div className="pokeball">
        <CatchingPokemonIcon fontSize="large" />
        <Button variant="outlined" color="error" onClick={fetchPokemon}>
          Pick your pokeman!
        </Button>
        <CatchingPokemonIcon fontSize="large" />
      </div>
      <Typography variant="h2" color="secondary">
        {props.pokemon.name}
      </Typography>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
    moves: state.moves,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getPokemon })(PokemonList);

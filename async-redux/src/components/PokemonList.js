import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPokemon } from "../actions/pokemonAction";

const PokemonList = (props) => {
  useEffect(() => {
    props.getPokemon();
  }, []);
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  //   const randomMove = props.moves[randomNumber].move.name;
  const fetchPokemon = (e) => {
    e.preventDefault();
    props.getPokemon();
    console.log(props.moves[randomNumber].move.name);
  };
  return (
    <div>
      <h2>Who's that Pokemon?!</h2>
      <button onClick={fetchPokemon}>Find Out!</button>
      <h3>{props.pokemon.name}</h3>

      <ul>
        <li>{randomNumber}</li>
        <li>test2</li>
        <li>test3</li>
        <li>test4</li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemon: state.pokemon,
    moves: state.pokemon.moves,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getPokemon })(PokemonList);

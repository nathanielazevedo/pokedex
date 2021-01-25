import React from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

function Pokedex(props) {
    let winMessage = null;
    
    if (props.isWinner) {
        winMessage = <p className='win'>This hand wins!</p>
    }
    return (
      <div className='pokedex'>
        {winMessage}
        {props.pokemon.map((p) => (
          <Pokecard
            name={p.name}
            id={p.id}
            type={p.type}
            exp={p.base_experience}
          />
        ))}
      </div>
    );
}

export default Pokedex;

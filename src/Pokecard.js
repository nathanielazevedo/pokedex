
import React from "react";
import './Pokecard.css'
function Pokecard(props) {
  
    return (
    <div className="cardContainer">
        <h3>{props.name} </h3>
        <h3>{props.type}</h3>
        <h3>{props.exp}</h3>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
        alt='pokemon'></img>
    </div>
    
)}


export default Pokecard;

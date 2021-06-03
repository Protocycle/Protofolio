import React, { useState } from 'react';
import pokeball from '../../../assets/images/pokeball.png';
import axios from 'axios';

const api = "https://pokeapi.co/api/v2/pokemon/";
const max = 898;
const typeWeakness = {
  normal: ["fighting"],
  fire: ["water", "ground", "rock"],
  water: ["electric", "grass"],
  grass: ["fire", "ice", "poison", "flying", "bug"],
  ice: ["fire", "fighting", "rock", "steel"],
  fighting: ["flying", "psychic", "fairy"],
  poison: ["ground", "psychic"],
  ground: ["water", "grass", "ice"],
  flying: ["electric", "ice", "rock"],
  psychic: ["bug", "ghost", "dark"],
  bug: ["fire", "flying", "rock"],
  rock: ["water", "grass", "fighting", "ground", "steel"],
  ghost: ["ghost", "dark"],
  dragon: ["ice", "dragon", "fairy"],
  dark: ["fighting", "bug", "fairy"],
  steel: ["fire", "fighting", "ground"],
  fairy: ["poison", "steel"],
  electric: ["ground"]
}
const result = {
  none: -1, //draw, neither was super effective
  left: 0, //left (type1) is the winner
  right: 1, //right (type2) is the winner
  both: 2 //draw, both were super effective
}
const randomize = () => {
  return Math.floor(Math.random() * max) + 1;
}
const checkWinner = (type1, type2) => {
  let type1Values = Object.values(typeWeakness[type1]);
  let type2Values = Object.values(typeWeakness[type2]);

  if (type1Values.includes(type2) && type2Values.includes(type1)) {
    return result.both;
  }

  if (type1Values.includes(type2)) {
    return result.right;
  }

  if (type2Values.includes(type1)) {
    return result.left;
  }

  return result.none;
}


export const PokeRPS = () => {
  const [id1, setId1] = useState("");
  const [pokemonName1, setPokemonName1] = useState("Pokemon");
  const [pokemonSprite1, setPokemonSprite1] = useState(pokeball);
  const [pokemonType1, setPokemonType1] = useState("Type");
  const [fontColor1, setFontColor1] = useState("");

  const [id2, setId2] = useState("");
  const [pokemonName2, setPokemonName2] = useState("Pokemon");
  const [pokemonSprite2, setPokemonSprite2] = useState(pokeball);
  const [pokemonType2, setPokemonType2] = useState("Type");
  const [fontColor2, setFontColor2] = useState("");

  const [info, setInfo] = useState("Winner will be shown here");
  const [winnerFontColor, setWinnerFontColor] = useState("has-text-info-light");
  const [loading, isLoading] = useState(false);

  const getPokemon = async (id, setId) => {
    id = parseInt(id.trim());

    if (isNaN(id)) {
      window.alert("ID must be number");
      return;
    }
    if (id < 1 || id > 898) {
      window.alert("ID must be between 1 and 898, inclusive");
      return;
    }

    return (await axios.get(api + id)).data;
  }

  const RPS = async () => {
    isLoading(true);
    const p1 = await getPokemon(id1, setId1);
    if (p1 === undefined) {
      isLoading(false);
      return;
    }
    const p2 = await getPokemon(id2, setId2);
    if (p2 === undefined) {
      isLoading(false);
      return;
    }

    const { name: name1, sprites: sprites1} = p1;
    const type1 = p1["types"][0]["type"]["name"];
    setPokemonName1(name1[0].toUpperCase() + name1.slice(1));
    setPokemonSprite1(sprites1["front_default"]);
    setPokemonType1(type1[0].toUpperCase() + type1.slice(1));
    setFontColor1("type-" + type1);

    const { name: name2, sprites: sprites2} = p2;
    const type2 = p2["types"][0]["type"]["name"];
    setPokemonName2(name2[0].toUpperCase() + name2.slice(1));
    setPokemonSprite2(sprites2["front_default"]);
    setPokemonType2(type2[0].toUpperCase() + type2.slice(1));
    setFontColor2(`type-` + type2);

    const winner = checkWinner(type1, type2);
    if (winner === -1) {
      setInfo("Neither was super effective, it's a DRAW!");
      setWinnerFontColor("has-text-info-light");
    }
    else if (winner === 0) {
      setInfo(`${type1} was super effective, ${name1} is the winner!`);
      setWinnerFontColor("type-" + type1);
    }
    else if (winner === 1) {
      setInfo(`${type2} was super effective, ${name2} is the winner!`);
      setWinnerFontColor("type-" + type2);
    }
    else {
      setInfo("Both were super effective, it's a DRAW!");
      setWinnerFontColor("has-text-info-light");
    }

    isLoading(false);
  }

  return (
    <div className="has-text-centered">
      <div className="columns is-centered">
        <div className="column">
          <label className="label is-size-4">Player 1</label>

          <div className="is-flex is-align-items-center is-flex-direction-column pb-4">
            <div className={"pb-2 " + fontColor1}>
              <label className="label is-size-5">{pokemonName1}</label>
              <label className="label">{pokemonType1}</label>
            </div>

            <figure className="image" style={{ width: "196px" }}>
              <img src={pokemonSprite1} alt="waiting for pokemon" />
              {loading && <progress className="progress is-small is-primary mt-2" style={{ position: "absolute" }} max="100">60%</progress>}
            </figure>
          </div>

          <div className="pt-4 columns">
            <div className="column is-two-thirds">
              <input className="input is-primary"
                type="text"
                placeholder="Pokemon ID # (e.g. 1, 333, 740...)"
                onChange={e => setId1(e.currentTarget.value.replace(/\s*[a-zA-Z]*/g, ""))}
                value={id1}
              />
            </div>

            <div className="column is-one-fifth">
              <button className="button" onClick={() => setId1("" + randomize())}>Randomize</button>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="is-flex is-align-items-flex-end is-justify-content-center" style={{ height: "50%" }}>
            <label className="label is-size-1">VS</label>
          </div>

          <div className="is-flex is-align-items-flex-end is-justify-content-center" style={{ height: "50%" }}>
            <button className="button" onClick={() => RPS()}>RPS!</button>
          </div>
        </div>

        <div className="column">
          <label className="label is-size-4">Player 2</label>

          <div className="is-flex is-align-items-center is-flex-direction-column pb-4">
            <div className={"pb-2 " + fontColor2}>
              <label className="label is-size-5">{pokemonName2}</label>
              <label className="label">{pokemonType2}</label>
            </div>

            <figure className="image" style={{ width: "196px" }}>
              <img src={pokemonSprite2} alt="waiting for pokemon" />
              {loading && <progress className="progress is-small is-primary mt-2" style={{ position: "absolute" }} max="100">60%</progress>}
            </figure>
          </div>

          <div className="pt-4 columns">
            <div className="column is-two-thirds">
              <input className="input is-primary"
                type="text"
                placeholder="Pokemon ID # (e.g. 1, 333, 740...)"
                onChange={e => setId2(e.currentTarget.value.replace(/\s*[a-zA-Z]*/g, ""))}
                value={id2}
              />
            </div>

            <div className="column is-one-fifth">
              <button className="button" onClick={() => setId2("" + randomize())}>Randomize</button>
            </div>
          </div>
        </div>
      </div>

      <label className={`label is-size-4 ${winnerFontColor}`}>{info}</label>
    </div>
  );
}

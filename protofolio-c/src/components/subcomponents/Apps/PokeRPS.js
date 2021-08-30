import React, { useState } from 'react';
import pokeball from '../../../assets/images/pokeball.png';
import axios from 'axios';

const max = 898;

const randomize = () => {
  return Math.floor(Math.random() * max) + 1;
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

  const getPokemon = async (id1, id2) => {
    id1 = parseInt(id1.trim());
    id2 = parseInt(id2.trim());

    if (isNaN(id1) || isNaN(id2)) {
      window.alert("ID must be number");
      return;
    }

    if ((id1 < 1 || id1 > max) || (id2 < 1 || id2 > max)) {
      window.alert("ID must be between 1 and 898, inclusive");
      return;
    }
    
    const data = (await axios.get(`http://localhost:9000/api/pokerps/get-pokemon`, {params: {id1, id2}})).data;
    return data;
  }

  const RPS = async () => {
    isLoading(true);

    const resultSet = await getPokemon(id1, id2);

    if (!resultSet) {
      isLoading(false);
      return;
    }

    const {poke1, poke2, winner} = resultSet;
    setPokemonName1(poke1.name);
    setPokemonSprite1(poke1.sprite);
    setPokemonType1(poke1.type);
    setFontColor1("type-" + poke1.type);

    setPokemonName2((poke2.name));
    setPokemonSprite2(poke2.sprite);
    setPokemonType2(poke2.type);
    setFontColor2(`type-` + poke2.type);

    if (winner === -1) {
      setInfo("Neither was super effective, it's a DRAW!");
      setWinnerFontColor("has-text-info-light");
    }
    else if (winner === 0) {
      setInfo(<p><span className='is-capitalized'>{poke1.type}</span> was super effective<br/> <span className='is-capitalized'>{poke1.name}</span> is the winner!</p>);
      setWinnerFontColor("type-" + poke1.type);
    }
    else if (winner === 1) {
      setInfo(<p><span className='is-capitalized'>{poke2.type}</span> was super effective<br/> <span className='is-capitalized'>{poke2.name}</span> is the winner!</p>);
      setWinnerFontColor("type-" + poke2.type);
    }
    else {
      setInfo("Both types were super effective, it's a DRAW!");
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
              <label className="label is-size-5 is-capitalized">{pokemonName1}</label>
              <label className="label is-capitalized">{pokemonType1}</label>
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
              <label className="label is-size-5 is-capitalized">{pokemonName2}</label>
              <label className="label is-capitalized">{pokemonType2}</label>
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

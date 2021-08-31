const pokeRouter = require('express').Router();
const axios = require('axios');

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

const api = "https://pokeapi.co/api/v2/pokemon/";

const result = {
    none: -1, //draw, neither was super effective
    left: 0, //left (type1) is the winner
    right: 1, //right (type2) is the winner
    both: 2 //draw, both were super effective
}

const getWinner = (type1, type2) => {
    const type1Values = typeWeakness[type1];
    const type2Values = typeWeakness[type2];

    if (type1Values.includes(type2) && type2Values.includes(type1)) {
        return result.both; // draw
    }

    if (type1Values.includes(type2)) {
        return result.right; // player two
    }

    if (type2Values.includes(type1)) {
        return result.left; // player one
    }

    return result.none; // neither
}

const getPokemon = async (id) => {
    return (await axios.get(api + id)).data;
}

pokeRouter.get('/get-pokemon', async (req, res) => {
    const id1 = req.query.id1;
    const id2 = req.query.id2;

    const poke1 = await getPokemon(id1);
    const poke2 = await getPokemon(id2);

    resultSet = {
        poke1: {
            name: poke1.name,
            id: id1,
            type: poke1["types"][0]["type"]["name"],
            sprite: poke1.sprites["front_default"]
        },
        poke2: {
            name: poke2.name,
            id: id2,
            type: poke2["types"][0]["type"]["name"],
            sprite: poke2.sprites["front_default"]
        },
        winner: getWinner(poke1["types"][0]["type"]["name"], poke2["types"][0]["type"]["name"])
    }

    res.json(resultSet);
});

module.exports = {
    pokeRouter
};

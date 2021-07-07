import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

const FetchPokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    const getPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => response.json())
            .then(response => {
                setPokemon(response.results)
            })
    }

    return (
        <div className='w-25 mx-auto'>
            <button type="submit" onClick={getPokemon}>Gotta catch em all Gotta catch em all</button>
            { pokemon.map((pokemon, i) => {
                return <ListGroup><ListGroup.Item key={i}>{pokemon.name}</ListGroup.Item></ListGroup>
            })
            }
        </div>
    );
}

export default FetchPokemon;
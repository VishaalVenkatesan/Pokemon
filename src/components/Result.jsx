import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./result.css";

const Result = () => {
  const location = useLocation();
  const searchValue = location.state.searchValue;
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  const fetchResult = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchValue}`);
      setPokemon(response.data);
    } catch (error) {
      setError('Pokémon not found');
    }
  };

  useEffect(() => {
    fetchResult();
  }, []);

  return (
    <div className="result-container">
      {error ? (
        <div className="error">{error}</div>
      ) : pokemon ? (
        <div className='pokemon-info'>
          <h1 className='pokemon-name'>{pokemon.name}</h1>
          <img className='pokemon-image' src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p className='pokemon-type'>Type: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
          <p className='pokemon-abilities'>Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</p>
          <Link className='back-link' to="/">Back</Link>
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default Result;
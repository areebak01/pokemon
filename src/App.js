import React, { useEffect, useState } from 'react';
import PokemonInfo from './components/PokemonInfo';
import PokemonSprites from './components/PokemonSprites';
import PokemonMoves from './components/PokemonMoves';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/5';

  useEffect(() => {
    fetch(pokemonUrl)
      .then(response => response.json())
      .then(data => {
        setPokemon({
          name: data.name,
          image: data.sprites.other['official-artwork'].front_default,
          sprites: [
            data.sprites.front_default,
            data.sprites.back_default,
            data.sprites.front_shiny,
          ],
          moves: data.moves.slice(0, 3).map(move => move.move.name),
        });
      })
      .catch(error => console.error('Error fetching Pokémon data:', error));
  }, []);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <PokemonInfo name={pokemon.name} image={pokemon.image} />
      <PokemonSprites sprites={pokemon.sprites} />
      <PokemonMoves moves={pokemon.moves} />
    </div>
  );
}

export default App;

import React from 'react';

function PokemonInfo({ name, image }) {
  return (
    <div>
      <h1>{name.toUpperCase()}</h1>
      <img src={image} alt={`${name}`} style={{ width: '200px', height: '200px' }} />
    </div>
  );
}

export default PokemonInfo;

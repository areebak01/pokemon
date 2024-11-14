import React from 'react';

function PokemonSprites({ sprites }) {
  return (
    <div>
      <h2>Sprites</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        {sprites.map((sprite, index) => (
          <img key={index} src={sprite} alt={`sprite ${index + 1}`} style={{ width: '100px', height: '100px' }} />
        ))}
      </div>
    </div>
  );
}

export default PokemonSprites;

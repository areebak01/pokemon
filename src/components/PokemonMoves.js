import React from 'react';

function PokemonMoves({ moves }) {
  return (
    <div>
      <h2>Moves</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {moves.map((move, index) => (
          <li key={index}>{move}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonMoves;

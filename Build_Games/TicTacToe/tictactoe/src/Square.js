// Square.js
import React from 'react';

const Square = ({ value, onClick }) => {
  const squareStyle = {
    backgroundColor: '#e5e5e5',
    height: '100px',
    width: '100px',
    fontSize: '3em',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #000000',
    cursor: 'pointer',
  };

  return (
    <button style={squareStyle} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;

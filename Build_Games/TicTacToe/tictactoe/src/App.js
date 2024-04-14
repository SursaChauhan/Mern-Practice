// App.js
import React, { useState } from 'react';
import Board from './Board';
import './App.css'; // Import your custom CSS file

const App = () => {
  const [winner, setWinner] = useState(null);
  const [turn, setTurn] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(null));

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      const nextTurn = turn === 'X' ? 'O' : 'X';
      setTurn(nextTurn);
      const winner = checkWinner();
      if (winner) {
        setWinner(winner);
      } else if (!newBoard.includes(null)) {
        setWinner('Draw');
      }
    }
  };

  const resetGame = () => {
    setWinner(null);
    setTurn('X');
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="app-container">
      <h1 className="title">Tic Tac Toe</h1>
      <Board squares={board} onClick={handleClick} />
      {winner && (
        <div className="winner-message">
          {winner === 'Draw' ? 'It\'s a Draw!' : `Player ${winner} wins!`}
          <button className="reset-button" onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default App;

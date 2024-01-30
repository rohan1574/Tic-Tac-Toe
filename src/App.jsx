import React, { useState } from 'react';
import Board from './Components/Board';

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  
  const jumpTo = (nextMove) =>{
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="flex items-center h-screen justify-center gap-8">
      {/* board */}
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} ></Board>
      </div>
      {/* history */}
      <div>
      <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default App;
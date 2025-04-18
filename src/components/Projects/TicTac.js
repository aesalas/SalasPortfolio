import React from "react";
import { useState } from 'react';
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";

// activate each square for playing
function Square({ value, onSquareClick }) {
  return (
    <div className="flex">
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
    </div>
  );
}

// Game board
function Board({ xIsNext, squares, onPlay }) {
    // changes btwn players 
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }
// checks winner or allows game to continue
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    //if game over
    if (!squares.includes(null)) {
      status = 'Game over: Draw!';
    }
  }
// changes from blank to X || O
  return (
    <div>
      <Col className="status">{status}</Col>
      <Row className="game-board">
        <Col className="board-row padding-0">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </Col >
        <Col className="board-row padding-0">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </Col>
        <Col className="board-row padding-0">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </Col>

      </Row>
    </div>
  );
}

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

    // switch btwn X & O
  function handlePlay(nextSquares) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

// set up game board on page
  return (
    <Col className="game">
      <Row className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </Row>
        <p></p>
        <Button onClick={() => setHistory([Array(9).fill(null)])}>
            Reset
          </Button>
      
    </Col>
  );
}

// Checks each square if 3 in a row 
function calculateWinner(squares) {
  // possible winning combinations
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
  // checks each line for 3 in a row
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
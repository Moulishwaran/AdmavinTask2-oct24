import React, { useState, useEffect, useRef } from "react";
import "./Game.css";

function GameComponent() {
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [keyword, setKeyword] = useState(null);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);

      if (timeLeft === 0) {
        clearInterval(timer);
        setGameOver(true);
      }
    }, 1000);

    timerRef.current = timer;

    return () => clearInterval(timerRef.current);
  }, [timeLeft]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * 9);
    const randomKeyword = Math.floor(Math.random() * 1000).toString();
    setBoxes(
      boxes.map((box, index) => {
        if (index === randomIndex) {
          return randomKeyword;
        } else {
          return null;
        }
      })
    );
    setKeyword(randomKeyword);

    const timeout = setTimeout(() => {
      setKeyword(null);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const handleClick = (index) => {
    if (keyword && !gameOver) {
      const newBoxes = [...boxes];
      if (boxes[index] === keyword) {
        newBoxes[index] = "HIT";
        setScore((prevScore) => prevScore + 5);
      } else {
        newBoxes[index] = "-2.5";
        setScore((prevScore) => prevScore - 2.5);
      }
      setBoxes(newBoxes);
      setKeyword(null);
    }
  };

  return (
    <div className="game-container">
      <div className="score">Score: {score}</div>
      <div className="timer">Time Left: {timeLeft}</div>
      <div className="grid">
        {boxes.map((box, index) => (
          <button key={index} className="box" onClick={() => handleClick()}>
            {box}
          </button>
        ))}
      </div>
      {gameOver && (
        <div className="game-over">Game Over! Your final score is {score}</div>
      )}
    </div>
  );
}

export default GameComponent;

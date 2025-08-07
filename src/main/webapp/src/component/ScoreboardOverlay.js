import React, { useState, useEffect, useRef } from 'react';
import './ScoreboardOverlay.css';
import {getScorecard} from "../services/scorecard-overlay-service";

const ScoreboardOverlay = () => {
  const [gameData, setGameData] = useState({
    team1: {
      name: 'Player 1',
      score: 0,
      setsWon: 0,
      color: '#ED2939' // Singapore Red
    },
    team2: {
      name: 'Player 2',
      score: 0,
      setsWon: 0,
      color: '#FFFFFF' // Singapore White
    },
    boardNo: 1,
    isActive: true
  });


  const [animatingScores, setAnimatingScores] = useState({
    team1Score: false,
    team2Score: false,
    team1Sets: false,
    team2Sets: false
  });

  const prevGameData = useRef(gameData);

  useEffect(() => {

    // Listen for localStorage changes (communication with controller)
    const handleStorageChange = (e) => {
      if (e.key === 'scoreboardData') {
        const newData = JSON.parse(e.newValue);

        // Check what changed and trigger animations
        const prev = prevGameData.current;
        const animations = {};

        if (prev.team1.score !== newData.team1.score) {
          animations.team1Score = true;
        }
        if (prev.team2.score !== newData.team2.score) {
          animations.team2Score = true;
        }
        if (prev.team1.setsWon !== newData.team1.setsWon) {
          animations.team1Sets = true;
        }
        if (prev.team2.setsWon !== newData.team2.setsWon) {
          animations.team2Sets = true;
        }

        // Set animations
        setAnimatingScores(animations);

        // Clear animations after delay
        setTimeout(() => {
          setAnimatingScores({
            team1Score: false,
            team2Score: false,
            team1Sets: false,
            team2Sets: false
          });
        }, 800);

        setGameData(newData);
        prevGameData.current = newData;
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // Load initial data
    // const savedData = localStorage.getItem('scoreboardData');
    // if (savedData) {
    //   const initialData = JSON.parse(savedData);
    //   setGameData(initialData);
    //   prevGameData.current = initialData;
    // }

    const timer = setInterval(() => {
      getScorecard('1').then(data => {
        console.log(data);
        if (data && data.player1 && data.player2) {
          const initialData = {
            team1: {
              name: data.player1.name,
              score: data.player1.currentScore,
              setsWon: data.player1.noOfSetWins,
              color: '#ED2939' // Singapore Red
            },
            team2: {
              name: data.player2.name,
              score: data.player2.currentScore,
              setsWon: data.player2.noOfSetWins,
              color: '#FFFFFF' // Singapore White
            },
            boardNo: data.noOfBoards,
            isActive: true
          };
          console.log(initialData);
          setGameData(initialData);
          prevGameData.current = gameData;
          console.log("test");
          console.log(prevGameData.current);
          console.log(gameData);
        }

      });
    }, 1000);



    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (!gameData.isActive) {
    return <div className="overlay-container transparent"></div>;
  }

  return (
      <div className="overlay-container">
        {/* SG60 Logo in top left corner */}
        <div className="sg60-logo">
          <img src="/sg60_logo.png" alt="SG60 Logo" />
        </div>

        {/* Happy National Day banner in top center */}
        {/*<div className="national-day-banner">
          <img src="/happy_national_day.png" alt="Happy National Day Singapore" />
        </div>*/}

        {/* ACS Logo in top right corner */}
        <div className="acs-logo">
          <img src="/acs_logo.jpg" alt="ACS Logo" />
        </div>

        <div className="scoreboard-overlay">
          <div className="scoreboard-container">
            <div className={`team-section team-left ${animatingScores.team1Score || animatingScores.team1Sets ? 'score-changed' : ''}`}
                 style={{ '--team-color': gameData.team1.color }}>
              <div className="team-name" style={{ color: gameData.team1.color === '#FFFFFF' ? '#000' : '#fff' }}>
                {gameData.team1.name}
              </div>
              <div className={`team-score ${animatingScores.team1Score ? 'score-animate' : ''}`}
                   style={{ color: gameData.team1.color === '#FFFFFF' ? '#000' : '#fff' }}>
                {gameData.team1.score}
                {animatingScores.team1Score && <div className="score-burst"></div>}
              </div>
              <div className={`team-sets ${animatingScores.team1Sets ? 'sets-animate' : ''}`}
                   style={{ color: gameData.team1.color === '#FFFFFF' ? '#333' : 'rgba(255, 255, 255, 0.9)' }}>
                Sets: {gameData.team1.setsWon}
              </div>
            </div>

            <div className="center-section">
              <div className="board-number">Board {gameData.boardNo}</div>
            </div>

            <div className={`team-section team-right ${animatingScores.team2Score || animatingScores.team2Sets ? 'score-changed' : ''}`}
                 style={{ '--team-color': gameData.team2.color }}>
              <div className="team-name" style={{ color: gameData.team2.color === '#FFFFFF' ? '#000' : '#fff' }}>
                {gameData.team2.name}
              </div>
              <div className={`team-score ${animatingScores.team2Score ? 'score-animate' : ''}`}
                   style={{ color: gameData.team2.color === '#FFFFFF' ? '#000' : '#fff' }}>
                {gameData.team2.score}
                {animatingScores.team2Score && <div className="score-burst"></div>}
              </div>
              <div className={`team-sets ${animatingScores.team2Sets ? 'sets-animate' : ''}`}
                   style={{ color: gameData.team2.color === '#FFFFFF' ? '#333' : 'rgba(255, 255, 255, 0.9)' }}>
                Sets: {gameData.team2.setsWon}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ScoreboardOverlay;
import React, { useState, useEffect } from 'react';
import './ScoreboardController.css';

const ScoreboardController = () => {
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

  useEffect(() => {
    // Load saved data on component mount
    const savedData = localStorage.getItem('scoreboardData');
    if (savedData) {
      setGameData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    // Save data to localStorage whenever gameData changes
    localStorage.setItem('scoreboardData', JSON.stringify(gameData));
  }, [gameData]);

  const updateTeamName = (team, name) => {
    setGameData(prev => ({
      ...prev,
      [team]: { ...prev[team], name }
    }));
  };

  const updateTeamScore = (team, increment) => {
    setGameData(prev => ({
      ...prev,
      [team]: {
        ...prev[team],
        score: Math.max(0, prev[team].score + increment)
      }
    }));
  };

  const updateTeamSets = (team, increment) => {
    setGameData(prev => ({
      ...prev,
      [team]: {
        ...prev[team],
        setsWon: Math.max(0, prev[team].setsWon + increment)
      }
    }));
  };

  const updateTeamColor = (team, color) => {
    setGameData(prev => ({
      ...prev,
      [team]: { ...prev[team], color }
    }));
  };

  const setSingaporeColors = () => {
    setGameData(prev => ({
      ...prev,
      team1: { ...prev.team1, color: '#ED2939' }, // Singapore Red
      team2: { ...prev.team2, color: '#FFFFFF' }  // Singapore White
    }));
  };

  const updateBoardNo = (boardNo) => {
    setGameData(prev => ({
      ...prev,
      boardNo: Math.max(1, parseInt(boardNo) || 1)
    }));
  };

  const resetScores = () => {
    setGameData(prev => ({
      ...prev,
      team1: { ...prev.team1, score: 0 },
      team2: { ...prev.team2, score: 0 }
    }));
  };

  const resetSets = () => {
    setGameData(prev => ({
      ...prev,
      team1: { ...prev.team1, setsWon: 0 },
      team2: { ...prev.team2, setsWon: 0 }
    }));
  };

  const resetAll = () => {
    setGameData(prev => ({
      ...prev,
      team1: { ...prev.team1, score: 0, setsWon: 0 },
      team2: { ...prev.team2, score: 0, setsWon: 0 }
    }));
  };

  const toggleOverlay = () => {
    setGameData(prev => ({
      ...prev,
      isActive: !prev.isActive
    }));
  };

  return (
      <div className="scoreboard-controller">
        <div className="controller-header">
          <h1>Scoreboard Controller</h1>
          <div className="overlay-controls">
            <button
                className={`overlay-toggle ${gameData.isActive ? 'active' : 'inactive'}`}
                onClick={toggleOverlay}
            >
              Overlay: {gameData.isActive ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>

        <div className="controller-grid">
          {/* Team 1 Controls */}
          <div className="team-controls">
            <h2>Player 1</h2>
            <div className="form-group">
              <label>Player Name:</label>
              <input
                  type="text"
                  value={gameData.team1.name}
                  onChange={(e) => updateTeamName('team1', e.target.value)}
                  placeholder="Enter player name"
              />
            </div>
            <div className="form-group">
              <label>Player Color:</label>
              <div className="color-controls">
                <input
                    type="color"
                    value={gameData.team1.color}
                    onChange={(e) => updateTeamColor('team1', e.target.value)}
                />
                <button
                    className="sg-color-btn red"
                    onClick={() => updateTeamColor('team1', '#ED2939')}
                    title="Singapore Red"
                >
                  🇸🇬 Red
                </button>
              </div>
            </div>
            <div className="score-section">
              <label>Score: {gameData.team1.score}</label>
              <div className="score-buttons">
                <button onClick={() => updateTeamScore('team1', 1)}>+1</button>
                <button onClick={() => updateTeamScore('team1', -1)}>-1</button>
                <button onClick={() => updateTeamScore('team1', 5)}>+5</button>
                <button onClick={() => updateTeamScore('team1', -5)}>-5</button>
              </div>
            </div>
            <div className="sets-section">
              <label>Sets Won: {gameData.team1.setsWon}</label>
              <div className="sets-buttons">
                <button onClick={() => updateTeamSets('team1', 1)}>+1 Set</button>
                <button onClick={() => updateTeamSets('team1', -1)}>-1 Set</button>
              </div>
            </div>
          </div>

          {/* Center Controls */}
          <div className="center-controls">
            <h2>Game Controls</h2>
            <div className="form-group">
              <label>Board No:</label>
              <input
                  type="number"
                  value={gameData.boardNo}
                  onChange={(e) => updateBoardNo(e.target.value)}
                  placeholder="Board Number"
                  min="1"
              />
            </div>
            <div className="singapore-controls">
              <button className="singapore-colors-btn" onClick={setSingaporeColors}>
                🇸🇬 Set Singapore Colors
              </button>
            </div>
            <div className="global-controls">
              <button className="reset-button" onClick={resetScores}>
                Reset Scores
              </button>
              <button className="reset-button" onClick={resetSets}>
                Reset Sets
              </button>
              <button className="reset-button reset-all" onClick={resetAll}>
                Reset All
              </button>
            </div>
          </div>

          {/* Team 2 Controls */}
          <div className="team-controls">
            <h2>Player 2</h2>
            <div className="form-group">
              <label>Player Name:</label>
              <input
                  type="text"
                  value={gameData.team2.name}
                  onChange={(e) => updateTeamName('team2', e.target.value)}
                  placeholder="Enter player name"
              />
            </div>
            <div className="form-group">
              <label>Player Color:</label>
              <div className="color-controls">
                <input
                    type="color"
                    value={gameData.team2.color}
                    onChange={(e) => updateTeamColor('team2', e.target.value)}
                />
                <button
                    className="sg-color-btn white"
                    onClick={() => updateTeamColor('team2', '#FFFFFF')}
                    title="Singapore White"
                >
                  🇸🇬 White
                </button>
              </div>
            </div>
            <div className="score-section">
              <label>Score: {gameData.team2.score}</label>
              <div className="score-buttons">
                <button onClick={() => updateTeamScore('team2', 1)}>+1</button>
                <button onClick={() => updateTeamScore('team2', -1)}>-1</button>
                <button onClick={() => updateTeamScore('team2', 5)}>+5</button>
                <button onClick={() => updateTeamScore('team2', -5)}>-5</button>
              </div>
            </div>
            <div className="sets-section">
              <label>Sets Won: {gameData.team2.setsWon}</label>
              <div className="sets-buttons">
                <button onClick={() => updateTeamSets('team2', 1)}>+1 Set</button>
                <button onClick={() => updateTeamSets('team2', -1)}>-1 Set</button>
              </div>
            </div>
          </div>
        </div>

        <div className="preview-section">
          <h3>Preview</h3>
          <div className="scoreboard-preview">
            <div className="team-preview" style={{ backgroundColor: gameData.team1.color }}>
              <div style={{ color: gameData.team1.color === '#FFFFFF' ? '#000' : '#fff' }}>
                {gameData.team1.name}
              </div>
              <div className="preview-score" style={{ color: gameData.team1.color === '#FFFFFF' ? '#000' : '#fff' }}>
                {gameData.team1.score}
              </div>
              <div className="preview-sets" style={{ color: gameData.team1.color === '#FFFFFF' ? '#000' : '#fff' }}>
                Sets: {gameData.team1.setsWon}
              </div>
            </div>
            <div className="center-preview">
              <div>Board {gameData.boardNo}</div>
            </div>
            <div className="team-preview" style={{ backgroundColor: gameData.team2.color }}>
              <div style={{ color: gameData.team2.color === '#FFFFFF' ? '#000' : '#fff' }}>
                {gameData.team2.name}
              </div>
              <div className="preview-score" style={{ color: gameData.team2.color === '#FFFFFF' ? '#000' : '#fff' }}>
                {gameData.team2.score}
              </div>
              <div className="preview-sets" style={{ color: gameData.team2.color === '#FFFFFF' ? '#000' : '#fff' }}>
                Sets: {gameData.team2.setsWon}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ScoreboardController;
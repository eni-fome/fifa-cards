import React from 'react';
import './App.css'; 

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div className="player-card"> {/* Apply the player-card class */}
      <img className="player-image" src={imageUrl} alt={name} /> {/* Apply the player-image class */}
      <div className="player-info"> {/* Apply the player-info class */}
        <h3>{name}</h3>
        <p>Team: {team}</p>
        <p>Nationality: {nationality}</p>
        <p>Jersey Number: {jerseyNumber}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
};

export default Player;

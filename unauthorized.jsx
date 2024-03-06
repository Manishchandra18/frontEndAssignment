import React, { useState } from 'react';

const UnauthorizedGameScreen = () => {
  const [pumps, setPumps] = useState(0);
  const [message, setMessage] = useState('');

  const pumpBalloon = () => {
    if (pumps >= 5) {
      setMessage('Balloon popped! You pumped too much!');
    } else {
      setPumps(pumps + 1);
    }
  };

  return (
    <div>
      <h2>Unauthorized User Game</h2>
      <p>Pump the balloon by clicking on it!</p>
      <div>
        <button onClick={pumpBalloon}>Pump Balloon</button>
      </div>
      <p>Pumps: {pumps}</p>
      <p>{message}</p>
    </div>
  );
};

export default UnauthorizedGameScreen;

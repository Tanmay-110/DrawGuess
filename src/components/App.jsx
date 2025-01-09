import React, { useState } from 'react';

function Game() {
  const [turn, setTurn] = useState(0);
  const players = ['Player 1', 'Player 2'];
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage) {
      setMessages([...messages, { player: players[turn], message: newMessage }]);
      setNewMessage('');
    }
  };

  return (
    <div className="game-container">
      <h2>{players[turn]}'s Turn to Draw</h2>
      <div className="game-board">
        <div className="canvas-container">
          {/* Your canvas component */}
          <Canvas />
        </div>
        <div className="chat-container">
          <Chat messages={messages} />
          <input 
            type="text" 
            value={newMessage} 
            onChange={(e) => setNewMessage(e.target.value)} 
            placeholder="Type a message"
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
      <button onClick={() => setTurn((turn + 1) % players.length)}>Next Turn</button>
    </div>
  );
}

function Chat({ messages }) {
  return (
    <div>
      {messages.map((msg, index) => (
        <div key={index}>
          <strong>{msg.player}: </strong>{msg.message}
        </div>
      ))}
    </div>
  );
}

function Canvas() {
  return <div className="canvas">Drawing Area</div>;
}

export default Game;

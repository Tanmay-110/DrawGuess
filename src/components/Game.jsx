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
    <div>
      <h2>{players[turn]}'s Turn to Draw</h2>
      <Chat messages={messages} />
      <input 
        type="text" 
        value={newMessage} 
        onChange={(e) => setNewMessage(e.target.value)} 
        placeholder="Type a message"
      />
      <button onClick={handleSendMessage}>Send</button>
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

export default Game;

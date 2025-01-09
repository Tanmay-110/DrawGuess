import React from 'react';

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

export default Chat;

// // MessageInput.js

// import { useState } from 'react';

// export function MessageInput({ onSendMessage }) {
//   const [message, setMessage] = useState('');

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSendMessage = () => {
//     if (message.trim() !== '') {
//       onSendMessage(message);
//       setMessage('');
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={message}
//         onChange={handleMessageChange}
//         placeholder="Type a message..."
//       />
//       <button onClick={handleSendMessage}>Send</button>
//     </div>
//   );
// }

// // MessageList.js

// import React from 'react';

// function MessageList({ messages }) {
//   return (
//     <ul>
//       {messages.map((message, index) => (
//         <li key={index}>{message}</li>
//       ))}
//     </ul>
//   );
// }

// export default MessageList;

// // MessageScreen.js

// import React from 'react';
// import MessageInput from './messaging.js';
// import MessageList from './messaging.js';

// export function MessageScreen() {
//   const [messages, setMessages] = useState([]);

//   const handleSendMessage = (message) => {
//     setMessages([...messages, message]);
//   };

//   return (
//     <div>
//       <h1>Message</h1>
//       <MessageList messages={messages} />
//       <MessageInput onSendMessage={handleSendMessage} />
//     </div>
//   );
// }

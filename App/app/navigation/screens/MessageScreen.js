

// MessageScreen.js

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

export default function MessageScreen() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 650 }}>Messaging</Text>
      <MessageList messages={messages} />
      <MessageInput onSendMessage={handleSendMessage} />
    </View>
  );
}


import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function MessageInput({ onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        value={message}
        onChangeText={setMessage}
        placeholder="Type a message..."
      />
      <Button onPress={handleSendMessage} title="Send" />
    </View>
  );
}
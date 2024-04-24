
import React from 'react';
import { View, Text, FlatList } from 'react-native';

export default function MessageList({ messages }) {
  return (
    <View>
      <FlatList
        data={messages}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
import React from 'react';
import { ScrollView } from 'react-native';

import { Message } from '../Message';
import { styles } from './styles';

export function MessageList() {
  const message = {
    id: '1',
    text: 'mensagem de teste', 
    user: {
      name: 'Eronaldo', 
      avatar_url: 'https://github.com/eronheit.png'
    } 
  }

  return(
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps='never'
    >

      {Array(3).fill(message).map((m, index) => (
        <Message key={index} data={m} />
      ))}
    </ScrollView>
  )
}
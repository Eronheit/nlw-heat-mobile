import React, { useState } from 'react';
import { Alert, Keyboard, TextInput, View } from 'react-native';

import { api } from '../../assets/services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';
import { styles } from './styles';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit(){
    const parsedMessage = message.trim();
    
    if(parsedMessage.length > 0) {
      setSendingMessage(true);
      
      await api.post('/messages', { message: parsedMessage });

      setMessage('');

      Keyboard.dismiss();

      setSendingMessage(false);

      Alert.alert('Mensagem enviada')
    } 
    else {
      Alert.alert('Escreva uma mensagem para enviar.');
    }
  }

  return(
    <View style={styles.container}>
      <TextInput 
        keyboardAppearance='dark' 
        placeholder='Qual a sua expectativa para o evento?' 
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
        style={styles.input} 
      />

      <Button 
        title="Enviar mensagem" 
        backgroundColor={COLORS.PINK} 
        color={COLORS.WHITE} 
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      />
    </View>
  );
}
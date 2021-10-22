import React from 'react';
import { View } from 'react-native';

import { Header } from '../../components/Header';
import { useAuth } from '../../components/hooks/auth';
import { MessageList } from '../../components/MessageList';
import { SendMessageForm } from '../../components/SendMessageForm';
import { SignInBox } from '../../components/SignInBox';
import { styles } from './styles'

export function Home() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Header />

      <MessageList />

      {user ? <SendMessageForm /> : <SignInBox />}
    </View>
  )
}
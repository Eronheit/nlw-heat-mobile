import React from 'react';
import { ActivityIndicator, ColorValue, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

type ButtonProps = TouchableOpacityProps &  {
  title: string;
  color: ColorValue;
  backgroundColor: ColorValue;
  icon?: React.ComponentProps<typeof AntDesign>['name'];
  isLoading?: boolean; 
}

export function Button({ color, title, backgroundColor, icon, isLoading = false,  ...rest }: ButtonProps) {
  return( 
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <ActivityIndicator color={color} /> : (
        <>
          <AntDesign name={icon}  style={[styles.icon, { color }]} size={24} />
          <Text style={[styles.title, { color }]}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}
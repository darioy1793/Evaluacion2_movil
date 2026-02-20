import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import { stylesGlobal } from '../theme/styles';

interface Props{
    buttonText:string;
    onPress: () => void;
}


export const Button = ({buttonText, onPress}:Props) => {
  return (
    <TouchableOpacity style={stylesGlobal.boton} onPress={onPress}>
        <Text >{buttonText}</Text>
    </TouchableOpacity>
  )
}

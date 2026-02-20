import React from 'react'
import { KeyboardTypeOptions, TextInput, View } from 'react-native'
import { stylesGlobal } from '../theme/styles'

interface Props {
    placeholder:string;
    keyboardType:KeyboardTypeOptions;
    handleChangeValue:(name:string, value:string)=>void;
    name:string;

}

export const Input = ({placeholder,keyboardType,handleChangeValue,name}:Props) => {
  return (
    <TextInput 
      placeholder={placeholder} 
      keyboardType={keyboardType}
      onChangeText={(value)=>handleChangeValue(name,value)}
      style={stylesGlobal.input}
    />

  )
}


import React from 'react'
import { View } from 'react-native';
import { Button } from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import { Formulario1 } from './Formulario1';

export const Inicio = () => {
    const navigation = useNavigation<any>();
  return (
    <View>
    <Button buttonText='Formulario1' onPress={()=>{navigation.navigate('Formulario1')}}/>
      <Button buttonText='Formulario2' onPress={()=>{navigation.navigate('Formulario2')}}/>
        <Button buttonText='Imagen1' onPress={()=>{navigation.navigate('Imagen1')}}/>
          <Button buttonText='Imagen2' onPress={()=>{navigation.navigate('Imagen2')}}/>
 </View>
  )
}

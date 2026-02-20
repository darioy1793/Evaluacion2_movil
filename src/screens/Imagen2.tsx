import React from 'react'
import { Image, View } from 'react-native';
import { stylesGlobal } from '../theme/styles';

export const Imagen2 = () => {
  return (
    <View>
      <Image style={stylesGlobal.imagen}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFRQjM-wM_nXMA03AGDXgJK3VeX7vtD3ctA&s',
                }}
              />
    </View>
  )
}

import React from 'react'
import { Image, View } from 'react-native';
import { stylesGlobal } from '../theme/styles';

export const Imagen1 = () => {
  return (
   <View>
        <Image style={stylesGlobal.imagen}
          source={{
            uri: 'https://utel.mx/blog/wp-content/uploads/2013/04/shutterstock_99308006.jpg',
          }}
        />
    </View>
  )
}

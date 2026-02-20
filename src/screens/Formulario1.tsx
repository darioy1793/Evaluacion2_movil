import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { Input } from '../components/Input';
import { stylesGlobal } from '../theme/styles';

interface FormDatos{
  num1:string;
  num2:string;
}

export const Formulario1 = () => {
   const [formDatos, setformDatos] = useState<FormDatos>({
    num1:'',
    num2:''
  });
  const [resultado, setResult] = useState<string>();

//funcion para capturar los valores del formulario
const handleChangeValue = (name:string, value:string):void => {
  setformDatos({
    ...formDatos,
    [name]: value
  });
}
//funcion número mayor o iguales.
const handleCalcular = ():void => {
  const {num1, num2} = formDatos; 
  if(num1 < num2){
    setResult('Numero mayor: ' + num2);
  }else if(num1 > num2){
    setResult('Numero mayor: ' + num1);
  }else{
    setResult('Numeros iguales: ' + num1);
  }    
}

  return (
    <View>
      <Text style={stylesGlobal.textMoyor}>Numero Mayor o Igual</Text>
      <Input placeholder='numero 1' keyboardType='number-pad'
      handleChangeValue={handleChangeValue} name='num1'/>
      <Input placeholder='numero 2' keyboardType='number-pad'
      handleChangeValue={handleChangeValue} name='num2'/>
      
      <TouchableOpacity style={stylesGlobal.boton} onPress={handleCalcular}>
        <Text >Calcular</Text>
    </TouchableOpacity>
     <Text >{resultado}</Text>
    </View>
   
  )
}

import { createStackNavigator } from '@react-navigation/stack';
import { Inicio } from '../screens/Inicio';
import { Imagen2 } from '../screens/Imagen2';
import { Imagen1 } from '../screens/Imagen1';
import { Formulario1 } from '../screens/Formulario1';
import { Formulario2 } from '../screens/Formulario2';

const Stack = createStackNavigator();

export const StackNavigator=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Inicio} />
      <Stack.Screen name="Imagen2" component={Imagen2} />
      <Stack.Screen name="Imagen1" component={Imagen1} />
      <Stack.Screen name="Formulario1" component={Formulario1} />
      <Stack.Screen name="Formulario2" component={Formulario2} />
    </Stack.Navigator>
  );
}
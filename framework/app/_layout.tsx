import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import ListaCarros from './screens/listaCarros'

const Stack = createNativeStackNavigator();

export default function HomeLayout() {
  return (

    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="listaCarros" component={ListaCarros} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

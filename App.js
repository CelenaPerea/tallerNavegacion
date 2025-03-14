import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// Pantalla 1
function Screen1({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}/>
      <Text>Pantalla 1</Text>
      <Button 
        title="Ir a Pantalla 2" 
        onPress={() => navigation.navigate('Screen2')} 
      />
    
  );
}

// Pantalla 2
function Screen2({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla 2</Text>
      <Button 
        title="Ir a Pantalla 3" 
        onPress={() => navigation.navigate('Screen3')} 
      />
    </View>
  );
}

// Pantalla 3
function Screen3({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla 3</Text>
      <Button 
        title="Volver a Pantalla 1" 
        onPress={() => navigation.navigate('Screen1')} 
      />
    </View>
  );
}

// Configurar el Stack Navigator
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

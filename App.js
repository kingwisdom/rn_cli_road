import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import AppNavigator from './src/navigation/AppNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import OutstandingTrip from './src/screens/OutstandingTrip';
import LandingScreen from './src/screens/LandingScreen';
import LoginScreen from './src/screens/LoginScreen';

import SplashScreen from "react-native-splash-screen";

const Stack = createStackNavigator();

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide();
  });
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="OutstandingTrip" component={OutstandingTrip} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


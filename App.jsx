import { enableScreens } from 'react-native-screens';
enableScreens();
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './SplashScreen';
import Home from './Home';
import MobileLogin from './MobileLogin';
import OtpVerify from './OtpVerify';

const Stack = createNativeStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="MobileLogin" component={MobileLogin} />
          <Stack.Screen name="OtpVerify" component={OtpVerify} />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: true, 
              headerLeft: () => null, 
              title: 'Home',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

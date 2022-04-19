import React from 'react';
import {
    View,
    Text,
    Button,
    StatusBar,
} from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabScreen from './src/component/BottomTabScreen';
import HomeScreen from './src/screen/HomeScreen';
import AboutScreen from './src/screen/AboutScreen';
import MenuScreen from './src/component/Menu';

const Stack = createNativeStackNavigator();

const App = () => (
      <NavigationContainer>
           <Stack.Navigator initialRouteName="Home">
               <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
               <Stack.Screen name="About" component={AboutScreen} />
           </Stack.Navigator>
      </NavigationContainer>
);
export default App;
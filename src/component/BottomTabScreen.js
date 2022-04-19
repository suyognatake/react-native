import React from 'react';
import {
    View,
    Text,
} from 'react-native'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import ProfileScreen  from '../screen/ProfileScreen';
import DetailsScreen from '../screen/DetailsScreen';
import SettingsScreen from '../screen/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export default function Home() {
    return(
        <Tab.Navigator>
            <Tab.Screen
             name="Home" 
             component={HomeScreen} 
             options={{
                
                 tabBarIcon: ({focused,color,size}) => {
                     return <Ionicons name='home' size={25} color={color}/>
                 },
                 tabBarActiveTintColor:'red',
                 tabBarInactiveTintColor:'green',
            }}
    
             />
            <Tab.Screen 
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarBadge:1000,
                  tabBarIcon: ({focused,color,size}) => {
                      return <Ionicons name='person' size={25} color={color}/>
                  },
                  tabBarActiveTintColor:'red',
                  tabBarInactiveTintColor:'green',
              }}
             />
            <Tab.Screen 
              name="Details"
              component={DetailsScreen}
              options={{
                  tabBarIcon: ({focused,color,size}) => {
                      return <Ionicons name='help' size={25} color={color} 
                      />
                  },
                  tabBarActiveTintColor:'red',
                  tabBarInactiveTintColor:'green',
              }}
              />
            <Tab.Screen 
              name="Settings"
              component={SettingsScreen} 
              options={{
                  tabBarIcon: ({focused,color,size}) => {
                return <Ionicons name='hammer'size={25} color={color}/>;
                  },
                  tabBarActiveTintColor:'red',
                  tabBarInactiveTintColor:'green',

                
              }}
              />
        </Tab.Navigator>
    );
}

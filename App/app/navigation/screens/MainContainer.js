import * as React from 'react';

import {NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import ExploreScreen from './Explore.js';
import ProfileScreen from './Profile.js';
import ExploreProfile from './ExploreProfile.js'

const Explore = 'Explore';
const Profile = 'Profile';
const EP = 'ExploreProfile'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function MainContainer() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={MainTabs} />
          <Stack.Screen name={EP} component={ExploreProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  function MainTabs() {
    return (
      <Tab.Navigator
        initialRouteName={Explore}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
  
            if (rn == Explore) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn == Profile) {
              iconName = focused ? 'settings' : 'settings-outline';
            }
  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false
        })}
      >
        <Tab.Screen name={Explore} component={ExploreScreen} />
        <Tab.Screen
          name={Profile}
          component={ProfileScreen}
          initialParams={{ profilename: 'John Doe' }}
        />
      </Tab.Navigator>
    );
  }
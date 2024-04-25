import * as React from 'react';

import {NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import ExploreScreen from './Explore.js';
import ProfileScreen from './Profile.js';
import ExploreProfile from './ExploreProfile.js';
import ContentScreen from './Content.js';
import MessageScreen from './MessageScreen.js';
import OneVideoScreen from './OneVideoScreen.js';
import Schedule from './Schedule.js';

import colors from '../../../config/colors.js';

const Explore = 'Explore';
const Profile = 'Profile';
const Media = 'Media';
const Message = 'Message';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function MainContainer() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main" component={MainTabs} />
          <Stack.Screen name="ExploreProfile" component={ExploreProfile} />
          <Stack.Screen name="OneVideoScreen" component={OneVideoScreen} />
          <Stack.Screen name="messaging" component={MessageScreen}/>
          <Stack.Screen name="Schedule" component={Schedule}/>
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
            else if(rn == Media){
              iconName = focused? 'play': 'play-outline';
            }
            
             else if (rn == Message) { 
              iconName = focused ? 'chatbox' : 'chatbox-outline';
            }
  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: colors.primary,
            height: 70,
            borderTopWidth: 0.2,
            paddingBottom: 20,
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
        <Tab.Screen name={Media} component={ContentScreen} />
        {/* <Tab.Screen name={Message} component={MessageScreen} /> */}
      </Tab.Navigator>
    );
  }
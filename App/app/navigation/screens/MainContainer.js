import * as React from 'react';

import {NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import ExploreScreen from './Explore.js';
import ProfileScreen from './Profile.js';

const Explore = 'Explore';
const Profile = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={Explore}
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        let rn = route.name;

                        if (rn == Explore) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn == Profile) {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        return <Ionicons name ={iconName} size ={size} color={color}/>
                    },
                })}

                // tabBarOptions={{
                //     activeTintColor: 'tomato',
                //     inactiveTintColor: 'grey',
                //     labelStyle: { paddingBottom: 10, fontSize: 10 },
                //     style: { padding: 10, height: 70 }
                // }}
                >

                <Tab.Screen name={Explore} component={ExploreScreen}/>
                <Tab.Screen name={Profile} component={ProfileScreen}/>
            </Tab.Navigator>
        
        </NavigationContainer>
        
    );
}
import MainContainer from './app/navigation/screens/MainContainer.js';
import Explore from './app/navigation/screens/Explore.js';
import Profile from './app/navigation/screens/Profile.js';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (

    <MainContainer/>
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{headerShown: false}}>
    //     <Stack.Screen name="Explore" component={Explore} />
    //     <Stack.Screen name="Profile" component={Profile} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
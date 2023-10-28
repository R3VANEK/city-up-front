import React from 'react'
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './sites/Home'
import News from './sites/News'



const Stack = createNativeStackNavigator();

export default function App() {


// TESTTESTTEST


  return (  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Polls" component={Home} />
        <Stack.Screen name="City" component={Home} />
        <Stack.Screen name="Profile" component={Home} />
      </Stack.Navigator>
      
    </NavigationContainer>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

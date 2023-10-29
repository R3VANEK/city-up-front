import React from 'react'
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './sites/Home'
import News from './sites/News'
import Polls from './sites/Polls'
import City from './sites/City'
import NewsContent from './sites/NewsContent'



const Stack = createNativeStackNavigator();

export default function App() {




  return (  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Polls" component={Polls} />
        <Stack.Screen name="City" component={City} />
        <Stack.Screen name="Contact" component={Home} />
        <Stack.Screen name="Profile" component={Home} />
        <Stack.Screen name="NewsContent" component={NewsContent} />
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

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './component/WelcomeScreen';
import LoginScreen from './component/Login';
import item from './component/Item';
import LittleLemonHeader from './component/Header';
import LittleLemonFooter from './component/Fotter';
import Logo from './component/Food';
import FeedBack from './component/Feedback';
import Largedata from './component/Item';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#ffd700' },
          headerTintColor: '#000000',
          
          headerTitleStyle: {
            fontWeight: 'bold',
            color:'#000000',
            fontSize:25,
            
          },
          headerTitleAlign: 'center',
          
        
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Menu"
          component={Largedata}
          options={{ title: 'Menu' }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Food"
          component={Logo}
          options={{ title: 'Food' }}
        />
        <Stack.Screen
          name="FeedBack"
          component={FeedBack}
          options={{ title: 'FeedBack' }}
        />
        <Stack.Screen
          name="Item"
          component={item}
          options={{ title: 'Items' }}
        />
        {/* <Stack.Screen
          name="MenuItems"
          component={MenuItems}
          options={{ title: 'MenuItems' }}
        /> */}
        <Stack.Screen
          name="FooterFood"
          component={LittleLemonFooter}
          options={{ title: 'Food Footer' }}
        />
        <Stack.Screen
          name="HeaderFood"
          component={LittleLemonHeader}
          options={{ title: 'Food Header' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
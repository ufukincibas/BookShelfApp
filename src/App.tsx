import '../gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FlashMessage from "react-native-flash-message"

import Login from "./Pages/Auth/Login"
import SignIn from './Pages/Auth/SignIn';
import Home from './Pages/InApp/Home';



const Drawer = createDrawerNavigator();

function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='LoginPage' component={Login}/>
        <Drawer.Screen name='SignInPage' component={SignIn}/>

        <Drawer.Screen name='HomePage' component={Home}/>
      </Drawer.Navigator>
      <FlashMessage position="top" />

    </NavigationContainer>
  )
}

export default App;
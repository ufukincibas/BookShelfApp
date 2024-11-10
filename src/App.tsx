import '../gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from "./Pages/Auth/Login"
import SignIn from './Pages/Auth/SignIn';



const Drawer = createDrawerNavigator();

function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='LoginPage' component={Login}/>
        <Drawer.Screen name='SignInPage' component={SignIn}/>
      </Drawer.Navigator>
    
    </NavigationContainer>
  )
}

export default App;
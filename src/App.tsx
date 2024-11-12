import '../gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FlashMessage from "react-native-flash-message";

import Login from "./Pages/Auth/Login";
import SignIn from './Pages/Auth/SignIn';
import Home from './Pages/InApp/Home';
import FavoritedBooks from './Pages/InApp/FavoritedBooks';
import Profile from './Pages/InApp/Profile';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfilePage" component={Profile} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {/* Auth islemleri */}
        <Drawer.Screen name="LoginPage" component={Login} />
        <Drawer.Screen name="SignInPage" component={SignIn} />

        {/* uygulama içi drawer */}
        <Drawer.Screen name="HomePage" component={Home} />
        <Drawer.Screen name="FavoritedBooksPage" component={FavoritedBooks} />
        
        {/* ProfileStack'i Drawer içinde bir ekran olarak ekledik */}
        <Drawer.Screen name="ProfileStack" component={ProfileStack} />
      </Drawer.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default App;

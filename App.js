import { StatusBar } from 'expo-status-bar';
import React from 'react';

import * as firebase from 'firebase'

const firebaseConfig = {
      apiKey: "AIzaSyBzvBHbRjrHU-S--rXJUOmtKBgshiP46Ek",
      authDomain: "clone-insta-bd98b.firebaseapp.com",
      projectId: "clone-insta-bd98b",
      storageBucket: "clone-insta-bd98b.appspot.com",
      messagingSenderId: "430056287536",
      appId: "1:430056287536:web:52146774eef27424e06cf5",
      measurmentId: "G-DSRPD6QMTE",

};

if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig)

}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/landing'
import RegisterScreen from './components/auth/register'

const Stack = createStackNavigator();
export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName= "landing">
              <Stack.Screen name = "landing" component ={LandingScreen}  options ={{headerShown: false}} />
              <Stack.Screen name = "register" component ={RegisterScreen} />
          </Stack.Navigator>

        </NavigationContainer>

  )
}

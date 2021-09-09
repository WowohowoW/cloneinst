import { StatusBar } from 'expo-status-bar';
import React from 'react';

import {initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"

//Hiding initial code to try out other method
//  const firebaseConfig = {
//        apiKey: "AIzaSyBzvBHbRjrHU-S--rXJUOmtKBgshiP46Ek",
//        authDomain: "clone-insta-bd98b.firebaseapp.com",
//        projectId: "clone-insta-bd98b",
//        storageBucket: "clone-insta-bd98b.appspot.com",
//        messagingSenderId: "430056287536",
//        appId: "1:430056287536:web:52146774eef27424e06cf5",
//        measurementId: "G-DSRPD6QMTE"

// };

const firebaseApp = initializeApp({
      apiKey: "AIzaSyBzvBHbRjrHU-S--rXJUOmtKBgshiP46Ek",
      authDomain: "clone-insta-bd98b.firebaseapp.com",
      projectId: "clone-insta-bd98b",
})
      const db = getFirestore();

//export function initialize(){
//    if (!firebase.apps.legnth){
//      firebase.initializeApp(firebaseConfig);
//    }
//}



import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/landing'
import RegisterScreen from './components/auth/register'

const Stack = createStackNavigator();
export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName= "Landing">
              <Stack.Screen name = "Landing" component ={LandingScreen}  options ={{headerShown: false}} />
              <Stack.Screen name = "Register" component ={RegisterScreen} />
          </Stack.Navigator>

        </NavigationContainer>

  )
}

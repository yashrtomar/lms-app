import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import Homescreen from '../screens/Homescreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigationStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'Lms Login'}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{title: 'Lms Sign Up'}}
      />
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{title: 'Lms Home'}}
      />
    </Stack.Navigator>
  );
}

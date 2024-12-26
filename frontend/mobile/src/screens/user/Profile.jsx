import {StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/features/auth/authSlice';

export default function Profile({navigation}) {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('user');
      dispatch(logout());
      // navigation.reset({
      //   index: 0,
      //   routes: [{name: 'Auth.Login'}],
      // });
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
    <View>
      <Text>Profile</Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: 'red',
          backgroundColor: 'red',
          padding: 16,
        }}>
        <TouchableNativeFeedback onPress={handleLogout}>
          <Text style={{color: 'white'}}>logout</Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

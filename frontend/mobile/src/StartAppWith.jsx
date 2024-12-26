import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigationStack from './navigation/AppNavigationStack';
import AuthNavigationStack from './navigation/AuthNavigationStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text} from 'react-native';

const StartAppWith = () => {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        setToken(storedToken); // Set the token in state
      } catch (error) {
        console.error('Error fetching token:', error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching
      }
    };

    fetchToken();
  }, []);

  // Show a loading screen while fetching the token
  if (isLoading) {
    return <Text>Loading...</Text>; // You can customize this loading screen
  }

  return (
    <NavigationContainer>
      {token ? <AppNavigationStack /> : <AuthNavigationStack />}
    </NavigationContainer>
  );
};

export default StartAppWith;

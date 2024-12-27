import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveToAsyncStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error saving data to AsyncStorage', error);
  }
};

export const getFromAsyncStorage = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  } catch (error) {
    console.error('Error reading data from AsyncStorage', error);
    return null;
  }
};

export const removeFromAsyncStorage = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing data from AsyncStorage', error);
  }
};

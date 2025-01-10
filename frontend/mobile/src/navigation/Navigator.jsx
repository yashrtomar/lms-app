import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Homescreen from '../screens/Homescreen';
import Search from '../screens/search/Search';
import Notifications from '../screens/notifications/Notifications';
import Profile from '../screens/user/Profile';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import {getFromAsyncStorage} from '../utils/AsyncStorage';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../redux/features/auth/authSlice';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from '@react-native-vector-icons/ionicons';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

function splashScreen() {
  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true} // for Android
      />
      <SafeAreaView style={{flex: 1, height: '100%'}}>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../assets/images/auth-bg.jpg')}
            style={[styles.backgroundImage, {flex: 1}]}
            resizeMode="cover">
            <View
              style={{
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ActivityIndicator color={'white'} size={'large'} />
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
}

function MainAppNavigation() {
  const tabBarItems = [
    {
      id: 0,
      name: 'Home',
      component: Homescreen,
      title: 'Home',
      iconName: 'home-outline',
      iconNameFocused: 'home',
    },
    {
      id: 1,
      name: 'Search',
      component: Search,
      title: 'Search',
      iconName: 'search-outline',
      iconNameFocused: 'search',
    },
    {
      id: 2,
      name: 'Notifications',
      component: Notifications,
      title: 'Notifications',
      iconName: 'notifications-outline',
      iconNameFocused: 'notifications',
    },
    {
      id: 3,
      name: 'Profile',
      component: Profile,
      title: 'Profile',
      iconName: 'person-outline',
      iconNameFocused: 'person',
    },
  ];

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'fade',
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: '#0077B5',
        tabBarInactiveTintColor: '',
      }}>
      {tabBarItems.map(item => {
        return (
          <BottomTab.Screen
            key={item.id}
            name={item.name}
            component={item.component}
            options={{
              title: item.title,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <Icon
                  name={focused ? item.iconNameFocused : item.iconName}
                  color={focused ? '#0077b5' : ''}
                  size={20}
                />
              ),
            }}
          />
        );
      })}
    </BottomTab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="sign-up" component={SignUp} />
    </Stack.Navigator>
  );
}

const Navigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  const dispatch = useDispatch();

  const token = useSelector(state => state.authReducer.token);
  const user = useSelector(state => state.authReducer.user);

  useEffect(() => {
    const loadAuthData = async () => {
      try {
        const storedToken = await getFromAsyncStorage('token');
        const storedUser = await getFromAsyncStorage('user');

        if (storedToken && storedUser) {
          setIsAuthenticated(true);
          dispatch(login({token: storedToken, user: storedUser}));
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error loading auth data from AsyncStorage:', error);
        setIsAuthenticated(false);
      }
    };

    loadAuthData();
  }, [token, user]);

  if (isAuthenticated === null) {
    return splashScreen();
  }

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainAppNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  tabBarStyle: {
    height: 62,
    paddingTop: 12,
    paddingInline: 8,
    paddingBottom: 0,
  },
});

export default Navigator;

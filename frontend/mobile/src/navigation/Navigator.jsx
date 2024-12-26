import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from '../screens/Homescreen';
import Search from '../screens/search/Search';
import Notifications from '../screens/notifications/Notifications';
import Profile from '../screens/user/Profile';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import Ionicons from '@react-native-vector-icons/ionicons';
import {setTokenAndUser} from '../redux/features/auth/authSlice';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainAppBottomTabNavigator() {
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
    <Tab.Navigator
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
          <Tab.Screen
            key={item.id}
            name={item.name}
            component={item.component}
            options={{
              title: item.title,
              tabBarShowLabel: false,
              tabBarIcon: ({focused}) => (
                <Ionicons
                  name={focused ? item.iconNameFocused : item.iconName}
                  color={focused ? '#0077b5' : ''}
                  size={20}
                />
              ),
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

function AuthStackNavigator() {
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
    </Stack.Navigator>
  );
}

export default function Navigator() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        const storedUser = await AsyncStorage.getItem('user');

        if (storedToken && storedUser) {
          setToken(storedToken); // Set the token in state
          setUser(JSON.parse(storedUser)); // Set the user in state
        }

        dispatch(setTokenAndUser({token, user})); // Dispatch after token and user are set
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
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
        {token ? (
          <Stack.Screen name="MainApp" component={MainAppBottomTabNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStackNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 62,
    paddingTop: 12,
    paddingInline: 8,
    paddingBottom: 0,
  },
});

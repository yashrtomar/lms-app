import React from 'react';
import Homescreen from '../screens/Homescreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from '@react-native-vector-icons/ionicons';
import Search from '../screens/search/Search';
import Notifications from '../screens/notifications/Notifications';
import Profile from '../screens/user/Profile';
import {StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator();

export default function AppNavigationStack() {
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

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 62,
    paddingTop: 12,
    paddingInline: 8,
    paddingBottom: 0,
  },
});

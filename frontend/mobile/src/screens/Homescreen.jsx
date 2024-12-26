import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useGetCoursesQuery} from '../redux/features/courses/coursesApi';
import {useDispatch} from 'react-redux';
import {setTokenAndUser} from '../redux/features/auth/authSlice';
import Header from '../components/ui/Header';
import PillShapedOutlined from '../components/buttons/PillShapedOutlined';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Homescreen() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthStatus = async () => {
      const storedToken = await AsyncStorage.getItem('token');
      const storedUser = await AsyncStorage.getItem('user');
      if (storedToken && storedUser) {
        setToken(storedToken);
        setUser(JSON.parse(storedUser));

        // Token exists, set it in Redux
        dispatch(setTokenAndUser({token, user}));
      }
    };

    checkAuthStatus();
  }, [dispatch]);

  const {data: response, isLoading, error} = useGetCoursesQuery();
  const courses = response?.data;

  if (isLoading) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView>
        <Text style={{color: 'red'}}>Error</Text>
      </SafeAreaView>
    );
  }

  return (
    <>
      <StatusBar
        backgroundColor="#0077b5" // for Android
      />
      <SafeAreaView>
        <View style={[styles.greeting, styles.container]}>
          <Text style={styles.textWhite}>Hello there,</Text>
          <Text style={[styles.textWhite, {fontSize: 24, fontWeight: '900'}]}>
            Yashvardhan !
          </Text>
        </View>
        {token ? (
          <View style={styles.container}>
            <Header text={'Continue Learning'} />
          </View>
        ) : (
          ''
        )}
        <View style={[styles.container, styles.flex]}>
          <Header text="Explore Categories" />
          <ScrollView horizontal style={{gap: 8}}>
            <PillShapedOutlined
              text={'web development'}
              styling={{marginEnd: 8}}
            />
            <PillShapedOutlined text={'javascript'} styling={{marginEnd: 8}} />
            <PillShapedOutlined text={'node'} styling={{marginEnd: 8}} />
            <PillShapedOutlined text={'ai'} styling={{marginEnd: 8}} />
            <PillShapedOutlined
              text={'web development'}
              styling={{marginEnd: 8}}
            />
            <PillShapedOutlined text={'react'} styling={{marginEnd: 8}} />
            <PillShapedOutlined
              text={'machine learning'}
              styling={{marginEnd: 8}}
            />
            <View style={{width: 24}}></View>
          </ScrollView>
        </View>
        <View>
          {courses && courses.length > 0 ? (
            courses.map(course => {
              return (
                <View key={course._id}>
                  <Text>{course.courseTitle}</Text>
                </View>
              );
            })
          ) : (
            <Text>No courses available.</Text>
          )}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBlock: 24,
    paddingStart: 24,
  },
  flex: {
    display: 'flex',
    gap: 16,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  textWhite: {
    color: 'white',
  },
  textPrimary: {
    color: '#0077B5',
  },
  greeting: {
    backgroundColor: '#0077B5',
  },
});

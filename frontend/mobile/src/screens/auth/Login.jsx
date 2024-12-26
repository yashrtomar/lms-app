import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';
import {useLoginMutation} from '../../redux/features/auth/authApi';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/features/auth/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState('');
  const [secureText, setSecureText] = useState(true);

  const [userLogin, {isLoading, isError, error, isSuccess}] =
    useLoginMutation();

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await userLogin({email, password}).unwrap();

      console.log(response);

      const user = {
        name: response.data.name,
        email: response.data.email,
        role: response.data.role,
        profilePicture: response.data.profilePicture,
        coursesEnrolledIn: response.data.coursesEnrolledIn,
        coursesCreated: response.data.coursesCreated,
        savedCourses: response.data.savedCourses,
      };

      await AsyncStorage.setItem('token', response.token);
      await AsyncStorage.setItem('user', JSON.stringify(user));

      if (response.user && response.token) {
        dispatch(login({user: response.user, token: response.token}));
      }
      // navigation.replace('MainApp', {screen: 'Home'});
    } catch (err) {
      console.error('Login failed:', err);
    }
  };

  return (
    <>
      <StatusBar
        backgroundColor="transparent"
        translucent={true} // for Android
      />
      <SafeAreaView style={{flex: 1, height: '100%'}}>
        <View style={{flex: 1}}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <ImageBackground
              source={require('../../assets/images/auth-bg.jpg')}
              style={[styles.backgroundImage, {flex: 1}]}
              resizeMode="cover">
              <View style={styles.container}>
                <View style={styles.loginFormContainer}>
                  <Text style={styles.headerText}>Login</Text>
                  <View
                    style={[
                      styles.textInput,
                      isFocused === 'email' && styles.focusBorder,
                    ]}>
                    <TextInput
                      placeholder="email"
                      onFocus={() => setIsFocused('email')}
                      onChangeText={setEmail}
                      value={email}
                      style={styles.textWhite}
                    />
                  </View>
                  <View>
                    <View
                      style={[
                        styles.textInput,
                        isFocused === 'password' && styles.focusBorder,
                      ]}>
                      <TextInput
                        placeholder="password"
                        onFocus={() => setIsFocused('password')}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={secureText}
                        style={styles.textWhite}
                      />
                      {secureText ? (
                        <Ionicons
                          name="eye-outline"
                          size={20}
                          color="white"
                          style={styles.toggleSecureTextIcon}
                          onPress={() => setSecureText(!secureText)}
                        />
                      ) : (
                        <Ionicons
                          name="eye-off-outline"
                          size={20}
                          color="white"
                          style={styles.toggleSecureTextIcon}
                          onPress={() => setSecureText(!secureText)}
                        />
                      )}
                    </View>
                    <Text style={[styles.textWhite, styles.forgotPasswordText]}>
                      Forgot password ?
                    </Text>
                  </View>
                  <View>
                    {isError && (
                      <Text style={styles.errorText}>
                        {error?.data?.message}
                      </Text>
                    )}
                  </View>
                  {Platform.OS === 'android' ? (
                    <View style={{borderRadius: 50, overflow: 'hidden'}}>
                      <TouchableNativeFeedback
                        onPress={handleLogin}
                        disabled={isLoading}>
                        <View style={styles.loginButton}>
                          <Text style={styles.textWhite}>
                            {isLoading ? 'Logging in...' : 'Login'}
                          </Text>
                        </View>
                      </TouchableNativeFeedback>
                    </View>
                  ) : (
                    <TouchableHighlight
                      onPress={handleLogin}
                      disabled={isLoading}>
                      <View>
                        <Text style={styles.textWhite}>
                          {isLoading ? 'Logging in...' : 'Login'}
                        </Text>
                      </View>
                    </TouchableHighlight>
                  )}
                  <View>
                    <Text
                      style={[
                        styles.textWhite,
                        {textAlign: 'center', marginBottom: 4},
                      ]}>
                      or continue with
                    </Text>
                    <View style={styles.OAuthIconsContainer}>
                      <View>
                        <Image
                          source={require('../../assets/icons/login-with/google.png')}
                          resizeMode="contain"
                          style={{width: 36}}
                        />
                      </View>
                      <View>
                        <Image
                          source={require('../../assets/icons/login-with/facebook.png')}
                          resizeMode="contain"
                          style={{width: 36}}
                        />
                      </View>
                      <View>
                        <Image
                          source={require('../../assets/icons/login-with/apple.png')}
                          resizeMode="contain"
                          style={{width: 36}}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{marginBottom: 36}}>
                  <Text style={[styles.textWhite, {textAlign: 'center'}]}>
                    Don't have an account ?{' '}
                    <Text
                      style={{
                        color: '#0077B5',
                        fontWeight: 'bold',
                        textDecorationLine: 'underline',
                      }}
                      onPress={() => navigation.replace('SignUp')}>
                      Sign Up!
                    </Text>
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    paddingBottom: 0,
  },
  loginFormContainer: {
    flex: 1,
    gap: 32,
    justifyContent: 'center',
    width: '100%',
    padding: 40,
  },
  textWhite: {
    color: 'white',
  },
  headerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 36,
    marginBottom: 64,
  },
  textInput: {
    paddingInline: 4,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  focusBorder: {
    borderBottomColor: '#0077B5',
  },
  toggleSecureTextIcon: {
    position: 'absolute',
    top: 12,
    right: 8,
  },
  loginButton: {
    padding: 16,
    borderRadius: 50,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#0077B5',
  },
  forgotPasswordText: {
    textAlign: 'right',
    marginTop: 12,
  },
  OAuthIconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

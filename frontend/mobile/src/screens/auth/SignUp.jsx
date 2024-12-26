import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from '@react-native-vector-icons/ionicons';

export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState('');
  const [secureText, setSecureText] = useState(true);

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <ImageBackground
            source={require('../../assets/images/auth-bg.jpg')}
            style={styles.backgroundImage}
            resizeMode="cover">
            <View style={styles.container}>
              <View style={styles.signUpFormContainer}>
                <Text style={styles.headerText}>Sign Up</Text>
                <View
                  style={[
                    styles.textInput,
                    isFocused === 'name' && styles.focusBorder,
                  ]}>
                  <TextInput
                    placeholder="name"
                    onFocus={() => setIsFocused('name')}
                    onChange={emailText => setEmail(emailText)}
                    value={email}
                    style={styles.textWhite}
                  />
                </View>
                <View
                  style={[
                    styles.textInput,
                    isFocused === 'email' && styles.focusBorder,
                  ]}>
                  <TextInput
                    placeholder="email"
                    onFocus={() => setIsFocused('email')}
                    onChange={emailText => setEmail(emailText)}
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
                      onChange={passwordText => setPassword(passwordText)}
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
                {/* <View>
                  {loginMutation.isError && (
                    <Text style={styles.errorText}>
                      {loginMutation.error.message}
                    </Text>
                  )}
                </View> */}
                {Platform.OS === 'android' ? (
                  <View style={{borderRadius: 50, overflow: 'hidden'}}>
                    <TouchableNativeFeedback>
                      <View style={styles.SignUpButton}>
                        <Text style={styles.textWhite}>Sign Up</Text>
                      </View>
                    </TouchableNativeFeedback>
                  </View>
                ) : (
                  <TouchableHighlight>
                    <View>
                      <Text style={styles.textWhite}>Sign Up</Text>
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
                  Already have an account ?{' '}
                  <Text
                    style={{
                      color: '#0077B5',
                      fontWeight: 'bold',
                      textDecorationLine: 'underline',
                    }}
                    onPress={() => navigation.replace('Login')}>
                    Login!
                  </Text>
                </Text>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
  },
  signUpFormContainer: {
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
    marginBottom: 32,
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
  SignUpButton: {
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
});

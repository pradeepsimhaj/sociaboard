import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, BackHandler } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';

const SignupScreen = ({ navigation }) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp(); // Exit the app
      return true; // Prevent default back navigation
    });

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Signup</Text>
      <TextInput
        label="Email"
        mode="outlined"
        style={styles.input}
        theme={{ colors: { primary: '#fff' } }}
      />
      <TextInput
        label="Password"
        mode="outlined"
        style={styles.input}
        secureTextEntry
        theme={{ colors: { primary: '#fff' } }}
      />
      <TextInput
        label="Confirm Password"
        mode="outlined"
        style={styles.input}
        secureTextEntry
        theme={{ colors: { primary: '#fff' } }}
      />
      <Button mode="contained" style={styles.button} labelStyle={styles.buttonText}>
        Sign up
      </Button>
      <View style={styles.signupContainer}>
  <Text style={styles.signupText}>Already have an Account?</Text>
  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
    <Text style={styles.signupLink}>Sign in</Text>
  </TouchableOpacity>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    padding: 20,
  },
  logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    marginVertical: 10,
    backgroundColor: 'transparent',
    color: '#fff',
  },
  button: {
    width: '80%',
    backgroundColor: '#f5a623',
    borderRadius: 25,
    paddingVertical: 5,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  signupContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    color: '#fff',
    marginTop: 20,
  },
  signupLink: {
    color: '#f5a623',
    marginTop: 5,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;

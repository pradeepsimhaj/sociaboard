// import React, { useEffect } from 'react';
// import { View, StyleSheet, Dimensions, TouchableOpacity, Image, BackHandler } from 'react-native';
// import { TextInput, Button, Text } from 'react-native-paper';
// import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

// const LoginScreen = ({ navigation }) => {
//   useEffect(() => {
//     const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
//       BackHandler.exitApp(); // Exit the app
//       return true; // Prevent default back navigation
//     });

//     return () => backHandler.remove();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Image source={require('../assets/logo.png')} style={styles.logo} />
//       <Text style={styles.title}>Login</Text>
//       <TextInput
//         label="Email"
//         mode="outlined"
//         style={styles.input}
//         theme={{ colors: { primary: '#fff' } }}
//       />
//       <TextInput
//         label="Password"
//         mode="outlined"
//         style={styles.input}
//         secureTextEntry
//         theme={{ colors: { primary: '#fff' } }}
//       />
//       <Text style={styles.forgot}>Forgot Password?</Text>
//       <Button mode="contained" style={styles.button} labelStyle={styles.buttonText}>
//         Sign in
//       </Button>
//       <Text style={styles.or}>or</Text>
//       <GoogleSigninButton
//         style={styles.googleButton}
//         size={GoogleSigninButton.Size.Wide}
//         color={GoogleSigninButton.Color.Dark}
//         onPress={() => console.log('Google Sign-In')}
//       />
//       <Text style={styles.signupText}>
//         Don't have an Account?{' '}
//         <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//           <Text style={styles.signupLink}>Signup</Text>
//         </TouchableOpacity>
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#1a1a1a',
//     padding: 20,
//   },
//   logo: {
//     width: 200,
//     height: 100,
//     resizeMode: 'contain',
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 32,
//     color: '#fff',
//     marginBottom: 20,
//   },
//   input: {
//     width: '80%',
//     marginVertical: 10,
//     backgroundColor: 'transparent',
//     color: '#fff',
//   },
//   forgot: {
//     color: '#fff',
//     alignSelf: 'flex-end',
//     marginRight: '10%',
//     marginVertical: 5,
//   },
//   button: {
//     width: '80%',
//     backgroundColor: '#f5a623',
//     borderRadius: 25,
//     paddingVertical: 5,
//     marginVertical: 10,
//   },
//   buttonText: {
//     fontSize: 16,
//     color: '#fff',
//   },
//   or: {
//     color: '#fff',
//     marginVertical: 10,
//   },
//   googleButton: {
//     width: '80%',
//     height: 48,
//   },
//   signupText: {
//     color: '#fff',
//     marginTop: 20,
//   },
//   signupLink: {
//     color: '#f5a623',
//   },
// });

// export default LoginScreen;








import React, { useEffect } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Image, BackHandler } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';

const LoginScreen = ({ navigation }) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp();
      return true;
    });

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo2.png')} style={styles.logo} />
      <Text style={styles.title}>Login</Text>
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
       <View style={styles.forgotContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View> 
      <Button
        mode="contained"
        style={styles.button}
        labelStyle={styles.buttonText}
        onPress={() => navigation.replace('Home')}
      >
        Sign in
      </Button>
      <Text style={styles.or}>or</Text>
      <GoogleSigninButton
        style={styles.googleButton}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => console.log('Google Sign-In')}
      />
      <View style={styles.signupContainer}>
  <Text style={styles.signupText}>Don't have an Account?</Text>
  <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
    <Text style={styles.signupLink}>Signup</Text>
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
  forgotContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  forgot: {
    color: '#00bb11',
    alignItems: 'flex-end',
    marginRight: '5%',
    marginVertical: 5,
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
  or: {
    color: '#fff',
    marginVertical: 10,
  },
  googleButton: {
    width: '80%',
    height: 48,
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

export default LoginScreen;

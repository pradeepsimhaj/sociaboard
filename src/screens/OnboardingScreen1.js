import React, { useEffect } from 'react';
import { View, Text, StyleSheet, BackHandler } from 'react-native';
import { Button } from 'react-native-paper';

const OnboardingScreen1 = ({ navigation }) => {
  // Handle mobile back button to exit the app
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      BackHandler.exitApp(); // Exit the app
      return true; // Prevent default back navigation
    });

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ScientLabs</Text>
      <Text style={styles.description}>
        Discover the future of innovation with ScientLabs. Let’s get started!
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          mode="text"
          onPress={() => navigation.replace('Login')} // Skip to login
          labelStyle={styles.buttonText}
        >
          Skip
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Onboarding2')} // Next screen
          style={styles.nextButton}
          labelStyle={styles.buttonText}
        >
          Next
        </Button>
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
  title: {
    fontSize: 28,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  nextButton: {
    backgroundColor: '#f5a623',
    borderRadius: 25,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default OnboardingScreen1;

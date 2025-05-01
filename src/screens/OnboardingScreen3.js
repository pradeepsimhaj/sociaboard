import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const OnboardingScreen3 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ready to Begin</Text>
      <Text style={styles.description}>
        Join ScientLabs today and start your journey with us!
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          mode="text"
          onPress={() => navigation.goBack()} // Go back to Onboarding2
          labelStyle={styles.buttonText}
        >
          Back
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.replace('Login')} // Go to login
          style={styles.nextButton}
          labelStyle={styles.buttonText}
        >
          Login
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

export default OnboardingScreen3;

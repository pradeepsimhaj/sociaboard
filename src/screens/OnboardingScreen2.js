import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const OnboardingScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore Features</Text>
      <Text style={styles.description}>
        Unlock powerful tools and features to enhance your experience with ScientLabs.
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          mode="text"
          onPress={() => navigation.goBack()} // Go back to Onboarding1
          labelStyle={styles.buttonText}
        >
          Back
        </Button>
        <View style={styles.rightButtons}>
          <Button
            mode="text"
            onPress={() => navigation.replace('Login')} // Skip to login
            labelStyle={styles.buttonText}
          >
            Skip
          </Button>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Onboarding3')} // Next screen
            style={styles.nextButton}
            labelStyle={styles.buttonText}
          >
            Next
          </Button>
        </View>
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
  rightButtons: {
    flexDirection: 'row',
  },
  nextButton: {
    backgroundColor: '#f5a623',
    borderRadius: 25,
    paddingVertical: 5,
    marginLeft: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default OnboardingScreen2;

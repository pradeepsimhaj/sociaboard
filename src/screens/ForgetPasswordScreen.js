import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Modal, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const ForgotPasswordScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  // Handle button press to show popup and redirect after 3 seconds
  const handleResetPassword = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigation.replace('Login');
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.description}>
        If you forgot your password, please enter your email or mobile no to send the reset link
      </Text>
      <TextInput
        label="Email or Mobile No"
        mode="outlined"
        style={styles.input}
        placeholder="Please enter your email or mobile no"
        theme={{ colors: { primary: '#fff' } }}
      />
      <Button
        mode="contained"
        style={styles.button}
        labelStyle={styles.buttonText}
        onPress={handleResetPassword}
      >
        Reset Password
      </Button>

      {/* Popup Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}} // No action on close (auto-closes after 3s)
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>You got an email to reset your password</Text>
          </View>
        </View>
      </Modal>
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
  description: {
    color: '#fff',
    width: '80%',
    textAlign: 'center',
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    color: '#1a1a1a',
  },
});

export default ForgotPasswordScreen;

// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { Icon } from 'react-native-vector-icons/Ionicons';

// const ProfileScreen = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.avatarContainer}>
//         <Image
//           source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual avatar URL or local image
//           style={styles.avatar}
//         />
//         <Text style={styles.username}>Chaitanya</Text>
//       </View>
//       <View style={styles.field}>
//         <Text style={styles.label}>Name</Text>
//         <Text style={styles.value}>Chaitanya</Text>
//       </View>
//       <View style={styles.field}>
//         <Text style={styles.label}>Email</Text>
//         <Text style={styles.value}>chaitanya@example.com</Text>
//       </View>
//       <View style={styles.field}>
//         <Text style={styles.label}>Phone Number</Text>
//         <Text style={styles.value}>+91 9876543210</Text>
//       </View>
//       <View style={styles.field}>
//         <Text style={styles.label}>Password</Text>
//         <Text style={styles.value}>********</Text>
//       </View>
//       <TouchableOpacity style={styles.settingsButton}>
//         {/* <Icon name="settings" size={24} color="#fff" /> */}
//         <Text style={styles.settingsText}>Settings</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#d3a4e9', // Matching the profile page background from image 3
//     padding: 20,
//   },
//   avatarContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   avatar: {
//     width: 100,
//     height: 100,
//     borderRadius: 50,
//   },
//   username: {
//     fontSize: 24,
//     color: '#fff',
//     marginTop: 10,
//   },
//   field: {
//     backgroundColor: 'rgba(255, 255, 255, 0.8)',
//     padding: 10,
//     borderRadius: 10,
//     marginBottom: 10,
//   },
//   label: {
//     fontSize: 16,
//     color: '#555',
//   },
//   value: {
//     fontSize: 18,
//     color: '#333',
//   },
//   settingsButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#a856c6',
//     padding: 10,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   settingsText: {
//     color: '#fff',
//     fontSize: 18,
//     marginLeft: 10,
//   },
// });

// export default ProfileScreen;



import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('Chaitanya');
  const [email, setEmail] = useState('chaitanya@example.com');
  const [phone, setPhone] = useState('+91 9876543210');
  const [prevPassword, setPrevPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedField, setSelectedField] = useState('');
  // Move FieldBox outside of ProfileScreen
  const FieldBox = ({ label, value, onPress }) => (
    <TouchableOpacity style={styles.fieldBox} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );

  const renderModalContent = () => {
    switch (selectedField) {
      case 'Name':
        return (
          <>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter new name"
            />
            <TouchableOpacity style={styles.updateButton}>
              <Text style={styles.updateButtonText}>Update Name</Text>
            </TouchableOpacity>
          </>
        );
      case 'Email':
        return (
          <>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter new email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TouchableOpacity style={styles.updateButton}>
              <Text style={styles.updateButtonText}>Update Email</Text>
            </TouchableOpacity>
          </>
        );
      case 'Phone Number':
        return (
          <>
            <TextInput
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter new phone number"
              keyboardType="phone-pad"
            />
            <TouchableOpacity style={styles.updateButton}>
              <Text style={styles.updateButtonText}>Update Phone</Text>
            </TouchableOpacity>
          </>
        );
      case 'Password':
        return (
          <>
            <TextInput
              style={styles.input}
              value={prevPassword}
              onChangeText={setPrevPassword}
              placeholder="Previous Password"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="New Password"
              secureTextEntry
            />
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm New Password"
              secureTextEntry
            />
            <TouchableOpacity style={styles.updateButton}>
              <Text style={styles.updateButtonText}>Change Password</Text>
            </TouchableOpacity>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with actual avatar URL or local image
          style={styles.avatar}
        />
        <Text style={styles.username}>Chaitanya</Text>
      </View>
      <FieldBox label="Name" value={name} onPress={() => { setSelectedField('Name'); setModalVisible(true); }} />
      <FieldBox label="Email" value={email} onPress={() => { setSelectedField('Email'); setModalVisible(true); }} />
      <FieldBox label="Phone Number" value={phone} onPress={() => { setSelectedField('Phone Number'); setModalVisible(true); }} />
      <FieldBox label="Password" value="********" onPress={() => { setSelectedField('Password'); setModalVisible(true); }} />
      <TouchableOpacity style={styles.settingsButton}>
        <Text style={styles.settingsText}>Settings</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {renderModalContent()}
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3a4e9',
    padding: 20,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    fontSize: 24,
    color: '#fff',
    marginTop: 10,
  },
  fieldBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 18,
    color: '#333',
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#a856c6',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  settingsText: {
    color: '#fff',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  updateButton: {
    backgroundColor: '#a856c6',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default ProfileScreen;

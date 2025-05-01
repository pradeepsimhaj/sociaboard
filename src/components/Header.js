
// import React, { useState } from 'react';
// import { View, TouchableOpacity, StyleSheet, Image, Text, Modal } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// const Header = ({ navigation }) => {
//   const route = useRoute();
//   const isProfileScreen = route.name === 'Profile';
//   const isHomeScreen = route.name === 'Home';
//   const [logoutModalVisible, setLogoutModalVisible] = useState(false);

//   return (
//     <View style={styles.header}>
//       {/* Left Side: Logo or Back Button */}
//       {isHomeScreen ? (
//         <Image source={require('../assets/logo.png')} style={styles.logo} />
//       ) : (
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={styles.icon}>back</Text> {/* Placeholder for back icon */}
//         </TouchableOpacity>
//       )}

//       {/* Right Side: Profile Icon or Logout Icon */}
//       {isProfileScreen ? (
//         <TouchableOpacity onPress={() => setLogoutModalVisible(true)}>
//           <Text style={styles.icon}>🚪</Text> {/* Placeholder for logout icon */}
//         </TouchableOpacity>
//       ) : (
//         <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
//           <Text style={styles.icon}>👤</Text> {/* Placeholder for profile icon */}
//         </TouchableOpacity>
//       )}

//       {/* Logout Confirmation Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={logoutModalVisible}
//         onRequestClose={() => setLogoutModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>Are you sure you want to logout?</Text>
//             <View style={styles.modalButtons}>
//               <TouchableOpacity
//                 style={styles.modalButton}
//                 onPress={() => {
//                   setLogoutModalVisible(false);
//                   navigation.replace('Login');
//                 }}
//               >
//                 <Text style={styles.modalButtonText}>Yes</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.modalButton, styles.cancelButton]}
//                 onPress={() => setLogoutModalVisible(false)}
//               >
//                 <Text style={styles.modalButtonText}>No</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#f5a623',
//     padding: 10,
//     height: 60,
//   },
//   logo: {
//     width: 100,
//     height: 50,
//     resizeMode: 'contain',
//   },
//   icon: {
//     fontSize: 24,
//     color: '#fff',
//     marginHorizontal: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     width: '80%',
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 18,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   modalButton: {
//     backgroundColor: '#f5a623',
//     padding: 10,
//     borderRadius: 5,
//     flex: 1,
//     marginHorizontal: 5,
//     alignItems: 'center',
//   },
//   cancelButton: {
//     backgroundColor: '#ccc',
//   },
//   modalButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default Header;







// import React, { useState } from 'react';
// import { View, TouchableOpacity, StyleSheet, Image, Text, Modal } from 'react-native';
// import { useRoute } from '@react-navigation/native';

// const Header = ({ navigation }) => {
//   const route = useRoute();
//   const isProfileScreen = route.name === 'Profile';
//   const isHomeScreen = route.name === 'Home';
//   const [logoutModalVisible, setLogoutModalVisible] = useState(false);

//   return (
//     <View style={styles.header}>
//       {/* Left Side: Logo or Back Button */}
//       {isHomeScreen ? (
        // <Image source={require('../assets/logo.png')} style={styles.logo} />
//       ) : (
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={styles.icon}>Back</Text>
//         </TouchableOpacity>
//       )}

//       {/* Right Side: Profile Icon or Logout Icon */}
//       {isProfileScreen ? (
//         <TouchableOpacity onPress={() => setLogoutModalVisible(true)}>
//           <Text style={styles.icon}>🚪</Text>
//         </TouchableOpacity>
//       ) : (
//         <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
//           <Text style={styles.icon}>👤</Text>
//         </TouchableOpacity>
//       )}

//       {/* Logout Confirmation Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={logoutModalVisible}
//         onRequestClose={() => setLogoutModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.modalText}>Are you sure you want to logout?</Text>
//             <View style={styles.modalButtons}>
//               <TouchableOpacity
//                 style={styles.modalButton}
//                 onPress={() => {
//                   setLogoutModalVisible(false);
//                   navigation.replace('Login');
//                 }}
//               >
//                 <Text style={styles.modalButtonText}>Yes</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.modalButton, styles.cancelButton]}
//                 onPress={() => setLogoutModalVisible(false)}
//               >
//                 <Text style={styles.modalButtonText}>No</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#f5a623',
//     padding: 10,
//     height: 60,
//   },
//   logo: {
//     width: 100,
//     height: 50,
//     resizeMode: 'contain',
//   },
//   icon: {
//     fontSize: 24,
//     color: '#fff',
//     marginHorizontal: 10,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     width: '80%',
//     alignItems: 'center',
//   },
//   modalText: {
//     fontSize: 18,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   modalButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   modalButton: {
//     backgroundColor: '#f5a623',
//     padding: 10,
//     borderRadius: 5,
//     flex: 1,
//     marginHorizontal: 5,
//     alignItems: 'center',
//   },
//   cancelButton: {
//     backgroundColor: '#ccc',
//   },
//   modalButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });

// export default Header;







import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Text, Modal } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ navigation }) => {
  const route = useRoute();
  const isProfileScreen = route.name === 'Profile';
  const isHomeScreen = route.name === 'Home';
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  return (
    <View style={styles.header}>
      {/* Left Side: Logo or Back Button */}
      {isHomeScreen ? (
                <Image source={require('../assets/logo.png')} style={styles.logo} />
      ) : (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={30} color="#000" style={styles.icon} />
        </TouchableOpacity>
      )}

      {/* Right Side: Profile Icon or Logout Icon */}
      {isProfileScreen ? (
        <TouchableOpacity onPress={() => setLogoutModalVisible(true)}>
          <Icon name="logout" size={30} color="#000" style={styles.icon} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icon name="person" size={30} color="#000" style={styles.icon} />
        </TouchableOpacity>
      )}

      {/* Logout Confirmation Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Are you sure you want to logout?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => {
                  setLogoutModalVisible(false);
                  navigation.replace('Login');
                }}
              >
                <Text style={styles.modalButtonText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setLogoutModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5a623',
    padding: 10,
    height: 60,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  icon: {
    marginHorizontal: 10,
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
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#f5a623',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Header;

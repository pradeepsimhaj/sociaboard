// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
// import DeviceTable from './DeviceTable';

// const DeviceInformationScreen = ({ navigation }) => {
//   const [devices, setDevices] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate API call
//     const fetchDevices = async () => {
//       try {
//         const response = [
//           { id: '1', device: 'IOT-Global', location: 'Hyderabad', region: 'India', latitude: '17.591', longitude: '78.1213' },
//           { id: '2', device: 'IOT-Global', location: 'Tokyo', region: 'Japan', latitude: '36.574841', longitude: '139.294179' },
//         ];
//         setDevices(response);
//       } catch (error) {
//         console.error('Error fetching devices:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDevices();
//   }, []);

//   const handleRowPress = (device) => {
//     navigation.navigate('DeviceDetails', { device });
//   };

//   const handleMapPress = () => {
//     console.log('Navigate to Map View');
//   };

//   if (loading) {
//     return (
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.headerTitle}>Device Information</Text>
//           <TouchableOpacity style={styles.mapButton} onPress={handleMapPress}>
//             <Text style={styles.mapButtonText}>MAP VIEW</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.loadingContainer}>
//           <Text>Loading...</Text>
//         </View>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>Device Information</Text>
//         <TouchableOpacity style={styles.mapButton} onPress={handleMapPress}>
//           <Text style={styles.mapButtonText}>MAP VIEW</Text>
//         </TouchableOpacity>
//       </View>
//       <ScrollView>
//         <DeviceTable data={devices} onRowPress={handleRowPress} />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#1E90FF',
//     padding: 15,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#fff',
//   },
//   mapButton: {
//     backgroundColor: '#4682B4',
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//   },
//   mapButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default DeviceInformationScreen;


























import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import DeviceTable from './DeviceTable';

const DeviceInformationScreen = ({ navigation }) => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchDevices = async () => {
      try {
        const response = [
          { id: '1', device: 'IOT-Global', location: 'Hyderabad', region: 'India', latitude: '17.591', longitude: '78.1213' },
          { id: '2', device: 'IOT-Global', location: 'Tokyo', region: 'Japan', latitude: '36.574841', longitude: '139.294179' },
        ];
        setDevices(response);
      } catch (error) {
        console.error('Error fetching devices:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDevices();
  }, []);

  const handleRowPress = (device) => {
    console.log('Navigating to DeviceDetails with device:', device); // Debug navigation
    navigation.navigate('DeviceDetails', { device });
  };

  const handleMapPress = () => {
    console.log('Map View button pressed'); // Changed log for clarity
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Device Information</Text>
          <TouchableOpacity style={styles.mapButton} onPress={handleMapPress}>
            <Text style={styles.mapButtonText}>MAP VIEW</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Device Information</Text>
        <TouchableOpacity style={styles.mapButton} onPress={handleMapPress}>
          <Text style={styles.mapButtonText}>MAP VIEW</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <DeviceTable data={devices} onRowPress={handleRowPress} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1E90FF',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  mapButton: {
    backgroundColor: '#4682B4',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  mapButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DeviceInformationScreen;

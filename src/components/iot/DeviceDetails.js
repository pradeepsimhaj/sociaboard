import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


const DeviceDetails = ({ route, navigation }) => {
  const { device } = route.params;

  return (
    <View style={styles.container}>
      <View>
      <Text style={styles.heading}>Device Details</Text>
      </View>
      <ScrollView>
        <View style={styles.tableContainer}>
          <View style={styles.row}>
            <Text style={styles.label}>Id</Text>
            <Text style={styles.value}>{device.id}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Name</Text>
            <Text style={styles.value}>{device.device}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>{device.location}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Region</Text>
            <Text style={styles.value}>{device.region}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Latitude</Text>
            <Text style={styles.value}>{device.latitude}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Longitude</Text>
            <Text style={styles.value}>{device.longitude}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Status</Text>
            <Text style={[styles.value, { color: device.location === 'Tokyo' ? '#00FF00' : '#FF0000' }]}>
              {device.location === 'Tokyo' ? 'Active' : 'InActive'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E90FF',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  tableContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    margin: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
  },
  value: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    textAlign: 'right',
  },
});

export default DeviceDetails;
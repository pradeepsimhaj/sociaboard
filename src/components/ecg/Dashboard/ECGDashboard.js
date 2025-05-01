import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ECGCards from './ECGCards';
import ECGCharts from './ECGCharts';
import ECGPieChart from './ECGPieChart';
import ECGTable from './ECGTable';

const ECGDashboard = () => {
  const totalUploads = 15139;
  const normalResults = 4369;
  const abnormalResults = 10760;

  return (
    <ScrollView style={styles.container} horizontal={false}>
      <Text style={styles.heading}>ECG Tracking</Text>
      {/* <ECGCards
        totalUploads={totalUploads}
        normalResults={normalResults}
        abnormalResults={abnormalResults}
      /> */}
      {/* <ECGCharts /> */}
      {/* <ECGPieChart /> */}
      {/* <ECGTable /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
});

export default ECGDashboard;

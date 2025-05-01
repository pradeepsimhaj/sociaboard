import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const ECGPieChart = () => {
  const [selectedPieData, setSelectedPieData] = useState(null);

  const pieData = [
    {
      name: 'Normal',
      population: 4369,
      color: '#00FF00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
    {
      name: 'Abnormal',
      population: 10760,
      color: '#FF0000',
      legendFontColor: '#7F7F7F',
      legendFontSize: 12,
    },
  ];

  const handlePieChartPress = (event) => {
    const x = event.nativeEvent.locationX;
    const chartWidth = screenWidth * 0.7;
    const halfWidth = chartWidth / 2;

    if (x < halfWidth) {
      setSelectedPieData(pieData[0]);
    } else {
      setSelectedPieData(pieData[1]);
    }
  };

  return (
    <View style={styles.pieChartContainer}>
      <View style={styles.chartWrapper}>
        <Text style={styles.chartTitle}>Overall ECG Data</Text>
        <PieChart
          data={pieData.map((item, index) => ({
            ...item,
            color:
              selectedPieData && selectedPieData.name === item.name
                ? item.color.replace('00', 'FF')
                : item.color,
          }))}
          width={screenWidth * 0.7}
          height={180}
          chartConfig={{
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          }}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="10"
          absolute
          onPress={handlePieChartPress}
        />
        <View style={styles.pieLegend}>
          {pieData.map((item, index) => (
            <View key={index} style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: item.color }]} />
              <Text style={styles.legendText}>
                {item.name}: {item.population}
              </Text>
            </View>
          ))}
        </View>
        {selectedPieData && (
          <View style={styles.tooltip}>
            <Text style={styles.tooltipText}>Category: {selectedPieData.name}</Text>
            <Text style={styles.tooltipText}>Value: {selectedPieData.population}</Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSelectedPieData(null)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pieChartContainer: {
    backgroundColor: '#fae6e6',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
  chartWrapper: {
    width: '95%',
    alignSelf: 'center',
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  pieLegend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  legendColor: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  legendText: {
    fontSize: 12,
    color: '#7F7F7F',
  },
  tooltip: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
  },
  tooltipText: {
    color: '#fff',
    fontSize: 14,
  },
  closeButton: {
    marginTop: 5,
    backgroundColor: '#555',
    padding: 5,
    borderRadius: 3,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default ECGPieChart;

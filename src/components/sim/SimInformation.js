// import React from 'react';
// import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
// import { BarChart } from 'react-native-chart-kit';

// const screenWidth = Dimensions.get('window').width;

// const SimInformation = ({route}) => {

//     const { simInfo } = route.params;

//   const simDetails = simInfo

//   const dataUsageData = {
//     labels: ['2025-03-25', '2025-03-26', '2025-03-27', '2025-03-28', '2025-03-29', '2025-03-30', '2025-03-31'],
//     datasets: [
//       {
//         data: [0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4],
//       },
//     ],
//   };

//   const smsUsageData = {
//     labels: ['2025-03-25', '2025-03-26', '2025-03-27', '2025-03-28', '2025-03-29', '2025-03-30', '2025-03-31'],
//     datasets: [
//       {
//         data: [0.2, 0.3, 0.5, 0.7, 0.9, 1.1, 1.3],
//       },
//     ],
//   };

//   const chartConfig = {
//     backgroundGradientFrom: '#fff',
//     backgroundGradientTo: '#fff',
//     decimalPlaces: 1,
//     color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`, // Blue bars
//     labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//     style: {
//       borderRadius: 16,
//     },
//     propsForDots: {
//       r: '6',
//       strokeWidth: '2',
//       stroke: '#ffa726',
//     },
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.headerTitle}>SIM Details</Text>
//       <View style={styles.detailsContainer}>
//         <View style={styles.detailRow}>
//           <Text style={styles.label}>ICCID</Text>
//           <Text style={styles.value}>{simDetails.iccid}</Text>
//         </View>
//         <View style={styles.detailRow}>
//           <Text style={styles.label}>IMSI</Text>
//           <Text style={styles.value}>{simDetails.imsi}</Text>
//         </View>
//         <View style={styles.detailRow}>
//           <Text style={styles.label}>MSISDN</Text>
//           <Text style={styles.value}>{simDetails.msisdn}</Text>
//         </View>
//         <View style={styles.detailRow}>
//           <Text style={styles.label}>IMEI</Text>
//           <Text style={styles.value}>{simDetails.imei}</Text>
//         </View>
//       </View>

//       <Text style={styles.chartTitle}>Data Usage in MB</Text>
//       <BarChart
//         data={dataUsageData}
//         width={screenWidth - 40}
//         height={220}
//         yAxisLabel=""
//         chartConfig={chartConfig}
//         style={styles.chart}
//         fromZero={true}
//       />

//       <Text style={styles.chartTitle}>SMS Usage</Text>
//       <BarChart
//         data={smsUsageData}
//         width={screenWidth - 40}
//         height={220}
//         yAxisLabel=""
//         chartConfig={chartConfig}
//         style={styles.chart}
//         fromZero={true}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 20,
//   },
//   detailsContainer: {
//     marginBottom: 20,
//   },
//   detailRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   value: {
//     fontSize: 16,
//     color: '#333',
//   },
//   chartTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   chart: {
//     marginVertical: 8,
//     borderRadius: 16,
//   },
// });

// export default SimInformation;

























import React from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const SimInformation = ({ route }) => {
  const { simInfo } = route.params;
  const simDetails = simInfo;

  const dataUsageData = {
    labels: ['2025-03-25', '2025-03-26', '2025-03-27', '2025-03-28', '2025-03-29', '2025-03-30', '2025-03-31'],
    datasets: [{ data: [0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4] }],
  };

  const smsUsageData = {
    labels: ['2025-03-25', '2025-03-26', '2025-03-27', '2025-03-28', '2025-03-29', '2025-03-30', '2025-03-31'],
    datasets: [{ data: [0.2, 0.3, 0.5, 0.7, 0.9, 1.1, 1.3] }],
  };

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 1,
    color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: { borderRadius: 16 },
    propsForDots: { r: '6', strokeWidth: '2', stroke: '#ffa726' },
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerTitle}>SIM Details</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>ICCID</Text>
          <Text style={styles.value}>{simDetails.iccid}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>IMSI</Text>
          <Text style={styles.value}>{simDetails.imsi}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>MSISDN</Text>
          <Text style={styles.value}>{simDetails.msisdn}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>IMEI</Text>
          <Text style={styles.value}>{simDetails.imei}</Text>
        </View>
      </View>

      <Text style={styles.chartTitle}>Data Usage in MB</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <BarChart
          data={dataUsageData}
          width={Math.max(screenWidth, 700)} // wider than screen to allow horizontal scroll
          height={220}
          chartConfig={chartConfig}
          fromZero={true}
          style={styles.chart}
        />
      </ScrollView>

      <Text style={styles.chartTitle}>SMS Usage</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        <BarChart
          data={smsUsageData}
          width={Math.max(screenWidth, 700)}
          height={220}
          chartConfig={chartConfig}
          fromZero={true}
          style={styles.chart}
        />
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  detailsContainer: {
    marginBottom: 20,
  },
  detailRow: {
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
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    marginBottom: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});

export default SimInformation;

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
// import { BarChart } from 'react-native-chart-kit';

// const screenWidth = Dimensions.get('window').width;

// const ECGCharts = () => {
//   const [selectedBarIndex, setSelectedBarIndex] = useState(null);

//   const barData = {
//     labels: ['2025-05-15', '2025-05-17', '2025-05-19', '2025-05-21'],
//     datasets: [
//       {
//         data: [16000, 12000, 4000, 1700],
//       },
//     ],
//     legend: ['All', 'Normal', 'Abnormal'],
//   };

//   const handleBarChartPress = ({ value, index }) => {
//     setSelectedBarIndex(index);
//   };

//   return (
//     <View style={styles.barChartContainer}>
//       <View style={styles.chartWrapper}>
//         <Text style={styles.chartTitle}>Daily ECG Uploads</Text>
//         <View style={styles.chartScroll}>
//           <BarChart
//             data={barData}
//             width={screenWidth * 1.5}
//             height={220}
//             yAxisLabel=""
//             chartConfig={{
//               backgroundColor: '#ffffff',
//               backgroundGradientFrom: '#ffffff',
//               backgroundGradientTo: '#ffffff',
//               decimalPlaces: 0,
//               color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
//               colors: [
//                 (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
//                 (opacity = 1) => `rgba(0, 255, 0, ${opacity})`,
//                 (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
//               ],
//               labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//               propsForBars: {
//                 fill: (index) =>
//                   selectedBarIndex === index ? 'rgba(0, 0, 255, 0.9)' : 'rgba(0, 0, 255, 0.5)',
//               },
//             }}
//             style={styles.chart}
//             onDataPointClick={({ value, index }) => handleBarChartPress({ value, index })}
//           />
//         </View>
//         {selectedBarIndex !== null && (
//           <View style={styles.tooltip}>
//             <Text style={styles.tooltipText}>
//               Date: {barData.labels[selectedBarIndex]}
//             </Text>
//             <Text style={styles.tooltipText}>
//               Value: {barData.datasets[0].data[selectedBarIndex]}
//             </Text>
//             <TouchableOpacity
//               style={styles.closeButton}
//               onPress={() => setSelectedBarIndex(null)}
//             >
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   barChartContainer: {
//     backgroundColor: '#f0e6fa',
//     padding: 10,
//     marginBottom: 15,
//     borderRadius: 8,
//   },
//   chartWrapper: {
//     width: '95%',
//     alignSelf: 'center',
//   },
//   chartScroll: {
//     overflow: 'scroll',
//   },
//   chartTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   chart: {
//     marginVertical: 8,
//   },
//   tooltip: {
//     backgroundColor: '#333',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//     alignSelf: 'center',
//   },
//   tooltipText: {
//     color: '#fff',
//     fontSize: 14,
//   },
//   closeButton: {
//     marginTop: 5,
//     backgroundColor: '#555',
//     padding: 5,
//     borderRadius: 3,
//     alignSelf: 'center',
//   },
//   closeButtonText: {
//     color: '#fff',
//     fontSize: 12,
//   },
// });

// export default ECGCharts;



























// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
// import { VictoryBar, VictoryChart, VictoryAxis } from 'victory-native';

// const screenWidth = Dimensions.get('window').width;

// const ECGCharts = () => {
//   const [selectedBarIndex, setSelectedBarIndex] = useState(null);

//   const barData = [
//     { x: '2025-05-15', y: 16000 },
//     { x: '2025-05-17', y: 12000 },
//     { x: '2025-05-19', y: 4000 },
//     { x: '2025-05-21', y: 1700 },
//   ];

//   const handleBarPress = (data) => {
//     const index = barData.findIndex(item => item.x === data.datum.x);
//     setSelectedBarIndex(index);
//   };

//   return (
//     <View style={styles.barChartContainer}>
//       <View style={styles.chartWrapper}>
//         <Text style={styles.chartTitle}>Daily ECG Uploads</Text>
//         <VictoryChart width={screenWidth * 1.5} height={220}>
//           <VictoryAxis tickValues={barData.map(d => d.x)} style={{ tickLabels: { angle: -45 } }} />
//           <VictoryAxis dependentAxis />
//           <VictoryBar
//             data={barData}
//             x="x"
//             y="y"
//             style={{
//               data: {
//                 fill: (d, i) => (selectedBarIndex === i ? '#0000FF' : '#ADD8E6'),
//                 width: 20,
//               },
//             }}
//             events={[{
//               target: 'data',
//               eventHandlers: {
//                 onPressIn: () => handleBarPress,
//               },
//             }]}
//           />
//         </VictoryChart>
//         {selectedBarIndex !== null && (
//           <View style={styles.tooltip}>
//             <Text style={styles.tooltipText}>Date: {barData[selectedBarIndex].x}</Text>
//             <Text style={styles.tooltipText}>Value: {barData[selectedBarIndex].y}</Text>
//             <TouchableOpacity onPress={() => setSelectedBarIndex(null)} style={styles.closeButton}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   barChartContainer: { backgroundColor: '#f0e6fa', padding: 10, marginBottom: 15, borderRadius: 8 },
//   chartWrapper: { width: '95%', alignSelf: 'center' },
//   chartTitle: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
//   tooltip: { backgroundColor: '#333', padding: 10, borderRadius: 5, marginTop: 10, alignSelf: 'center' },
//   tooltipText: { color: '#fff', fontSize: 14 },
//   closeButton: { marginTop: 5, backgroundColor: '#555', padding: 5, borderRadius: 3, alignSelf: 'center' },
//   closeButtonText: { color: '#fff', fontSize: 12 },
// });

// export default ECGCharts;









// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
// import { BarChart } from 'react-native-gifted-charts';

// const screenWidth = Dimensions.get('window').width;

// const ECGCharts = () => {
//   const [selectedBarIndex, setSelectedBarIndex] = useState(null);

//   const barData = [
//     { value: 16000, label: '2025-05-15', frontColor: '#ADD8E6' },
//     { value: 12000, label: '2025-05-17', frontColor: '#ADD8E6' },
//     { value: 4000, label: '2025-05-19', frontColor: '#ADD8E6' },
//     { value: 1700, label: '2025-05-21', frontColor: '#ADD8E6' },
//   ];

//   const handleBarPress = (item, index) => {
//     setSelectedBarIndex(index);
//   };

//   return (
//     <View style={styles.barChartContainer}>
//       <View style={styles.chartWrapper}>
//         <Text style={styles.chartTitle}>Daily ECG Uploads</Text>
//         <BarChart
//           data={barData}
//           barWidth={20}
//           height={220}
//           width={screenWidth * 1.5}
//           onPress={(item, index) => handleBarPress(item, index)}
//           barBorderRadius={4}
//           showXAxisIndices={true}
//           xAxisLabelTextStyle={{ fontSize: 10, rotateLabel: true }}
//           style={{ padding: 10 }}
//           renderTooltip={(item) =>
//             selectedBarIndex !== null && (
//               <View style={styles.tooltip}>
//                 <Text style={styles.tooltipText}>Date: {item.label}</Text>
//                 <Text style={styles.tooltipText}>Value: {item.value}</Text>
//                 <TouchableOpacity onPress={() => setSelectedBarIndex(null)} style={styles.closeButton}>
//                   <Text style={styles.closeButtonText}>Close</Text>
//                 </TouchableOpacity>
//               </View>
//             )
//           }
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   barChartContainer: { backgroundColor: '#f0e6fa', padding: 10, marginBottom: 15, borderRadius: 8 },
//   chartWrapper: { width: '95%', alignSelf: 'center' },
//   chartTitle: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
//   tooltip: { backgroundColor: '#333', padding: 10, borderRadius: 5, marginTop: 10, alignSelf: 'center' },
//   tooltipText: { color: '#fff', fontSize: 14 },
//   closeButton: { marginTop: 5, backgroundColor: '#555', padding: 5, borderRadius: 3, alignSelf: 'center' },
//   closeButtonText: { color: '#fff', fontSize: 12 },
// });

// export default ECGCharts;



























// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
// import { BarChart } from 'react-native-charts-wrapper';

// const screenWidth = Dimensions.get('window').width;

// const ECGCharts = () => {
//   const [selectedBarIndex, setSelectedBarIndex] = useState(null);

//   const barData = {
//     dataSets: [{
//       values: [{ y: 16000 }, { y: 12000 }, { y: 4000 }, { y: 1700 }],
//       label: 'ECG Uploads',
//       config: {
//         color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
//         barSpacePercent: 20,
//         highlightAlpha: 0.6,
//         highlightColor: '#FF0000',
//       },
//     }],
//     xAxis: {
//       valueFormatter: ['2025-05-15', '2025-05-17', '2025-05-19', '2025-05-21'],
//       position: 'BOTTOM',
//       granularity: 1,
//     },
//   };

//   const handleBarSelect = (event) => {
//     if (event.nativeEvent) {
//       const index = event.nativeEvent.x;
//       setSelectedBarIndex(index);
//     }
//   };

//   return (
//     <View style={styles.barChartContainer}>
//       <View style={styles.chartWrapper}>
//         <Text style={styles.chartTitle}>Daily ECG Uploads</Text>
//         <BarChart
//           style={styles.chart}
//           data={barData}
//           width={screenWidth * 1.5}
//           height={220}
//           chartDescription={{ text: '' }}
//           legend={{ enabled: false }}
//           onSelect={handleBarSelect}
//           onChange={(event) => console.log(event.nativeEvent)}
//         />
//         {selectedBarIndex !== null && (
//           <View style={styles.tooltip}>
//             <Text style={styles.tooltipText}>Date: {barData.xAxis.valueFormatter[selectedBarIndex]}</Text>
//             <Text style={styles.tooltipText}>Value: {barData.dataSets[0].values[selectedBarIndex].y}</Text>
//             <TouchableOpacity onPress={() => setSelectedBarIndex(null)} style={styles.closeButton}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   barChartContainer: { backgroundColor: '#f0e6fa', padding: 10, marginBottom: 15, borderRadius: 8 },
//   chartWrapper: { width: '95%', alignSelf: 'center' },
//   chartTitle: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
//   chart: { marginVertical: 8 },
//   tooltip: { backgroundColor: '#333', padding: 10, borderRadius: 5, marginTop: 10, alignSelf: 'center' },
//   tooltipText: { color: '#fff', fontSize: 14 },
//   closeButton: { marginTop: 5, backgroundColor: '#555', padding: 5, borderRadius: 3, alignSelf: 'center' },
//   closeButtonText: { color: '#fff', fontSize: 12 },
// });

// export default ECGCharts;























// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
// import ECharts from 'react-native-echarts-pro'; // Hypothetical wrapper name, adjust based on actual package

// const screenWidth = Dimensions.get('window').width;

// const ECGCharts = () => {
//   const [selectedBarIndex, setSelectedBarIndex] = useState(null);

//   const option = {
//     xAxis: {
//       type: 'category',
//       data: ['2025-05-15', '2025-05-17', '2025-05-19', '2025-05-21'],
//     },
//     yAxis: {
//       type: 'value',
//     },
//     series: [{
//       data: [16000, 12000, 4000, 1700],
//       type: 'bar',
//       itemStyle: {
//         color: (params) => (selectedBarIndex === params.dataIndex ? '#0000FF' : '#ADD8E6'),
//       },
//     }],
//   };

//   const handleChartClick = (params) => {
//     setSelectedBarIndex(params.dataIndex);
//   };

//   return (
//     <View style={styles.barChartContainer}>
//       <View style={styles.chartWrapper}>
//         <Text style={styles.chartTitle}>Daily ECG Uploads</Text>
//         <ECharts
//           option={option}
//           width={screenWidth * 1.5}
//           height={220}
//           onPress={handleChartClick}
//         />
//         {selectedBarIndex !== null && (
//           <View style={styles.tooltip}>
//             <Text style={styles.tooltipText}>Date: {option.xAxis.data[selectedBarIndex]}</Text>
//             <Text style={styles.tooltipText}>Value: {option.series[0].data[selectedBarIndex]}</Text>
//             <TouchableOpacity onPress={() => setSelectedBarIndex(null)} style={styles.closeButton}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   barChartContainer: { backgroundColor: '#f0e6fa', padding: 10, marginBottom: 15, borderRadius: 8 },
//   chartWrapper: { width: '95%', alignSelf: 'center' },
//   chartTitle: { fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
//   tooltip: { backgroundColor: '#333', padding: 10, borderRadius: 5, marginTop: 10, alignSelf: 'center' },
//   tooltipText: { color: '#fff', fontSize: 14 },
//   closeButton: { marginTop: 5, backgroundColor: '#555', padding: 5, borderRadius: 3, alignSelf: 'center' },
//   closeButtonText: { color: '#fff', fontSize: 12 },
// });

// export default ECGCharts;

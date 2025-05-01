// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';

// const DeviceMetrics = () => {
//   return (
//     <LinearGradient colors={['#aaddcc', '#d4aa23']} style={styles.container}>
//       <View style={styles.content}>
//         <Text style={styles.title}>Device Metrics</Text>
//         <Text style={styles.text}>Placeholder content for Device Metrics screen.</Text>
//       </View>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   content: {
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     color: '#fff',
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   text: {
//     fontSize: 16,
//     color: '#fff',
//   },
// });

// export default DeviceMetrics;










// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import { Provider, Button, DataTable } from 'react-native-paper';
// import DatePicker from 'react-native-date-picker';
// import { LineChart } from 'react-native-chart-kit';
// import RNFS from 'react-native-fs';
// import ViewShot from 'react-native-view-shot';

// // Dummy data (simulating the API response)
// const dummyData = {
//   list: [
//     {
//       name: 'temperature',
//       color: '#008FFB',
//       data: [
//         { x: '17-04', y: '65.5' },
//         { x: '17-04', y: '63.4' },
//         { x: '17-04', y: '67.0' },
//         { x: '17-04', y: '66.5' },
//         { x: '17-04', y: '67.8' },
//         { x: '17-04', y: '66.0' },
//         { x: '17-04', y: '66.5' },
//         { x: '17-04', y: '66.8' },
//       ],
//     },
//     {
//       name: 'cpuUsage',
//       color: '#008FFB',
//       data: [
//         { x: '2025-04-17T01:00:00.000Z', y: '25.3' },
//         { x: '2025-04-18T01:00:00.000Z', y: '25.5' },
//         { x: '2025-04-19T01:00:00.000Z', y: '25.4' },
//         { x: '2025-04-20T01:00:00.000Z', y: '25.5' },
//         { x: '2025-04-21T01:00:00.000Z', y: '25.5' },
//         { x: '2025-04-22T01:00:00.000Z', y: '25.5' },
//         { x: '2025-04-23T01:00:00.000Z', y: '25.4' },
//         { x: '2025-04-24T01:00:00.000Z', y: '25.5' },
//       ],
//     },
//     {
//       name: 'memoryUsage',
//       color: '#008FFB',
//       data: [
//         { x: '18-04', y: '10.0' },
//         { x: '2025-04-18T01:00:00.000Z', y: '10.1' },
//         { x: '2025-04-19T01:00:00.000Z', y: '10.0' },
//         { x: '2025-04-20T01:00:00.000Z', y: '10.0' },
//         { x: '2025-04-21T01:00:00.000Z', y: '10.0' },
//         { x: '2025-04-22T01:00:00.000Z', y: '10.0' },
//         { x: '2025-04-23T01:00:00.000Z', y: '10.0' },
//         { x: '2025-04-24T01:00:00.000Z', y: '10.0' },
//       ],
//     },
//   ],
// };

// // Table data (simulating the API response)
// const tableData = [
//   { timestamp: '2025-04-17T01:51:42Z', memoryUsage: 10, cpuUsage: 25.3, temperature: 63.4 },
//   { timestamp: '2025-04-18T01:58:62Z', memoryUsage: 10.1, cpuUsage: 25.5, temperature: 65.5 },
//   { timestamp: '2025-04-19T01:36:15Z', memoryUsage: 10, cpuUsage: 25.4, temperature: 67.0 },
//   { timestamp: '2025-04-20T01:12:57Z', memoryUsage: 10, cpuUsage: 25.5, temperature: 66.5 },
//   { timestamp: '2025-04-21T01:48:95Z', memoryUsage: 10, cpuUsage: 25.5, temperature: 67.8 },
//   { timestamp: '2025-04-22T01:56:67Z', memoryUsage: 10, cpuUsage: 25.5, temperature: 66.0 },
//   { timestamp: '2025-04-23T01:34:82Z', memoryUsage: 10, cpuUsage: 25.4, temperature: 66.5 },
//   { timestamp: '2025-04-24T01:24:80Z', memoryUsage: 10, cpuUsage: 25.5, temperature: 66.8 },
// ];

// const DeviceMetrics = () => {
//   const [device, setDevice] = useState('2JIOT-Global[Tokyo]');
//   const [fromDate, setFromDate] = useState(new Date('2025-04-17T01:45:00.000Z'));
//   const [toDate, setToDate] = useState(new Date('2025-04-24T01:45:00.000Z'));
//   const [openFrom, setOpenFrom] = useState(false);
//   const [openTo, setOpenTo] = useState(false);
//   const [fetchedData, setFetchedData] = useState(null);
//   const [tableItems, setTableItems] = useState([]);
//   const [page, setPage] = useState(0);
//   const itemsPerPage = 10;

//   const screenWidth = Dimensions.get('window').width;
//   const isSmallScreen = screenWidth < 400;

//   const fetchData = () => {
//     // Simulate API call with dummy data
//     setFetchedData(dummyData);
//     setTableItems(tableData.filter(item => {
//       const itemDate = new Date(item.timestamp);
//       return itemDate >= fromDate && itemDate <= toDate;
//     }));
//   };

//   const exportTableToCSV = async () => {
//     const csvContent = [
//       ['Timestamp', 'Memory Usage', 'CPU Usage', 'Temperature (°C)'],
//       ...tableItems.map(item => [
//         item.timestamp,
//         item.memoryUsage,
//         item.cpuUsage,
//         item.temperature,
//       ]),
//     ]
//       .map(row => row.join(','))
//       .join('\n');

//     const path = `${RNFS.DocumentDirectoryPath}/table_data.csv`;
//     await RNFS.writeFile(path, csvContent, 'utf8');
//     alert(`CSV exported to ${path}`);
//   };

//   const captureChart = async (ref) => {
//     const uri = await ref.current.capture();
//     const path = `${RNFS.DocumentDirectoryPath}/chart.png`;
//     await RNFS.moveFile(uri, path);
//     alert(`Chart exported to ${path}`);
//   };

//   const exportChartToCSV = (data) => {
//     const csvContent = [
//       ['Date', 'Value'],
//       ...data.map(item => [item.x, item.y]),
//     ]
//       .map(row => row.join(','))
//       .join('\n');

//     const path = `${RNFS.DocumentDirectoryPath}/chart_data.csv`;
//     RNFS.writeFile(path, csvContent, 'utf8')
//       .then(() => alert(`Chart CSV exported to ${path}`))
//       .catch(err => console.log(err));
//   };

//   const renderChart = (title, data, ref) => (
//     <View style={styles.chartContainer}>
//       <Text style={styles.chartTitle}>{title}</Text>
//       <ViewShot ref={ref} options={{ format: 'png', quality: 0.9 }}>
//         <LineChart
//           data={{
//             labels: data.map(item => new Date(item.x).toLocaleDateString()),
//             datasets: [{ data: data.map(item => parseFloat(item.y)) }],
//           }}
//           width={screenWidth - 40}
//           height={220}
//           yAxisLabel=''
//           yAxisSuffix=''
//           chartConfig={{
//             backgroundColor: '#e26a00',
//             backgroundGradientFrom: '#fb8c00',
//             backgroundGradientTo: '#ffa726',
//             decimalPlaces: 1,
//             color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             style: { borderRadius: 16 },
//             propsForDots: { r: '6', strokeWidth: '2', stroke: '#ffa726' },
//           }}
//           bezier
//           style={{ marginVertical: 8, borderRadius: 16 }}
//         />
//       </ViewShot>
//       <View style={styles.chartButtons}>
//         <TouchableOpacity onPress={() => captureChart(ref)}>
//           <Text style={styles.buttonText}>Export PNG</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => exportChartToCSV(data)}>
//           <Text style={styles.buttonText}>Export CSV</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <Provider>
//       <ScrollView style={styles.container}>
//         <View style={isSmallScreen ? styles.column : styles.row}>
//           <View style={styles.dropdownContainer}>
//             <Text style={styles.label}>Device:</Text>
//             <Picker
//               selectedValue={device}
//               onValueChange={(itemValue) => setDevice(itemValue)}
//               style={styles.dropdown}
//             >
//               <Picker.Item label='2JIOT-Global[Tokyo]' value='2JIOT-Global[Tokyo]' />
//             </Picker>
//           </View>
//           <View style={isSmallScreen ? styles.column : styles.row}>
//             <View style={styles.datePickerContainer}>
//               <Text style={styles.label}>From:</Text>
//               <Button onPress={() => setOpenFrom(true)} mode='outlined'>
//                 <Text>{fromDate.toLocaleString()}</Text>
//               </Button>
//               <DatePicker
//                 modal
//                 open={openFrom}
//                 date={fromDate}
//                 onConfirm={(date) => {
//                   setOpenFrom(false);
//                   setFromDate(date);
//                 }}
//                 onCancel={() => setOpenFrom(false)}
//               />
//             </View>
//             <View style={styles.datePickerContainer}>
//               <Text style={styles.label}>To:</Text>
//               <Button onPress={() => setOpenTo(true)} mode='outlined'>
//                 <Text>{toDate.toLocaleString()}</Text>
//               </Button>
//               <DatePicker
//                 modal
//                 open={openTo}
//                 date={toDate}
//                 onConfirm={(date) => {
//                   setOpenTo(false);
//                   setToDate(date);
//                 }}
//                 onCancel={() => setOpenTo(false)}
//               />
//             </View>
//           </View>
//         </View>
//         <Button mode='contained' onPress={fetchData} style={styles.fetchButton}>
//           <Text>Fetch</Text>
//         </Button>

//         {fetchedData ? (
//           <>
//             {renderChart('Temperature (°C)', fetchedData.list[0].data, React.createRef())}
//             {renderChart('CPU Usage (%)', fetchedData.list[1].data, React.createRef())}
//             {renderChart('Memory Usage (%)', fetchedData.list[2].data, React.createRef())}

//             <View style={styles.tableContainer}>
//               <View style={styles.tableHeader}>
//                 <Text style={styles.tableTitle}>Device Metrics</Text>
//                 <Button mode='contained' onPress={exportTableToCSV}>
//                   <Text>Export</Text>
//                 </Button>
//               </View>
//               <DataTable>
//                 <DataTable.Header>
//                   <DataTable.Title>Timestamp</DataTable.Title>
//                   <DataTable.Title numeric>Memory Usage</DataTable.Title>
//                   <DataTable.Title numeric>CPU Usage</DataTable.Title>
//                   <DataTable.Title numeric>Temperature (°C)</DataTable.Title>
//                 </DataTable.Header>
//                 <FlatList
//                   data={tableItems.slice(page * itemsPerPage, (page + 1) * itemsPerPage)}
//                   renderItem={({ item }) => (
//                     <DataTable.Row>
//                       <DataTable.Cell>{item.timestamp}</DataTable.Cell>
//                       <DataTable.Cell numeric>{item.memoryUsage}</DataTable.Cell>
//                       <DataTable.Cell numeric>{item.cpuUsage}</DataTable.Cell>
//                       <DataTable.Cell numeric>{item.temperature}</DataTable.Cell>
//                     </DataTable.Row>
//                   )}
//                   keyExtractor={(item, index) => index.toString()}
//                 />
//                 <DataTable.Pagination
//                   page={page}
//                   numberOfPages={Math.ceil(tableItems.length / itemsPerPage)}
//                   onPageChange={(newPage) => setPage(newPage)}
//                   label={`${page * itemsPerPage + 1}-${Math.min((page + 1) * itemsPerPage, tableItems.length)} of ${tableItems.length}`}
//                 />
//               </DataTable>
//             </View>
//           </>
//         ) : (
//           <Text style={styles.placeholderText}>Select device and date range to fetch data</Text>
//         )}
//       </ScrollView>
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#fff' },
//   row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
//   column: { flexDirection: 'column', marginBottom: 10 },
//   dropdownContainer: { flex: 1, marginRight: 10, marginBottom: 10 },
//   dropdown: { backgroundColor: '#f0f0f0', borderRadius: 5, height: 70 },
//   datePickerContainer: { flex: 1, marginRight: 10 },
//   fetchButton: { marginVertical: 10 },
//   chartContainer: { marginVertical: 10 },
//   chartTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
//   chartButtons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 },
//   buttonText: { color: '#008FFB', fontWeight: 'bold' },
//   tableContainer: { marginVertical: 10 },
//   tableHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
//   tableTitle: { fontSize: 16, fontWeight: 'bold' },
//   placeholderText: { textAlign: 'center', marginTop: 20, color: '#666' },
//   label: { fontSize: 16, marginBottom: 5 },
// });

// export default DeviceMetrics;





























// import React, { useState,useRef } from 'react';
// import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';
// import { Provider, Button, DataTable } from 'react-native-paper';
// import DatePicker from 'react-native-date-picker';
// import { LineChart } from 'react-native-chart-kit';
// import RNFS from 'react-native-fs';
// import ViewShot from 'react-native-view-shot';
// // import Share from 'react-native-share';
// import {Picker, PickerItem} from '@react-native-picker/picker';



// let Share = null;
// try {
//   Share = require('react-native-share').default;
// } catch (e) {
//   console.warn('react-native-share not available, exports will show alerts only.');
// }

// // Dummy data (simulating the API response)
// const dummyData = {
//   list: [
//     {
//       name: 'temperature',
//       color: '#008FFB',
//       data: [
//         { x: '2025-04-17T01:00:00.000Z', y: '63.4' },
//         { x: '2025-04-18T01:00:00.000Z', y: '65.5' },
//         { x: '2025-04-19T01:00:00.000Z', y: '67.0' },
//         { x: '2025-04-20T01:00:00.000Z', y: '66.5' },
//         { x: '2025-04-21T01:00:00.000Z', y: '67.8' },
//         { x: '2025-04-22T01:00:00.000Z', y: '66.0' },
//         { x: '2025-04-23T01:00:00.000Z', y: '66.5' },
//         { x: '2025-04-24T01:00:00.000Z', y: '66.8' },
//       ],
//     },
//     {
//       name: 'cpuUsage',
//       color: '#008FFB',
//       data: [
//         { x: '2025-04-17T01:00:00.000Z', y: '25.3' },
//         { x: '2025-04-18T01:00:00.000Z', y: '25.5' },
//         { x: '2025-04-19T01:00:00.000Z', y: '25.4' },
//         { x: '2025-04-20T01:00:00.000Z', y: '25.5' },
//         { x: '2025-04-21T01:00:00.000Z', y: '25.5' },
//         { x: '2025-04-22T01:00:00.000Z', y: '25.5' },
//         { x: '2025-04-23T01:00:00.000Z', y: '25.4' },
//         { x: '2025-04-24T01:00:00.000Z', y: '25.5' },
//       ],
//     },
//     {
//       name: 'memoryUsage',
//       color: '#008FFB',
//       data: [
//         { x: '2025-04-17T01:00:00.000Z', y: '10.0' },
//         { x: '2025-04-18T01:00:00.000Z', y: '10.1' },
//         { x: '2025-04-19T01:00:00.000Z', y: '10.0' },
//         { x: '2025-04-20T01:00:00.000Z', y: '10.0' },
//         { x: '2025-04-21T01:00:00.000Z', y: '10.0' },
//         { x: '2025-04-22T01:00:00.000Z', y: '10.0' },
//         { x: '2025-04-23T01:00:00.000Z', y: '10.0' },
//         { x: '2025-04-24T01:00:00.000Z', y: '10.0' },
//       ],
//     },
//   ],
// };

// // Table data (simulating the API response)
// const tableData = [
//   { timestamp: '2025-04-17T01:51:42Z', memoryUsage: 10, cpuUsage: 25.3, temperature: 63.4 },
//   { timestamp: '2025-04-18T01:58:62Z', memoryUsage: 10.1, cpuUsage: 25.5, temperature: 65.5 },
//   { timestamp: '2025-04-19T01:36:15Z', memoryUsage: 10, cpuUsage: 25.4, temperature: 67.0 },
//   { timestamp: '2025-04-20T01:12:57Z', memoryUsage: 10, cpuUsage: 25.5, temperature: 66.5 },
//   { timestamp: '2025-04-21T01:48:95Z', memoryUsage: 10, cpuUsage: 25.5, temperature: 67.8 },
//   { timestamp: '2025-04-22T01:56:67Z', memoryUsage: 10, cpuUsage: 25.5, temperature: 66.0 },
//   { timestamp: '2025-04-23T01:34:82Z', memoryUsage: 10, cpuUsage: 25.4, temperature: 66.5 },
//   { timestamp: '2025-04-24T01:24:80Z', memoryUsage: 10, cpuUsage: 25.5, temperature: 66.8 },
// ];

// const DeviceMetrics = () => {
//   const [device, setDevice] = useState('2JIOT-Global[Tokyo]');
//   const [fromDate, setFromDate] = useState(new Date('2025-04-17T01:45:00.000Z'));
//   const [toDate, setToDate] = useState(new Date('2025-04-24T01:45:00.000Z'));
//   const [openFrom, setOpenFrom] = useState(false);
//   const [openTo, setOpenTo] = useState(false);
//   const [fetchedData, setFetchedData] = useState(null);
//   const [tableItems, setTableItems] = useState([]);
//   const [page, setPage] = useState(0);
//   const itemsPerPage = 10;

//   const screenWidth = Dimensions.get('window').width;
//   const chartWidth = screenWidth * 2;
//   const isSmallScreen = screenWidth < 400;

//   const tempChartRef = useRef();
//   const cpuChartRef = useRef();
//   const memoryChartRef = useRef();

//   const fetchData = () => {
//     setFetchedData(dummyData);
//     setTableItems(tableData.filter(item => {
//       const itemDate = new Date(item.timestamp);
//       return itemDate >= fromDate && itemDate <= toDate;
//     }));
//   };

//   const exportTableToCSV = async () => {
//     try {
//       const csvContent = [
//         ['Timestamp', 'Memory Usage', 'CPU Usage', 'Temperature (°C)'],
//         ...tableItems.map(item => [
//           item.timestamp,
//           item.memoryUsage,
//           item.cpuUsage,
//           item.temperature,
//         ]),
//       ]
//         .map(row => row.join(','))
//         .join('\n');

//       const path = `${RNFS.DocumentDirectoryPath}/table_data.csv`;
//       await RNFS.writeFile(path, csvContent, 'utf8');
      
//       if (Share) {
//         await Share.open({
//           url: `file://${path}`,
//           type: 'text/csv',
//           failOnCancel: false,
//         });
//       } else {
//         alert(`CSV exported to ${path}`);
//       }
//     } catch (error) {
//       console.error('Error exporting table to CSV:', error);
//       alert('Failed to export table to CSV');
//     }
//   };

//   const captureChart = async (ref) => {
//     try {
//       const uri = await ref.current.capture();
//       const path = `${RNFS.DocumentDirectoryPath}/chart.png`;
//       await RNFS.moveFile(uri, path);
      
//       if (Share) {
//         await Share.open({
//           url: `file://${path}`,
//           type: 'image/png',
//           failOnCancel: false,
//         });
//       } else {
//         alert(`Chart exported to ${path}`);
//       }
//     } catch (error) {
//       console.error('Error exporting chart to PNG:', error);
//       alert('Failed to export chart to PNG');
//     }
//   };

//   const exportChartToCSV = async (data) => {
//     try {
//       const csvContent = [
//         ['Date', 'Value'],
//         ...data.map(item => [item.x, item.y]),
//       ]
//         .map(row => row.join(','))
//         .join('\n');

//       const path = `${RNFS.DocumentDirectoryPath}/chart_data.csv`;
//       await RNFS.writeFile(path, csvContent, 'utf8');
      
//       if (Share) {
//         await Share.open({
//           url: `file://${path}`,
//           type: 'text/csv',
//           failOnCancel: false,
//         });
//       } else {
//         alert(`Chart CSV exported to ${path}`);
//       }
//     } catch (error) {
//       console.error('Error exporting chart to CSV:', error);
//       alert('Failed to export chart to CSV');
//     }
//   };

//   const renderChart = (title, data, ref) => {
//     const labels = data.map(item => new Date(item.x).toLocaleDateString());
//     const displayLabels = labels.map((label, index) => (index % 2 === 0 ? label : ''));

//     return (
//       <View style={styles.chartContainer}>
//         <Text style={styles.chartTitle}>{title}</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={true}>
//           <ViewShot ref={ref} options={{ format: 'png', quality: 0.9 }}>
//             <LineChart
//               data={{
//                 labels: labels,
//                 datasets: [{ data: data.map(item => parseFloat(item.y)) }],
//               }}
//               width={chartWidth}
//               height={220}
//               yAxisLabel=''
//               yAxisSuffix=''
//               chartConfig={{
//                 backgroundColor: '#f0f0f0',
//                 backgroundGradientFrom: '#ffffff',
//                 backgroundGradientTo: '#ffffff',
//                 decimalPlaces: 1,
//                 color: (opacity = 1) => `rgba(0, 143, 251, ${opacity})`,
//                 labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//                 style: { borderRadius: 16 },
//                 propsForDots: { r: '6', strokeWidth: '2', stroke: '#ffa726' },
//                 propsForLabels: { fontSize: 10, rotation: 45, translateY: 20 },
//               }}
//               bezier
//               style={{ marginVertical: 8, borderRadius: 16 }}
//               formatXLabel={(value, index) => displayLabels[index]}
//             />
//           </ViewShot>
//         </ScrollView>
//         <View style={styles.chartButtons}>
//           <TouchableOpacity onPress={() => captureChart(ref)}>
//             <Text style={styles.buttonText}>Export PNG</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => exportChartToCSV(data)}>
//             <Text style={styles.buttonText}>Export CSV</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   return (
//     <Provider>
//       <ScrollView style={styles.container}>
//         <View style={isSmallScreen ? styles.column : styles.row}>
//           <View style={styles.dropdownContainer}>
//             <Text style={styles.label}>Device:</Text>
//             <Picker
//               selectedValue={device}
//               onValueChange={(itemValue) => setDevice(itemValue)}
//               style={styles.dropdown}
//             >
//               <PickerItem label='2JIOT-Global[Tokyo]' value='2JIOT-Global[Tokyo]' />
//             </Picker>
//           </View>
//           <View style={isSmallScreen ? styles.column : styles.row}>
//             <View style={styles.datePickerContainer}>
//               <Text style={styles.label}>From:</Text>
//               <Button onPress={() => setOpenFrom(true)} mode='outlined'>
//                 <Text>{fromDate.toLocaleString()}</Text>
//               </Button>
//               <DatePicker
//                 modal
//                 open={openFrom}
//                 date={fromDate}
//                 onConfirm={(date) => {
//                   setOpenFrom(false);
//                   setFromDate(date);
//                 }}
//                 onCancel={() => setOpenFrom(false)}
//               />
//             </View>
//             <View style={styles.datePickerContainer}>
//               <Text style={styles.label}>To:</Text>
//               <Button onPress={() => setOpenTo(true)} mode='outlined'>
//                 <Text>{toDate.toLocaleString()}</Text>
//               </Button>
//               <DatePicker
//                 modal
//                 open={openTo}
//                 date={toDate}
//                 onConfirm={(date) => {
//                   setOpenTo(false);
//                   setToDate(date);
//                 }}
//                 onCancel={() => setOpenTo(false)}
//               />
//             </View>
//           </View>
//         </View>
//         <Button mode='contained' onPress={fetchData} style={styles.fetchButton}>
//           <Text>Fetch</Text>
//         </Button>

//         {fetchedData ? (
//           <>
//             {renderChart('Temperature (°C)', fetchedData.list[0].data, tempChartRef)}
//             {renderChart('CPU Usage (%)', fetchedData.list[1].data, cpuChartRef)}
//             {renderChart('Memory Usage (%)', fetchedData.list[2].data, memoryChartRef)}

//             <View style={styles.tableContainer}>
//               <View style={styles.tableHeader}>
//                 <Text style={styles.tableTitle}>Device Metrics</Text>
//                 <Button mode='contained' onPress={exportTableToCSV}>
//                   <Text>Export</Text>
//                 </Button>
//               </View>
//               <ScrollView horizontal showsHorizontalScrollIndicator={true}>
//                 <DataTable style={styles.table}>
//                   <DataTable.Header>
//                     <DataTable.Title style={styles.tableColumn}>Timestamp</DataTable.Title>
//                     <DataTable.Title numeric style={styles.tableColumn}>Memory Usage</DataTable.Title>
//                     <DataTable.Title numeric style={styles.tableColumn}>CPU Usage</DataTable.Title>
//                     <DataTable.Title numeric style={styles.tableColumn}>Temperature (°C)</DataTable.Title>
//                   </DataTable.Header>
//                   <FlatList
//                     data={tableItems.slice(page * itemsPerPage, (page + 1) * itemsPerPage)}
//                     renderItem={({ item, index }) => (
//                       <DataTable.Row style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
//                         <DataTable.Cell style={styles.tableColumn}>{item.timestamp}</DataTable.Cell>
//                         <DataTable.Cell numeric style={styles.tableColumn}>{item.memoryUsage}</DataTable.Cell>
//                         <DataTable.Cell numeric style={styles.tableColumn}>{item.cpuUsage}</DataTable.Cell>
//                         <DataTable.Cell numeric style={styles.tableColumn}>{item.temperature}</DataTable.Cell>
//                       </DataTable.Row>
//                     )}
//                     keyExtractor={(item, index) => index.toString()}
//                   />
//                   <DataTable.Pagination
//                     page={page}
//                     numberOfPages={Math.ceil(tableItems.length / itemsPerPage)}
//                     onPageChange={(newPage) => setPage(newPage)}
//                     label={`${page * itemsPerPage + 1}-${Math.min((page + 1) * itemsPerPage, tableItems.length)} of ${tableItems.length}`}
//                   />
//                 </DataTable>
//               </ScrollView>
//             </View>
//           </>
//         ) : (
//           <Text style={styles.placeholderText}>Select device and date range to fetch data</Text>
//         )}
//       </ScrollView>
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#fff' },
//   row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
//   column: { flexDirection: 'column', marginBottom: 10 },
//   dropdownContainer: { flex: 1, marginRight: 10, marginBottom: 10 },
//   dropdown: { backgroundColor: '#f0f0f0', borderRadius: 5, height: 60 },
//   datePickerContainer: { flex: 1, marginRight: 10 },
//   fetchButton: { marginVertical: 10 },
//   chartContainer: { marginVertical: 10 },
//   chartTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
//   chartButtons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 },
//   buttonText: { color: '#008FFB', fontWeight: 'bold' },
//   tableContainer: { marginVertical: 10 },
//   tableHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
//   tableTitle: { fontSize: 16, fontWeight: 'bold' },
//   placeholderText: { textAlign: 'center', marginTop: 20, color: '#666' },
//   label: { fontSize: 16, marginBottom: 5 },
//   table: { minWidth: 600 },
//   tableColumn: { minWidth: 150, paddingHorizontal: 10 },
//   evenRow: { backgroundColor: '#f9f9f9' },
//   oddRow: { backgroundColor: '#fff' },
// });

// export default DeviceMetrics;


















































import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Provider, Button, DataTable } from 'react-native-paper';
import DatePicker from 'react-native-date-picker';
import { LineChart } from 'react-native-chart-kit';
import RNFS from 'react-native-fs';
import ViewShot from 'react-native-view-shot';
import { Picker } from '@react-native-picker/picker';

let Share = null;
try {
  Share = require('react-native-share').default;
} catch (e) {
  console.warn('react-native-share not available, exports will show alerts only.');
}

// Dummy data (simulating the API response, extended to 10 entries)
const dummyData = {
  list: [
    {
      name: 'temperature',
      color: '#008FFB',
      data: [
        { x: '2025-04-17T01:00:00.000Z', y: '63.4' },
        { x: '2025-04-18T01:00:00.000Z', y: '65.5' },
        { x: '2025-04-19T01:00:00.000Z', y: '67.0' },
        { x: '2025-04-20T01:00:00.000Z', y: '66.5' },
        { x: '2025-04-21T01:00:00.000Z', y: '67.8' },
        { x: '2025-04-22T01:00:00.000Z', y: '66.0' },
        { x: '2025-04-23T01:00:00.000Z', y: '66.5' },
        { x: '2025-04-24T01:00:00.000Z', y: '66.8' },
        { x: '2025-04-25T01:00:00.000Z', y: '66.7' },
        { x: '2025-04-26T01:00:00.000Z', y: '66.9' },
      ],
    },
    {
      name: 'cpuUsage',
      color: '#008FFB',
      data: [
        { x: '2025-04-17T01:00:00.000Z', y: '25.3' },
        { x: '2025-04-18T01:00:00.000Z', y: '25.5' },
        { x: '2025-04-19T01:00:00.000Z', y: '25.4' },
        { x: '2025-04-20T01:00:00.000Z', y: '25.5' },
        { x: '2025-04-21T01:00:00.000Z', y: '25.5' },
        { x: '2025-04-22T01:00:00.000Z', y: '25.5' },
        { x: '2025-04-23T01:00:00.000Z', y: '25.4' },
        { x: '2025-04-24T01:00:00.000Z', y: '25.5' },
        { x: '2025-04-25T01:00:00.000Z', y: '25.4' },
        { x: '2025-04-26T01:00:00.000Z', y: '25.5' },
      ],
    },
    {
      name: 'memoryUsage',
      color: '#008FFB',
      data: [
        { x: '2025-04-17T01:00:00.000Z', y: '10.0' },
        { x: '2025-04-18T01:00:00.000Z', y: '10.1' },
        { x: '2025-04-19T01:00:00.000Z', y: '10.0' },
        { x: '2025-04-20T01:00:00.000Z', y: '10.0' },
        { x: '2025-04-21T01:00:00.000Z', y: '10.0' },
        { x: '2025-04-22T01:00:00.000Z', y: '10.0' },
        { x: '2025-04-23T01:00:00.000Z', y: '10.0' },
        { x: '2025-04-24T01:00:00.000Z', y: '10.0' },
        { x: '2025-04-25T01:00:00.000Z', y: '10.0' },
        { x: '2025-04-26T01:00:00.000Z', y: '10.1' },
      ],
    },
  ],
};

// Table data (simulating the API response, extended to 10 entries)
const tableData = [
  { timestamp: '2025-04-17T01:51:42Z', memoryUsage: 10.0, cpuUsage: 25.3, temperature: 63.4 },
  { timestamp: '2025-04-18T01:58:62Z', memoryUsage: 10.1, cpuUsage: 25.5, temperature: 65.5 },
  { timestamp: '2025-04-19T01:36:15Z', memoryUsage: 10.0, cpuUsage: 25.4, temperature: 67.0 },
  { timestamp: '2025-04-20T01:12:57Z', memoryUsage: 10.0, cpuUsage: 25.5, temperature: 66.5 },
  { timestamp: '2025-04-21T01:48:95Z', memoryUsage: 10.0, cpuUsage: 25.5, temperature: 67.8 },
  { timestamp: '2025-04-22T01:56:67Z', memoryUsage: 10.0, cpuUsage: 25.5, temperature: 66.0 },
  { timestamp: '2025-04-23T01:34:82Z', memoryUsage: 10.0, cpuUsage: 25.4, temperature: 66.5 },
  { timestamp: '2025-04-24T01:24:80Z', memoryUsage: 10.0, cpuUsage: 25.5, temperature: 66.8 },
  { timestamp: '2025-04-25T01:30:00Z', memoryUsage: 10.0, cpuUsage: 25.4, temperature: 66.7 },
  { timestamp: '2025-04-26T01:30:00Z', memoryUsage: 10.1, cpuUsage: 25.5, temperature: 66.9 },
];

const DeviceMetrics = () => {
  const [device, setDevice] = useState('2JIOT-Global[Tokyo]');
  const [fromDate, setFromDate] = useState(new Date('2025-04-17T01:00:00.000Z'));
  const [toDate, setToDate] = useState(new Date('2025-04-26T01:00:00.000Z'));
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [tableItems, setTableItems] = useState([]);
  const [page, setPage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);
  const itemsPerPage = 10;

  const screenWidth = Dimensions.get('window').width;
  const chartWidth = screenWidth * 2 * zoomLevel;
  const isSmallScreen = screenWidth < 400;

  const tempChartRef = useRef();
  const cpuChartRef = useRef();
  const memoryChartRef = useRef();

  const fetchData = () => {
    setFetchedData(dummyData);
    setTableItems(tableData.filter(item => {
      const itemDate = new Date(item.timestamp);
      return itemDate >= fromDate && itemDate <= toDate;
    }));
  };

  const exportTableToCSV = async () => {
    try {
      const csvContent = [
        ['Timestamp', 'Memory Usage', 'CPU Usage', 'Temperature (°C)'],
        ...tableItems.map(item => [
          item.timestamp,
          item.memoryUsage,
          item.cpuUsage,
          item.temperature,
        ]),
      ]
        .map(row => row.join(','))
        .join('\n');

      const path = `${RNFS.DocumentDirectoryPath}/table_data.csv`;
      await RNFS.writeFile(path, csvContent, 'utf8');
      
      if (Share) {
        await Share.open({
          url: `file://${path}`,
          type: 'text/csv',
          failOnCancel: false,
        });
      } else {
        alert(`CSV exported to ${path}`);
      }
    } catch (error) {
      console.error('Error exporting table to CSV:', error);
      alert('Failed to export table to CSV');
    }
  };

  const captureChart = async (ref) => {
    try {
      const uri = await ref.current.capture();
      const path = `${RNFS.DocumentDirectoryPath}/chart.png`;
      await RNFS.moveFile(uri, path);
      
      if (Share) {
        await Share.open({
          url: `file://${path}`,
          type: 'image/png',
          failOnCancel: false,
        });
      } else {
        alert(`Chart exported to ${path}`);
      }
    } catch (error) {
      console.error('Error exporting chart to PNG:', error);
      alert('Failed to export chart to PNG');
    }
  };

  const exportChartToCSV = async (data) => {
    try {
      const csvContent = [
        ['Date', 'Value'],
        ...data.map(item => [item.x, item.y]),
      ]
        .map(row => row.join(','))
        .join('\n');

      const path = `${RNFS.DocumentDirectoryPath}/chart_data.csv`;
      await RNFS.writeFile(path, csvContent, 'utf8');
      
      if (Share) {
        await Share.open({
          url: `file://${path}`,
          type: 'text/csv',
          failOnCancel: false,
        });
      } else {
        alert(`Chart CSV exported to ${path}`);
      }
    } catch (error) {
      console.error('Error exporting chart to CSV:', error);
      alert('Failed to export chart to CSV');
    }
  };

  const renderChart = (title, data, ref) => {
    const labels = data.map(item => new Date(item.x).toLocaleDateString());
    const displayLabels = labels.filter((_, index) => index % Math.max(1, Math.floor(5 / zoomLevel)) === 0);

    return (
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>{title}</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={true}>
          <ViewShot ref={ref} options={{ format: 'png', quality: 0.9 }}>
            <LineChart
              data={{
                labels: displayLabels,
                datasets: [{ data: data.map(item => parseFloat(item.y)) }],
              }}
              width={chartWidth}
              height={220}
              yAxisLabel=''
              yAxisSuffix=''
              chartConfig={{
                backgroundColor: '#f0f0f0',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 1,
                color: (opacity = 1) => `rgba(0, 143, 251, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: { borderRadius: 16 },
                propsForDots: { r: '6', strokeWidth: '2', stroke: '#ffa726' },
                propsForLabels: { fontSize: 10, rotation: 45, translateY: 20 },
              }}
              bezier
              style={{ marginVertical: 8, borderRadius: 16 }}
            />
          </ViewShot>
        </ScrollView>
        <View style={styles.chartButtons}>
          <TouchableOpacity onPress={() => setZoomLevel(zoomLevel * 1.5)}>
            <Text style={styles.buttonText}>Zoom In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setZoomLevel(Math.max(0.5, zoomLevel / 1.5))}>
            <Text style={styles.buttonText}>Zoom Out</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => captureChart(ref)}>
            <Text style={styles.buttonText}>Export PNG</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => exportChartToCSV(data)}>
            <Text style={styles.buttonText}>Export CSV</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Provider>
      <ScrollView style={styles.container}>
        <View style={isSmallScreen ? styles.column : styles.row}>
          <View style={styles.dropdownContainer}>
            <Text style={styles.label}>Device:</Text>
            <Picker
              selectedValue={device}
              onValueChange={(itemValue) => setDevice(itemValue)}
              style={styles.dropdown}
            >
              <Picker.Item label='2JIOT-Global[Tokyo]' value='2JIOT-Global[Tokyo]' />
            </Picker>
          </View>
          <View style={isSmallScreen ? styles.column : styles.row}>
            <View style={styles.datePickerContainer}>
              <Text style={styles.label}>From:</Text>
              <Button onPress={() => setOpenFrom(true)} mode='outlined'>
                <Text>{fromDate.toLocaleString()}</Text>
              </Button>
              <DatePicker
                modal
                open={openFrom}
                date={fromDate}
                onConfirm={(date) => {
                  setOpenFrom(false);
                  setFromDate(date);
                }}
                onCancel={() => setOpenFrom(false)}
              />
            </View>
            <View style={styles.datePickerContainer}>
              <Text style={styles.label}>To:</Text>
              <Button onPress={() => setOpenTo(true)} mode='outlined'>
                <Text>{toDate.toLocaleString()}</Text>
              </Button>
              <DatePicker
                modal
                open={openTo}
                date={toDate}
                onConfirm={(date) => {
                  setOpenTo(false);
                  setToDate(date);
                }}
                onCancel={() => setOpenTo(false)}
              />
            </View>
          </View>
        </View>
        <Button mode='contained' onPress={fetchData} style={styles.fetchButton}>
          <Text>Fetch</Text>
        </Button>

        {fetchedData ? (
          <>
            {renderChart('Temperature (°C)', fetchedData.list[0].data, tempChartRef)}
            {renderChart('CPU Usage (%)', fetchedData.list[1].data, cpuChartRef)}
            {renderChart('Memory Usage (%)', fetchedData.list[2].data, memoryChartRef)}

            <View style={styles.tableContainer}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableTitle}>Device Metrics</Text>
                <Button mode='contained' onPress={exportTableToCSV}>
                  <Text>Export</Text>
                </Button>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                <DataTable style={styles.table}>
                  <DataTable.Header>
                    <DataTable.Title style={styles.tableColumn}>Timestamp</DataTable.Title>
                    <DataTable.Title numeric style={styles.tableColumn}>Memory Usage</DataTable.Title>
                    <DataTable.Title numeric style={styles.tableColumn}>CPU Usage</DataTable.Title>
                    <DataTable.Title numeric style={styles.tableColumn}>Temperature (°C)</DataTable.Title>
                  </DataTable.Header>
                  <FlatList
                    data={tableItems.slice(page * itemsPerPage, (page + 1) * itemsPerPage)}
                    renderItem={({ item, index }) => (
                      <DataTable.Row style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                        <DataTable.Cell style={styles.tableColumn}>{item.timestamp}</DataTable.Cell>
                        <DataTable.Cell numeric style={styles.tableColumn}>{item.memoryUsage}</DataTable.Cell>
                        <DataTable.Cell numeric style={styles.tableColumn}>{item.cpuUsage}</DataTable.Cell>
                        <DataTable.Cell numeric style={styles.tableColumn}>{item.temperature}</DataTable.Cell>
                      </DataTable.Row>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                  />
                  <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.ceil(tableItems.length / itemsPerPage)}
                    onPageChange={(newPage) => setPage(newPage)}
                    label={`${page * itemsPerPage + 1}-${Math.min((page + 1) * itemsPerPage, tableItems.length)} of ${tableItems.length}`}
                  />
                </DataTable>
              </ScrollView>
            </View>
          </>
        ) : (
          <Text style={styles.placeholderText}>Select device and date range to fetch data</Text>
        )}
      </ScrollView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  column: { flexDirection: 'column', marginBottom: 10 },
  dropdownContainer: { flex: 1, marginRight: 10, marginBottom: 10 },
  dropdown: { backgroundColor: '#f0f0f0', borderRadius: 5, height: 60 },
  datePickerContainer: { flex: 1, marginRight: 10 },
  fetchButton: { marginVertical: 10 },
  chartContainer: { marginVertical: 10 },
  chartTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  chartButtons: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 5 },
  buttonText: { color: '#008FFB', fontWeight: 'bold' },
  tableContainer: { marginVertical: 10 },
  tableHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  tableTitle: { fontSize: 16, fontWeight: 'bold' },
  placeholderText: { textAlign: 'center', marginTop: 20, color: '#666' },
  label: { fontSize: 16, marginBottom: 5 },
  table: { minWidth: 600 },
  tableColumn: { minWidth: 150, paddingHorizontal: 10 },
  evenRow: { backgroundColor: '#f9f9f9' },
  oddRow: { backgroundColor: '#fff' },
});

export default DeviceMetrics;

// import React from 'react';
// import { View, StyleSheet, ScrollView, Text } from 'react-native';
// import { Table, Row, Rows } from 'react-native-table-component';

// const SimsTable = () => {
//   const tableHead = ['IMSI', 'ICCID', 'MSISDN', 'Activation Date', 'Status'];
//   const tableData = [
//     ['9014************49', '8988************49', '8822********44', '2024-09-10T08:15:11.000+00:00', 'Enabled'],
//     ['9014************50', '8988************50', '8822********45', '2024-09-10T08:15:11.000+00:00', 'Enabled'],
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerTitle}>SIMS INFORMATION</Text>
//       <ScrollView horizontal={true}>
//         <Table borderStyle={styles.tableBorder}>
//           <Row
//             data={tableHead}
//             style={styles.head}
//             textStyle={styles.headText}
//             widthArr={[150, 150, 150, 200, 100]}
//           />
//           <Rows
//             data={tableData}
//             textStyle={styles.text}
//             widthArr={[150, 150, 150, 200, 100]}
//           />
//         </Table>
//       </ScrollView>
//       <View style={styles.pagination}>
//         <Text style={styles.paginationText}>Rows per page: 10</Text>
//         <Text style={styles.paginationText}>1-2 of 2</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   tableBorder: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   head: {
//     height: 50,
//     backgroundColor: '#1E90FF',
//   },
//   headText: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: '#fff',
//     marginHorizontal: 5,
//   },
//   text: {
//     textAlign: 'center',
//     fontSize: 14,
//     marginHorizontal: 5,
//     paddingVertical: 5,
//   },
//   pagination: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   paginationText: {
//     fontSize: 14,
//     color: '#333',
//   },
// });

// export default SimsTable;






















// import React from 'react';
// import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
// import { Table, Row, Rows } from 'react-native-table-component';
// import { useNavigation } from '@react-navigation/native';
// import SimInformation from './SimInformation';

// const SimsTable = () => {
//   const navigation = useNavigation();
//   const tableHead = ['IMSI', 'ICCID', 'MSISDN', 'Activation Date', 'Status'];
//   const tableData = [
//     ['9014************49', '8988************49', '8822********44', '2024-09-10T08:15:11.000+00:00', 'Enabled'],
//     ['9014************50', '8988************50', '8822********45', '2024-09-10T08:15:11.000+00:00', 'Enabled'],
//   ];

//   const handleRowPress = (rowData) => {
//     const simInfo = {
//       imsi: rowData[0],
//       iccid: rowData[1],
//       msisdn: rowData[2],
//       activationDate: rowData[3],
//       status: rowData[4],
//     };
//     navigation.navigate('SimInformation', { simInfo });
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.headerTitle}>SIMS INFORMATION</Text>
//       <ScrollView horizontal={true}>
//         <Table borderStyle={styles.tableBorder}>
//           <Row
//             data={tableHead}
//             style={styles.head}
//             textStyle={styles.headText}
//             widthArr={[150, 150, 150, 200, 100]}
//           />
//           <Rows
//             data={tableData}
//             textStyle={styles.text}
//             widthArr={[150, 150, 150, 200, 100]}
//             renderCell={(value, rowIndex, colIndex) => (
//               <TouchableOpacity
//                 onPress={() => handleRowPress(tableData[rowIndex])}
//                 style={styles.cellButton}
//                 activeOpacity={0.7}
//               >
//                 <View style={styles.cell}>
//                   <Text style={styles.text}>{value}</Text>
//                 </View>
//               </TouchableOpacity>
//             )}
//           />
//         </Table>
//       </ScrollView>
//       <View style={styles.pagination}>
//         <Text style={styles.paginationText}>Rows per page: 10</Text>
//         <Text style={styles.paginationText}>1-2 of 2</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 10,
//   },
//   tableBorder: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//   },
//   head: {
//     height: 50,
//     backgroundColor: '#1E90FF',
//   },
//   headText: {
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: '#fff',
//     marginHorizontal: 5,
//   },
//   text: {
//     textAlign: 'center',
//     fontSize: 14,
//     marginHorizontal: 5,
//     paddingVertical: 5,
//   },
//   cell: {
//     paddingVertical: 5,
//     flex: 1,
//     justifyContent: 'center',
//   },
//   cellButton: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   pagination: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//   },
//   paginationText: {
//     fontSize: 14,
//     color: '#333',
//   },
// });

// export default SimsTable;





































import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SimsTable = () => {
  const navigation = useNavigation();

  const initialData = [
    ['9014************49', '8988************49', '8822********44', '2024-09-10T08:15:11.000+00:00', 'Enabled'],
    ['9014************50', '8988************50', '8822********45', '2024-09-10T08:15:11.000+00:00', 'Enabled'],
    // Add more rows here if needed
  ];

  const [tableData, setTableData] = useState(initialData);

  const handleRowPress = (rowData) => {
    const simInfo = {
      imsi: rowData[0],
      iccid: rowData[1],
      msisdn: rowData[2],
      activationDate: rowData[3],
      status: rowData[4],
    };
    navigation.navigate('SimInformation', { simInfo });
  };

  const renderHeader = () => (
    <View style={styles.headerRow}>
      {['IMSI', 'ICCID', 'MSISDN', 'Activation Date', 'Status'].map((header, index) => (
        <Text key={index} style={[styles.cell, styles.headerCell]}>
          {header}
        </Text>
      ))}
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleRowPress(item)} activeOpacity={0.7}>
      <View style={styles.dataRow}>
        {item.map((value, index) => (
          <Text key={index} style={styles.cell}>
            {value}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );

  const loadMoreItems = () => {
    // Simulate fetching more data
    const moreData = [
      ['9014************51', '8988************51', '8822********46', '2024-09-10T08:15:11.000+00:00', 'Enabled'],
      ['9014************52', '8988************52', '8822********47', '2024-09-10T08:15:11.000+00:00', 'Disabled'],
    ];
    setTableData((prev) => [...prev, ...moreData]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SIMS INFORMATION</Text>
      <ScrollView horizontal={true}>
        <View>
          {renderHeader()}
          <FlatList
            data={tableData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            onEndReached={loadMoreItems}
            onEndReachedThreshold={0.7}
            scrollEnabled={true} // disables vertical scroll since horizontal ScrollView handles overflow
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#1E90FF',
  },
  dataRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  cell: {
    padding: 10,
    minWidth: 160,
    fontSize: 14,
    textAlign: 'center',
  },
  headerCell: {
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SimsTable;

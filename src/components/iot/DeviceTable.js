// import React from 'react';
// import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import { Table, Row, Rows } from 'react-native-table-component';

// const DeviceTable = ({ data, onRowPress }) => {
//   const tableHead = ['Id', 'Device', 'Location', 'Region', 'Latitude', 'Longitude'];

//   if (!data || data.length === 0) {
//     return (
//       <View style={styles.tableContainer}>
//         <Text style={styles.noDataText}>No devices available</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.tableContainer}>
//       <ScrollView horizontal={true} style={styles.tableScroll}>
//         <Table borderStyle={styles.tableBorder}>
//           <Row
//             data={tableHead}
//             style={styles.head}
//             textStyle={styles.headText}
//             widthArr={[60, 120, 120, 100, 100, 100]}
//           />
//           <Rows
//             data={data.map(item => [
//               item.id,
//               item.device,
//               item.location,
//               item.region,
//               item.latitude,
//               item.longitude,
//             ])}
//             textStyle={styles.text}
//             widthArr={[60, 120, 120, 100, 100, 100]}
//             renderCell={(value, rowIndex, colIndex) => (
//             //   <TouchableOpacity onPress={() => onRowPress(data[rowIndex])}>
//             <TouchableOpacity
//             onPress={() => {
//               console.log('Row clicked:', data[rowIndex]); // Debug click
//               if (onRowPress) {
//                 onRowPress(data[rowIndex]);
//               } else {
//                 console.warn('onRowPress is not defined');
//               }
//             }}
//             style={styles.cellButton}
//             activeOpacity={0.7}
//           >
//             <View style={styles.cell}>
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
//   tableContainer: {
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 8,
//     marginBottom: 10,
//   },
//   tableScroll: {
//     overflow: 'scroll',
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
//   },
//   noDataText: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#666',
//     padding: 20,
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

// export default DeviceTable;
















import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';

const DeviceTable = ({ data, onRowPress }) => {
  const tableHead = ['Id', 'Device', 'Location', 'Region', 'Latitude', 'Longitude'];

  const renderHeader = () => (
    <View style={styles.headerRow}>
      {tableHead.map((head, index) => (
        <Text key={index} style={[styles.cell, styles.headerCell]}>
          {head}
        </Text>
      ))}
    </View>
  );

  const renderRow = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        console.log('Row clicked', item);
        if (onRowPress) onRowPress(item);
      }}
    >
      <View style={styles.dataRow}>
        <Text style={styles.cell}>{item.id}</Text>
        <Text style={styles.cell}>{item.device}</Text>
        <Text style={styles.cell}>{item.location}</Text>
        <Text style={styles.cell}>{item.region}</Text>
        <Text style={styles.cell}>{item.latitude}</Text>
        <Text style={styles.cell}>{item.longitude}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DEVICES</Text>
      <ScrollView horizontal={true}>
        <View>
          {renderHeader()}
          <FlatList
            data={data}
            keyExtractor={(item, index) => item.id?.toString() ?? index.toString()}
            renderItem={renderRow}
            onEndReachedThreshold={0.7}
            // onEndReached can be added if pagination is needed
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

export default DeviceTable;

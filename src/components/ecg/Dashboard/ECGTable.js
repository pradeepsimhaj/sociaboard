import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

const ECGTable = () => {
  const tableHead = ['ECG ID', 'Status', 'Latitude', 'Longitude', 'Uploaded Date'];
  const tableData = [
    ['1', 'abnormal', '', '', '2025-02-15T16:11:33.785Z'],
    ['2', 'abnormal', '', '', '2025-02-15T16:11:33.785Z'],
    ['3', 'abnormal', '', '', '2025-02-15T16:11:33.785Z'],
    ['4', 'abnormal', '', '', '2025-02-15T16:11:33.785Z'],
    ['5', 'abnormal', '', '', '2025-02-15T16:11:33.785Z'],
    ['6', 'abnormal', '', '', '2025-02-15T16:11:33.785Z'],
    ['7', 'abnormal', '', '', '2025-02-15T16:11:33.785Z'],
    ['8', 'abnormal', '', '', '2025-02-15T16:11:33.785Z'],
    ['9', 'abnormal', '', '', '2025-02-15T16:11:33.785Z'],
    ['10', 'abnormal', '', '', '2025-02-15T16:11:33.785Z'],
  ];

  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableWrapper}>
        <ScrollView horizontal={true} style={styles.tableScroll}>
          <Table borderStyle={styles.tableBorder}>
            <Row
              data={tableHead}
              style={styles.head}
              textStyle={styles.headText}
              widthArr={[80, 100, 100, 100, 200]}
            />
            <Rows
              data={tableData}
              textStyle={styles.text}
              widthArr={[80, 100, 100, 100, 200]}
            />
          </Table>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    backgroundColor: '#e6fae6',
    padding: 10,
    borderRadius: 8,
  },
  tableWrapper: {
    width: '95%',
    alignSelf: 'center',
  },
  tableScroll: {
    overflow: 'scroll',
  },
  tableBorder: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  head: {
    height: 50,
    backgroundColor: '#f1f8ff',
  },
  headText: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    marginHorizontal: 10,
    paddingVertical: 5,
  },
});

export default ECGTable;

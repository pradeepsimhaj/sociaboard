// import React, { useState, useRef } from 'react';
// import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';
// import { Provider, Button, DataTable } from 'react-native-paper';
// import DatePicker from 'react-native-date-picker';
// import { LineChart } from 'react-native-chart-kit';
// import RNFS from 'react-native-fs';
// import ViewShot from 'react-native-view-shot';
// // import Share from 'react-native-share';
// import { Picker, PickerItem } from '@react-native-picker/picker';

// let Share = null;
// try {
//   Share = require('react-native-share').default;
// } catch (e) {
//   console.warn('react-native-share not available, exports will show alerts only.');
// }

// // Dummy data for Environment Metrics
// const dummyData = {
//   list: [
//     { name: 'temperature', color: '#008FFB', data: [
//       { x: '2025-04-13T22:00:00.000Z', y: '18.85' }, { x: '2025-04-13T23:00:00.000Z', y: '18.83' },
//       { x: '2025-04-14T00:00:00.000Z', y: '18.85' }, { x: '2025-04-14T01:00:00.000Z', y: '18.96' },
//       { x: '2025-04-14T02:00:00.000Z', y: '19.36' }, { x: '2025-04-14T03:00:00.000Z', y: '19.21' },
//       { x: '2025-04-14T04:00:00.000Z', y: '19.35' }, { x: '2025-04-14T05:00:00.000Z', y: '19.43' },
//       { x: '2025-04-14T06:00:00.000Z', y: '19.49' }, { x: '2025-04-14T07:00:00.000Z', y: '19.55' },
//       { x: '2025-04-14T08:00:00.000Z', y: '19.58' }, { x: '2025-04-14T09:00:00.000Z', y: '19.51' },
//       { x: '2025-04-14T10:00:00.000Z', y: '19.35' }, { x: '2025-04-14T11:00:00.000Z', y: '19.17' },
//       { x: '2025-04-14T12:00:00.000Z', y: '19.35' }, { x: '2025-04-14T13:00:00.000Z', y: '19.04' },
//       { x: '2025-04-14T14:00:00.000Z', y: '18.93' }, { x: '2025-04-14T15:00:00.000Z', y: '18.86' },
//       { x: '2025-04-14T16:00:00.000Z', y: '18.80' }, { x: '2025-04-14T17:00:00.000Z', y: '18.73' },
//       { x: '2025-04-14T18:00:00.000Z', y: '18.70' }, { x: '2025-04-14T19:00:00.000Z', y: '18.64' },
//       { x: '2025-04-14T20:00:00.000Z', y: '18.56' }, { x: '2025-04-14T21:00:00.000Z', y: '18.53' },
//       { x: '2025-04-14T22:00:00.000Z', y: '18.52' }, { x: '2025-04-14T23:00:00.000Z', y: '18.65' },
//       { x: '2025-04-15T00:00:00.000Z', y: '18.67' }, { x: '2025-04-15T01:00:00.000Z', y: '18.88' },
//       { x: '2025-04-15T02:00:00.000Z', y: '19.26' }, { x: '2025-04-15T03:00:00.000Z', y: '19.19' },
//       { x: '2025-04-15T04:00:00.000Z', y: '19.35' }, { x: '2025-04-15T05:00:00.000Z', y: '19.44' },
//       { x: '2025-04-15T06:00:00.000Z', y: '19.52' }, { x: '2025-04-15T07:00:00.000Z', y: '19.55' },
//       { x: '2025-04-15T08:00:00.000Z', y: '19.50' }, { x: '2025-04-15T09:00:00.000Z', y: '19.43' },
//       { x: '2025-04-15T10:00:00.000Z', y: '19.37' }, { x: '2025-04-15T11:00:00.000Z', y: '19.24' },
//       { x: '2025-04-15T12:00:00.000Z', y: '19.22' }, { x: '2025-04-15T13:00:00.000Z', y: '19.22' },
//       { x: '2025-04-15T14:00:00.000Z', y: '18.83' }, { x: '2025-04-15T15:00:00.000Z', y: '18.70' },
//       { x: '2025-04-15T16:00:00.000Z', y: '18.59' }, { x: '2025-04-15T17:00:00.000Z', y: '18.46' },
//       { x: '2025-04-15T18:00:00.000Z', y: '18.37' }, { x: '2025-04-15T19:00:00.000Z', y: '18.30' },
//       { x: '2025-04-15T20:00:00.000Z', y: '18.24' }, { x: '2025-04-15T21:00:00.000Z', y: '18.20' },
//       { x: '2025-04-15T22:00:00.000Z', y: '18.17' }, { x: '2025-04-15T23:00:00.000Z', y: '18.19' },
//       { x: '2025-04-16T00:00:00.000Z', y: '18.29' }, { x: '2025-04-16T01:00:00.000Z', y: '18.58' },
//       { x: '2025-04-16T02:00:00.000Z', y: '18.87' }, { x: '2025-04-16T03:00:00.000Z', y: '19.10' },
//       { x: '2025-04-16T04:00:00.000Z', y: '19.23' }, { x: '2025-04-16T05:00:00.000Z', y: '19.30' },
//       { x: '2025-04-16T06:00:00.000Z', y: '19.39' }, { x: '2025-04-16T07:00:00.000Z', y: '19.46' },
//       { x: '2025-04-16T08:00:00.000Z', y: '19.51' }, { x: '2025-04-16T09:00:00.000Z', y: '19.45' },
//       { x: '2025-04-16T10:00:00.000Z', y: '19.33' }, { x: '2025-04-16T11:00:00.000Z', y: '19.18' },
//       { x: '2025-04-16T12:00:00.000Z', y: '19.40' }, { x: '2025-04-16T13:00:00.000Z', y: '19.10' },
//       { x: '2025-04-16T14:00:00.000Z', y: '18.95' }, { x: '2025-04-16T15:00:00.000Z', y: '18.91' },
//       { x: '2025-04-16T16:00:00.000Z', y: '18.84' }, { x: '2025-04-16T17:00:00.000Z', y: '18.79' },
//       { x: '2025-04-16T18:00:00.000Z', y: '18.75' }, { x: '2025-04-16T19:00:00.000Z', y: '18.71' },
//       { x: '2025-04-16T20:00:00.000Z', y: '18.69' }, { x: '2025-04-16T21:00:00.000Z', y: '18.70' },
//       { x: '2025-04-16T22:00:00.000Z', y: '18.75' }, { x: '2025-04-16T23:00:00.000Z', y: '18.80' },
//       { x: '2025-04-17T00:00:00.000Z', y: '19.00' }, { x: '2025-04-17T01:00:00.000Z', y: '19.39' },
//       { x: '2025-04-17T02:00:00.000Z', y: '19.29' }, { x: '2025-04-17T03:00:00.000Z', y: '19.42' },
//       { x: '2025-04-17T04:00:00.000Z', y: '19.58' }, { x: '2025-04-17T05:00:00.000Z', y: '19.72' },
//       { x: '2025-04-17T06:00:00.000Z', y: '19.84' }, { x: '2025-04-17T07:00:00.000Z', y: '19.96' },
//       { x: '2025-04-17T08:00:00.000Z', y: '20.33' }, { x: '2025-04-17T09:00:00.000Z', y: '20.70' },
//       { x: '2025-04-17T10:00:00.000Z', y: '20.38' }, { x: '2025-04-17T11:00:00.000Z', y: '20.44' },
//       { x: '2025-04-17T12:00:00.000Z', y: '20.72' }, { x: '2025-04-17T13:00:00.000Z', y: '20.72' },
//       { x: '2025-04-17T14:00:00.000Z', y: '20.47' }, { x: '2025-04-17T15:00:00.000Z', y: '20.07' },
//       { x: '2025-04-17T16:00:00.000Z', y: '19.96' }, { x: '2025-04-17T17:00:00.000Z', y: '19.92' },
//       { x: '2025-04-17T18:00:00.000Z', y: '19.85' }, { x: '2025-04-17T19:00:00.000Z', y: '19.77' },
//       { x: '2025-04-17T20:00:00.000Z', y: '19.68' }, { x: '2025-04-17T21:00:00.000Z', y: '19.62' },
//       { x: '2025-04-17T22:00:00.000Z', y: '19.66' }, { x: '2025-04-17T23:00:00.000Z', y: '19.77' },
//       { x: '2025-04-18T00:00:00.000Z', y: '19.85' }, { x: '2025-04-18T01:00:00.000Z', y: '19.96' }
//     ] },
//     { name: 'humidity', color: '#008FFB', data: [
//       { x: '2025-04-13T22:00:00.000Z', y: '73.79' }, { x: '2025-04-13T23:00:00.000Z', y: '73.52' },
//       { x: '2025-04-14T00:00:00.000Z', y: '72.68' }, { x: '2025-04-14T01:00:00.000Z', y: '71.19' },
//       { x: '2025-04-14T02:00:00.000Z', y: '69.54' }, { x: '2025-04-14T03:00:00.000Z', y: '68.17' },
//       { x: '2025-04-14T04:00:00.000Z', y: '66.67' }, { x: '2025-04-14T05:00:00.000Z', y: '63.48' },
//       { x: '2025-04-14T06:00:00.000Z', y: '60.73' }, { x: '2025-04-14T07:00:00.000Z', y: '57.51' },
//       { x: '2025-04-14T08:00:00.000Z', y: '54.67' }, { x: '2025-04-14T09:00:00.000Z', y: '53.69' },
//       { x: '2025-04-14T10:00:00.000Z', y: '53.49' }, { x: '2025-04-14T11:00:00.000Z', y: '54.07' },
//       { x: '2025-04-14T12:00:00.000Z', y: '54.18' }, { x: '2025-04-14T13:00:00.000Z', y: '53.84' },
//       { x: '2025-04-14T14:00:00.000Z', y: '53.61' }, { x: '2025-04-14T15:00:00.000Z', y: '53.99' },
//       { x: '2025-04-14T16:00:00.000Z', y: '54.63' }, { x: '2025-04-14T17:00:00.000Z', y: '57.01' },
//       { x: '2025-04-14T18:00:00.000Z', y: '58.65' }, { x: '2025-04-14T19:00:00.000Z', y: '59.75' },
//       { x: '2025-04-14T20:00:00.000Z', y: '61.72' }, { x: '2025-04-14T21:00:00.000Z', y: '62.08' },
//       { x: '2025-04-14T22:00:00.000Z', y: '62.68' }, { x: '2025-04-14T23:00:00.000Z', y: '63.40' },
//       { x: '2025-04-15T00:00:00.000Z', y: '63.64' }, { x: '2025-04-15T01:00:00.000Z', y: '62.57' },
//       { x: '2025-04-15T02:00:00.000Z', y: '59.76' }, { x: '2025-04-15T03:00:00.000Z', y: '56.43' },
//       { x: '2025-04-15T04:00:00.000Z', y: '53.73' }, { x: '2025-04-15T05:00:00.000Z', y: '51.42' },
//       { x: '2025-04-15T06:00:00.000Z', y: '48.43' }, { x: '2025-04-15T07:00:00.000Z', y: '47.22' },
//       { x: '2025-04-15T08:00:00.000Z', y: '46.22' }, { x: '2025-04-15T09:00:00.000Z', y: '43.97' },
//       { x: '2025-04-15T10:00:00.000Z', y: '41.33' }, { x: '2025-04-15T11:00:00.000Z', y: '39.43' },
//       { x: '2025-04-15T12:00:00.000Z', y: '38.94' }, { x: '2025-04-15T13:00:00.000Z', y: '38.42' },
//       { x: '2025-04-15T14:00:00.000Z', y: '37.42' }, { x: '2025-04-15T15:00:00.000Z', y: '36.62' },
//       { x: '2025-04-15T16:00:00.000Z', y: '36.22' }, { x: '2025-04-15T17:00:00.000Z', y: '36.27' },
//       { x: '2025-04-15T18:00:00.000Z', y: '35.79' }, { x: '2025-04-15T19:00:00.000Z', y: '35.58' },
//       { x: '2025-04-15T20:00:00.000Z', y: '35.64' }, { x: '2025-04-15T21:00:00.000Z', y: '35.69' },
//       { x: '2025-04-15T22:00:00.000Z', y: '35.54' }, { x: '2025-04-15T23:00:00.000Z', y: '34.69' },
//       { x: '2025-04-16T00:00:00.000Z', y: '34.12' }, { x: '2025-04-16T01:00:00.000Z', y: '34.45' },
//       { x: '2025-04-16T02:00:00.000Z', y: '35.39' }, { x: '2025-04-16T03:00:00.000Z', y: '35.84' },
//       { x: '2025-04-16T04:00:00.000Z', y: '37.38' }, { x: '2025-04-16T05:00:00.000Z', y: '39.24' },
//       { x: '2025-04-16T06:00:00.000Z', y: '40.32' }, { x: '2025-04-16T07:00:00.000Z', y: '40.56' },
//       { x: '2025-04-16T08:00:00.000Z', y: '40.77' }, { x: '2025-04-16T09:00:00.000Z', y: '38.62' },
//       { x: '2025-04-16T10:00:00.000Z', y: '35.74' }, { x: '2025-04-16T11:00:00.000Z', y: '33.86' },
//       { x: '2025-04-16T12:00:00.000Z', y: '32.94' }, { x: '2025-04-16T13:00:00.000Z', y: '31.93' },
//       { x: '2025-04-16T14:00:00.000Z', y: '31.71' }, { x: '2025-04-16T15:00:00.000Z', y: '31.78' },
//       { x: '2025-04-16T16:00:00.000Z', y: '31.30' }, { x: '2025-04-16T17:00:00.000Z', y: '30.70' },
//       { x: '2025-04-16T18:00:00.000Z', y: '30.76' }, { x: '2025-04-16T19:00:00.000Z', y: '32.56' },
//       { x: '2025-04-16T20:00:00.000Z', y: '35.49' }, { x: '2025-04-16T21:00:00.000Z', y: '39.68' },
//       { x: '2025-04-16T22:00:00.000Z', y: '42.88' }, { x: '2025-04-16T23:00:00.000Z', y: '44.83' },
//       { x: '2025-04-17T00:00:00.000Z', y: '45.47' }, { x: '2025-04-17T01:00:00.000Z', y: '45.72' },
//       { x: '2025-04-17T02:00:00.000Z', y: '46.19' }, { x: '2025-04-17T03:00:00.000Z', y: '46.37' },
//       { x: '2025-04-17T04:00:00.000Z', y: '47.01' }, { x: '2025-04-17T05:00:00.000Z', y: '47.79' },
//       { x: '2025-04-17T06:00:00.000Z', y: '48.57' }, { x: '2025-04-17T07:00:00.000Z', y: '48.79' },
//       { x: '2025-04-17T08:00:00.000Z', y: '49.18' }, { x: '2025-04-17T09:00:00.000Z', y: '48.96' },
//       { x: '2025-04-17T10:00:00.000Z', y: '50.47' }, { x: '2025-04-17T11:00:00.000Z', y: '53.38' },
//       { x: '2025-04-17T12:00:00.000Z', y: '56.35' }, { x: '2025-04-17T13:00:00.000Z', y: '58.77' },
//       { x: '2025-04-17T14:00:00.000Z', y: '60.83' }, { x: '2025-04-17T15:00:00.000Z', y: '62.17' },
//       { x: '2025-04-17T16:00:00.000Z', y: '62.96' }, { x: '2025-04-17T17:00:00.000Z', y: '63.24' },
//       { x: '2025-04-17T18:00:00.000Z', y: '61.00' }, { x: '2025-04-17T19:00:00.000Z', y: '56.78' },
//       { x: '2025-04-17T20:00:00.000Z', y: '54.38' }, { x: '2025-04-17T21:00:00.000Z', y: '52.89' },
//       { x: '2025-04-17T22:00:00.000Z', y: '52.34' }, { x: '2025-04-17T23:00:00.000Z', y: '51.93' },
//       { x: '2025-04-18T00:00:00.000Z', y: '51.84' }, { x: '2025-04-18T01:00:00.000Z', y: '52.86' }
//     ] },
//     { name: 'pressure', color: '#008FFB', data: [
//       { x: '2025-04-13T22:00:00.000Z', y: '99.74' }, { x: '2025-04-13T23:00:00.000Z', y: '99.72' },
//       { x: '2025-04-14T00:00:00.000Z', y: '99.70' }, { x: '2025-04-14T01:00:00.000Z', y: '99.68' },
//       { x: '2025-04-14T02:00:00.000Z', y: '99.62' }, { x: '2025-04-14T03:00:00.000Z', y: '99.56' },
//       { x: '2025-04-14T04:00:00.000Z', y: '99.50' }, { x: '2025-04-14T05:00:00.000Z', y: '99.46' },
//       { x: '2025-04-14T06:00:00.000Z', y: '99.44' }, { x: '2025-04-14T07:00:00.000Z', y: '99.46' },
//       { x: '2025-04-14T08:00:00.000Z', y: '99.48' }, { x: '2025-04-14T09:00:00.000Z', y: '99.51' },
//       { x: '2025-04-14T10:00:00.000Z', y: '99.54' }, { x: '2025-04-14T11:00:00.000Z', y: '99.58' },
//       { x: '2025-04-14T12:00:00.000Z', y: '99.60' }, { x: '2025-04-14T13:00:00.000Z', y: '99.64' },
//       { x: '2025-04-14T14:00:00.000Z', y: '99.68' }, { x: '2025-04-14T15:00:00.000Z', y: '99.63' },
//       { x: '2025-04-14T16:00:00.000Z', y: '99.52' }, { x: '2025-04-14T17:00:00.000Z', y: '99.45' },
//       { x: '2025-04-14T18:00:00.000Z', y: '99.38' }, { x: '2025-04-14T19:00:00.000Z', y: '99.40' },
//       { x: '2025-04-14T20:00:00.000Z', y: '99.31' }, { x: '2025-04-14T21:00:00.000Z', y: '99.21' },
//       { x: '2025-04-14T22:00:00.000Z', y: '99.38' }, { x: '2025-04-14T23:00:00.000Z', y: '99.39' },
//       { x: '2025-04-15T00:00:00.000Z', y: '99.30' }, { x: '2025-04-15T01:00:00.000Z', y: '98.95' },
//       { x: '2025-04-15T02:00:00.000Z', y: '98.85' }, { x: '2025-04-15T03:00:00.000Z', y: '98.76' },
//       { x: '2025-04-15T04:00:00.000Z', y: '98.69' }, { x: '2025-04-15T05:00:00.000Z', y: '98.60' },
//       { x: '2025-04-15T06:00:00.000Z', y: '98.55' }, { x: '2025-04-15T07:00:00.000Z', y: '98.53' },
//       { x: '2025-04-15T08:00:00.000Z', y: '98.60' }, { x: '2025-04-15T09:00:00.000Z', y: '98.78' },
//       { x: '2025-04-15T10:00:00.000Z', y: '99.14' }, { x: '2025-04-15T11:00:00.000Z', y: '99.28' },
//       { x: '2025-04-15T12:00:00.000Z', y: '99.31' }, { x: '2025-04-15T13:00:00.000Z', y: '99.39' },
//       { x: '2025-04-15T14:00:00.000Z', y: '99.50' }, { x: '2025-04-15T15:00:00.000Z', y: '99.58' },
//       { x: '2025-04-15T16:00:00.000Z', y: '99.63' }, { x: '2025-04-15T17:00:00.000Z', y: '99.70' },
//       { x: '2025-04-15T18:00:00.000Z', y: '99.78' }, { x: '2025-04-15T19:00:00.000Z', y: '99.86' },
//       { x: '2025-04-15T20:00:00.000Z', y: '100.03' }, { x: '2025-04-15T21:00:00.000Z', y: '100.36' },
//       { x: '2025-04-15T22:00:00.000Z', y: '100.26' }, { x: '2025-04-15T23:00:00.000Z', y: '100.14' },
//       { x: '2025-04-16T00:00:00.000Z', y: '100.75' }, { x: '2025-04-16T01:00:00.000Z', y: '100.47' },
//       { x: '2025-04-16T02:00:00.000Z', y: '100.26' }, { x: '2025-04-16T03:00:00.000Z', y: '100.47' },
//       { x: '2025-04-16T04:00:00.000Z', y: '100.14' }, { x: '2025-04-16T05:00:00.000Z', y: '99.98' },
//       { x: '2025-04-16T06:00:00.000Z', y: '100.35' }, { x: '2025-04-16T07:00:00.000Z', y: '100.23' },
//       { x: '2025-04-16T08:00:00.000Z', y: '100.26' }, { x: '2025-04-16T09:00:00.000Z', y: '100.43' },
//       { x: '2025-04-16T10:00:00.000Z', y: '100.57' }, { x: '2025-04-16T11:00:00.000Z', y: '100.69' },
//       { x: '2025-04-16T12:00:00.000Z', y: '100.73' }, { x: '2025-04-16T13:00:00.000Z', y: '100.77' },
//       { x: '2025-04-16T14:00:00.000Z', y: '100.82' }, { x: '2025-04-16T15:00:00.000Z', y: '100.87' },
//       { x: '2025-04-16T16:00:00.000Z', y: '100.86' }, { x: '2025-04-16T17:00:00.000Z', y: '100.86' },
//       { x: '2025-04-16T18:00:00.000Z', y: '100.90' }, { x: '2025-04-16T19:00:00.000Z', y: '101.05' },
//       { x: '2025-04-16T20:00:00.000Z', y: '101.56' }, { x: '2025-04-16T21:00:00.000Z', y: '101.73' },
//       { x: '2025-04-16T22:00:00.000Z', y: '101.13' }, { x: '2025-04-16T23:00:00.000Z', y: '101.12' },
//       { x: '2025-04-17T00:00:00.000Z', y: '101.12' }, { x: '2025-04-17T01:00:00.000Z', y: '101.51' },
//       { x: '2025-04-17T02:00:00.000Z', y: '101.29' }, { x: '2025-04-17T03:00:00.000Z', y: '100.94' },
//       { x: '2025-04-17T04:00:00.000Z', y: '100.86' }, { x: '2025-04-17T05:00:00.000Z', y: '100.76' },
//       { x: '2025-04-17T06:00:00.000Z', y: '100.70' }, { x: '2025-04-17T07:00:00.000Z', y: '100.65' },
//       { x: '2025-04-17T08:00:00.000Z', y: '100.68' }, { x: '2025-04-17T09:00:00.000Z', y: '100.74' },
//       { x: '2025-04-17T10:00:00.000Z', y: '100.83' }, { x: '2025-04-17T11:00:00.000Z', y: '100.90' },
//       { x: '2025-04-17T12:00:00.000Z', y: '100.97' }, { x: '2025-04-17T13:00:00.000Z', y: '101.24' },
//       { x: '2025-04-17T14:00:00.000Z', y: '101.64' }, { x: '2025-04-17T15:00:00.000Z', y: '101.65' },
//       { x: '2025-04-17T16:00:00.000Z', y: '101.72' }, { x: '2025-04-17T17:00:00.000Z', y: '101.53' },
//       { x: '2025-04-17T18:00:00.000Z', y: '101.81' }, { x: '2025-04-17T19:00:00.000Z', y: '101.88' },
//       { x: '2025-04-17T20:00:00.000Z', y: '101.23' }, { x: '2025-04-17T21:00:00.000Z', y: '101.19' },
//       { x: '2025-04-17T22:00:00.000Z', y: '101.22' }, { x: '2025-04-17T23:00:00.000Z', y: '101.22' },
//       { x: '2025-04-18T00:00:00.000Z', y: '101.22' }, { x: '2025-04-18T01:00:00.000Z', y: '101.20' }
//     ] },
//     { name: 'gas', color: '#008FFB', data: [
//       { x: '2025-04-13T22:00:00.000Z', y: '711833.75' }, { x: '2025-04-13T23:00:00.000Z', y: '713708.41' },
//       { x: '2025-04-14T00:00:00.000Z', y: '718614.52' }, { x: '2025-04-14T01:00:00.000Z', y: '726589.88' },
//       { x: '2025-04-14T02:00:00.000Z', y: '732557.02' }, { x: '2025-04-14T03:00:00.000Z', y: '736833.50' },
//       { x: '2025-04-14T04:00:00.000Z', y: '742531.95' }, { x: '2025-04-14T05:00:00.000Z', y: '764487.89' },
//       { x: '2025-04-14T06:00:00.000Z', y: '783194.34' }, { x: '2025-04-14T07:00:00.000Z', y: '809062.20' },
//       { x: '2025-04-14T08:00:00.000Z', y: '841097.35' }, { x: '2025-04-14T09:00:00.000Z', y: '850602.13' },
//       { x: '2025-04-14T10:00:00.000Z', y: '857448.91' }, { x: '2025-04-14T11:00:00.000Z', y: '855168.34' },
//       { x: '2025-04-14T12:00:00.000Z', y: '856850.96' }, { x: '2025-04-14T13:00:00.000Z', y: '861009.87' },
//       { x: '2025-04-14T14:00:00.000Z', y: '865018.00' }, { x: '2025-04-14T15:00:00.000Z', y: '863271.93' },
//       { x: '2025-04-14T16:00:00.000Z', y: '859253.52' }, { x: '2025-04-14T17:00:00.000Z', y: '840870.94' },
//       { x: '2025-04-14T18:00:00.000Z', y: '822981.27' }, { x: '2025-04-14T19:00:00.000Z', y: '815371.62' },
//       { x: '2025-04-14T20:00:00.000Z', y: '800183.79' }, { x: '2025-04-14T21:00:00.000Z', y: '782256.59' },
//       { x: '2025-04-14T22:00:00.000Z', y: '777467.08' }, { x: '2025-04-14T23:00:00.000Z', y: '768672.25' },
//       { x: '2025-04-15T00:00:00.000Z', y: '770085.09' }, { x: '2025-04-15T01:00:00.000Z', y: '777809.47' },
//       { x: '2025-04-15T02:00:00.000Z', y: '797691.38' }, { x: '2025-04-15T03:00:00.000Z', y: '825837.05' },
//       { x: '2025-04-15T04:00:00.000Z', y: '835059.97' }, { x: '2025-04-15T05:00:00.000Z', y: '860786.92' },
//       { x: '2025-04-15T06:00:00.000Z', y: '880988.30' }, { x: '2025-04-15T07:00:00.000Z', y: '886938.86' },
//       { x: '2025-04-15T08:00:00.000Z', y: '898957.26' }, { x: '2025-04-15T09:00:00.000Z', y: '921562.21' },
//       { x: '2025-04-15T10:00:00.000Z', y: '945020.09' }, { x: '2025-04-15T11:00:00.000Z', y: '975538.92' },
//       { x: '2025-04-15T12:00:00.000Z', y: '977599.71' }, { x: '2025-04-15T13:00:00.000Z', y: '985976.86' },
//       { x: '2025-04-15T14:00:00.000Z', y: '1003956.09' }, { x: '2025-04-15T15:00:00.000Z', y: '1016690.03' },
//       { x: '2025-04-15T16:00:00.000Z', y: '1025035.96' }, { x: '2025-04-15T17:00:00.000Z', y: '1028288.54' },
//       { x: '2025-04-15T18:00:00.000Z', y: '1031278.72' }, { x: '2025-04-15T19:00:00.000Z', y: '1029532.31' },
//       { x: '2025-04-15T20:00:00.000Z', y: '1021188.07' }, { x: '2025-04-15T21:00:00.000Z', y: '1003990.36' },
//       { x: '2025-04-15T22:00:00.000Z', y: '997775.32' }, { x: '2025-04-15T23:00:00.000Z', y: '1007287.78' },
//       { x: '2025-04-16T00:00:00.000Z', y: '1010998.15' }, { x: '2025-04-16T01:00:00.000Z', y: '983472.04' },
//       { x: '2025-04-16T02:00:00.000Z', y: '956876.60' }, { x: '2025-04-16T03:00:00.000Z', y: '946204.19' },
//       { x: '2025-04-16T04:00:00.000Z', y: '942001.47' }, { x: '2025-04-16T05:00:00.000Z', y: '905560.48' },
//       { x: '2025-04-16T06:00:00.000Z', y: '910570.02' }, { x: '2025-04-16T07:00:00.000Z', y: '918288.38' },
//       { x: '2025-04-16T08:00:00.000Z', y: '912652.50' }, { x: '2025-04-16T09:00:00.000Z', y: '931068.21' },
//       { x: '2025-04-16T10:00:00.000Z', y: '960177.19' }, { x: '2025-04-16T11:00:00.000Z', y: '977381.02' },
//       { x: '2025-04-16T12:00:00.000Z', y: '986949.40' }, { x: '2025-04-16T13:00:00.000Z', y: '992166.86' },
//       { x: '2025-04-16T14:00:00.000Z', y: '989093.94' }, { x: '2025-04-16T15:00:00.000Z', y: '987857.06' },
//       { x: '2025-04-16T16:00:00.000Z', y: '998602.95' }, { x: '2025-04-16T17:00:00.000Z', y: '1001596.51' },
//       { x: '2025-04-16T18:00:00.000Z', y: '992456.42' }, { x: '2025-04-16T19:00:00.000Z', y: '958253.33' },
//       { x: '2025-04-16T20:00:00.000Z', y: '916552.13' }, { x: '2025-04-16T21:00:00.000Z', y: '893936.09' },
//       { x: '2025-04-16T22:00:00.000Z', y: '870014.59' }, { x: '2025-04-16T23:00:00.000Z', y: '836286.09' },
//       { x: '2025-04-17T00:00:00.000Z', y: '813728.10' }, { x: '2025-04-17T01:00:00.000Z', y: '805070.28' },
//       { x: '2025-04-17T02:00:00.000Z', y: '791740.68' }, { x: '2025-04-17T03:00:00.000Z', y: '788934.47' },
//       { x: '2025-04-17T04:00:00.000Z', y: '795291.46' }, { x: '2025-04-17T05:00:00.000Z', y: '786304.20' },
//       { x: '2025-04-17T06:00:00.000Z', y: '769080.84' }, { x: '2025-04-17T07:00:00.000Z', y: '762162.34' },
//       { x: '2025-04-17T08:00:00.000Z', y: '762254.90' }, { x: '2025-04-17T09:00:00.000Z', y: '772709.73' },
//       { x: '2025-04-17T10:00:00.000Z', y: '779190.72' }, { x: '2025-04-17T11:00:00.000Z', y: '770436.12' },
//       { x: '2025-04-17T12:00:00.000Z', y: '749548.84' }, { x: '2025-04-17T13:00:00.000Z', y: '735039.93' },
//       { x: '2025-04-17T14:00:00.000Z', y: '723794.14' }, { x: '2025-04-17T15:00:00.000Z', y: '716309.09' },
//       { x: '2025-04-17T16:00:00.000Z', y: '710812.74' }, { x: '2025-04-17T17:00:00.000Z', y: '707745.76' },
//       { x: '2025-04-17T18:00:00.000Z', y: '722841.73' }, { x: '2025-04-17T19:00:00.000Z', y: '753776.49' },
//       { x: '2025-04-17T20:00:00.000Z', y: '780279.51' }, { x: '2025-04-17T21:00:00.000Z', y: '801038.53' },
//       { x: '2025-04-17T22:00:00.000Z', y: '809915.30' }, { x: '2025-04-17T23:00:00.000Z', y: '804361.48' },
//       { x: '2025-04-18T00:00:00.000Z', y: '787210.76' }, { x: '2025-04-18T01:00:00.000Z', y: '776908.80' }
//     ] }
//   ],
// };

// // Table data for Environment Metrics
// const tableData = [
//   { timestamp: '2025-04-13T22:51:42Z', humidity: 73.79, temperature: 18.85, pressure: 99.74, gas: 711833.75 },
//   { timestamp: '2025-04-13T23:58:62Z', humidity: 73.52, temperature: 18.83, pressure: 99.72, gas: 713708.41 },
//   { timestamp: '2025-04-14T00:36:15Z', humidity: 72.68, temperature: 18.85, pressure: 99.70, gas: 718614.52 },
//   { timestamp: '2025-04-14T01:12:57Z', humidity: 71.19, temperature: 18.96, pressure: 99.68, gas: 726589.88 },
//   { timestamp: '2025-04-14T02:48:95Z', humidity: 69.54, temperature: 19.36, pressure: 99.62, gas: 732557.02 },
//   { timestamp: '2025-04-14T03:56:67Z', humidity: 68.17, temperature: 19.21, pressure: 99.56, gas: 736833.50 },
//   { timestamp: '2025-04-14T04:34:82Z', humidity: 66.67, temperature: 19.35, pressure: 99.50, gas: 742531.95 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
// ];

// const EnvironmentMetrics = () => {
//   const [device, setDevice] = useState('2JIOT-Global[Tokyo]');
//   const [fromDate, setFromDate] = useState(new Date('2025-04-13T22:00:00.000Z'));
//   const [toDate, setToDate] = useState(new Date('2025-04-18T01:00:00.000Z'));
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
//   const humidityChartRef = useRef();
//   const pressureChartRef = useRef();
//   const gasChartRef = useRef();

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
//         ['Timestamp', 'Humidity', 'Temperature (°C)', 'Pressure', 'Gas'],
//         ...tableItems.map(item => [
//           item.timestamp,
//           item.humidity,
//           item.temperature,
//           item.pressure,
//           item.gas,
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
//             {renderChart('Humidity (%)', fetchedData.list[1].data, humidityChartRef)}
//             {renderChart('Pressure', fetchedData.list[2].data, pressureChartRef)}
//             {renderChart('Gas', fetchedData.list[3].data, gasChartRef)}

//             <View style={styles.tableContainer}>
//               <View style={styles.tableHeader}>
//                 <Text style={styles.tableTitle}>Environment Metrics</Text>
//                 <Button mode='contained' onPress={exportTableToCSV}>
//                   <Text>Export</Text>
//                 </Button>
//               </View>
//               <ScrollView horizontal showsHorizontalScrollIndicator={true}>
//                 <DataTable style={styles.table}>
//                   <DataTable.Header>
//                     <DataTable.Title style={styles.tableColumn}>Timestamp</DataTable.Title>
//                     <DataTable.Title numeric style={styles.tableColumn}>Humidity</DataTable.Title>
//                     <DataTable.Title numeric style={styles.tableColumn}>Temperature (°C)</DataTable.Title>
//                     <DataTable.Title numeric style={styles.tableColumn}>Pressure</DataTable.Title>
//                     <DataTable.Title numeric style={styles.tableColumn}>Gas</DataTable.Title>
//                   </DataTable.Header>
//                   <FlatList
//                     data={tableItems.slice(page * itemsPerPage, (page + 1) * itemsPerPage)}
//                     renderItem={({ item, index }) => (
//                       <DataTable.Row style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
//                         <DataTable.Cell style={styles.tableColumn}>{item.timestamp}</DataTable.Cell>
//                         <DataTable.Cell numeric style={styles.tableColumn}>{item.humidity}</DataTable.Cell>
//                         <DataTable.Cell numeric style={styles.tableColumn}>{item.temperature}</DataTable.Cell>
//                         <DataTable.Cell numeric style={styles.tableColumn}>{item.pressure}</DataTable.Cell>
//                         <DataTable.Cell numeric style={styles.tableColumn}>{item.gas}</DataTable.Cell>
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
//   table: { minWidth: 800 },
//   tableColumn: { minWidth: 150, paddingHorizontal: 10 },
//   evenRow: { backgroundColor: '#f9f9f9' },
//   oddRow: { backgroundColor: '#fff' },
// });

// export default EnvironmentMetrics;































// import React, { useState, useRef } from 'react';
// import { View, Text, StyleSheet, Dimensions, ScrollView, TouchableOpacity, FlatList } from 'react-native';
// import { Provider, Button, DataTable } from 'react-native-paper';
// import DatePicker from 'react-native-date-picker';
// import { LineChart } from 'react-native-chart-kit';
// import RNFS from 'react-native-fs';
// import ViewShot from 'react-native-view-shot';
// // import Share from 'react-native-share';
// import { Picker, PickerItem } from '@react-native-picker/picker';

// let Share = null;
// try {
//   Share = require('react-native-share').default;
// } catch (e) {
//   console.warn('react-native-share not available, exports will show alerts only.');
// }

// // Dummy data for Environment Metrics
// const dummyData = {
//   list: [
//     { name: 'temperature', color: '#008FFB', data: [
//       { x: '2025-04-13T22:00:00.000Z', y: '18.85' }, { x: '2025-04-13T23:00:00.000Z', y: '18.83' },
//       { x: '2025-04-14T00:00:00.000Z', y: '18.85' }, { x: '2025-04-14T01:00:00.000Z', y: '18.96' },
//       { x: '2025-04-14T02:00:00.000Z', y: '19.36' }, { x: '2025-04-14T03:00:00.000Z', y: '19.21' },
//       { x: '2025-04-14T04:00:00.000Z', y: '19.35' }, { x: '2025-04-14T05:00:00.000Z', y: '19.43' },
//       { x: '2025-04-14T06:00:00.000Z', y: '19.49' }, { x: '2025-04-14T07:00:00.000Z', y: '19.55' },
//       { x: '2025-04-14T08:00:00.000Z', y: '19.58' }, { x: '2025-04-14T09:00:00.000Z', y: '19.51' },
//       { x: '2025-04-14T10:00:00.000Z', y: '19.35' }, { x: '2025-04-14T11:00:00.000Z', y: '19.17' },
//       { x: '2025-04-14T12:00:00.000Z', y: '19.35' }, { x: '2025-04-14T13:00:00.000Z', y: '19.04' },
//       { x: '2025-04-14T14:00:00.000Z', y: '18.93' }, { x: '2025-04-14T15:00:00.000Z', y: '18.86' },
//       { x: '2025-04-14T16:00:00.000Z', y: '18.80' }, { x: '2025-04-14T17:00:00.000Z', y: '18.73' },
//       { x: '2025-04-14T18:00:00.000Z', y: '18.70' }, { x: '2025-04-14T19:00:00.000Z', y: '18.64' },
//       { x: '2025-04-14T20:00:00.000Z', y: '18.56' }, { x: '2025-04-14T21:00:00.000Z', y: '18.53' },
//       { x: '2025-04-14T22:00:00.000Z', y: '18.52' }, { x: '2025-04-14T23:00:00.000Z', y: '18.65' },
//       { x: '2025-04-15T00:00:00.000Z', y: '18.67' }, { x: '2025-04-15T01:00:00.000Z', y: '18.88' },
//       { x: '2025-04-15T02:00:00.000Z', y: '19.26' }, { x: '2025-04-15T03:00:00.000Z', y: '19.19' },
//       { x: '2025-04-15T04:00:00.000Z', y: '19.35' }, { x: '2025-04-15T05:00:00.000Z', y: '19.44' },
//       { x: '2025-04-15T06:00:00.000Z', y: '19.52' }, { x: '2025-04-15T07:00:00.000Z', y: '19.55' },
//       { x: '2025-04-15T08:00:00.000Z', y: '19.50' }, { x: '2025-04-15T09:00:00.000Z', y: '19.43' },
//       { x: '2025-04-15T10:00:00.000Z', y: '19.37' }, { x: '2025-04-15T11:00:00.000Z', y: '19.24' },
//       { x: '2025-04-15T12:00:00.000Z', y: '19.22' }, { x: '2025-04-15T13:00:00.000Z', y: '19.22' },
//       { x: '2025-04-15T14:00:00.000Z', y: '18.83' }, { x: '2025-04-15T15:00:00.000Z', y: '18.70' },
//       { x: '2025-04-15T16:00:00.000Z', y: '18.59' }, { x: '2025-04-15T17:00:00.000Z', y: '18.46' },
//       { x: '2025-04-15T18:00:00.000Z', y: '18.37' }, { x: '2025-04-15T19:00:00.000Z', y: '18.30' },
//       { x: '2025-04-15T20:00:00.000Z', y: '18.24' }, { x: '2025-04-15T21:00:00.000Z', y: '18.20' },
//       { x: '2025-04-15T22:00:00.000Z', y: '18.17' }, { x: '2025-04-15T23:00:00.000Z', y: '18.19' },
//       { x: '2025-04-16T00:00:00.000Z', y: '18.29' }, { x: '2025-04-16T01:00:00.000Z', y: '18.58' },
//       { x: '2025-04-16T02:00:00.000Z', y: '18.87' }, { x: '2025-04-16T03:00:00.000Z', y: '19.10' },
//       { x: '2025-04-16T04:00:00.000Z', y: '19.23' }, { x: '2025-04-16T05:00:00.000Z', y: '19.30' },
//       { x: '2025-04-16T06:00:00.000Z', y: '19.39' }, { x: '2025-04-16T07:00:00.000Z', y: '19.46' },
//       { x: '2025-04-16T08:00:00.000Z', y: '19.51' }, { x: '2025-04-16T09:00:00.000Z', y: '19.45' },
//       { x: '2025-04-16T10:00:00.000Z', y: '19.33' }, { x: '2025-04-16T11:00:00.000Z', y: '19.18' },
//       { x: '2025-04-16T12:00:00.000Z', y: '19.40' }, { x: '2025-04-16T13:00:00.000Z', y: '19.10' },
//       { x: '2025-04-16T14:00:00.000Z', y: '18.95' }, { x: '2025-04-16T15:00:00.000Z', y: '18.91' },
//       { x: '2025-04-16T16:00:00.000Z', y: '18.84' }, { x: '2025-04-16T17:00:00.000Z', y: '18.79' },
//       { x: '2025-04-16T18:00:00.000Z', y: '18.75' }, { x: '2025-04-16T19:00:00.000Z', y: '18.71' },
//       { x: '2025-04-16T20:00:00.000Z', y: '18.69' }, { x: '2025-04-16T21:00:00.000Z', y: '18.70' },
//       { x: '2025-04-16T22:00:00.000Z', y: '18.75' }, { x: '2025-04-16T23:00:00.000Z', y: '18.80' },
//       { x: '2025-04-17T00:00:00.000Z', y: '19.00' }, { x: '2025-04-17T01:00:00.000Z', y: '19.39' },
//       { x: '2025-04-17T02:00:00.000Z', y: '19.29' }, { x: '2025-04-17T03:00:00.000Z', y: '19.42' },
//       { x: '2025-04-17T04:00:00.000Z', y: '19.58' }, { x: '2025-04-17T05:00:00.000Z', y: '19.72' },
//       { x: '2025-04-17T06:00:00.000Z', y: '19.84' }, { x: '2025-04-17T07:00:00.000Z', y: '19.96' },
//       { x: '2025-04-17T08:00:00.000Z', y: '20.33' }, { x: '2025-04-17T09:00:00.000Z', y: '20.70' },
//       { x: '2025-04-17T10:00:00.000Z', y: '20.38' }, { x: '2025-04-17T11:00:00.000Z', y: '20.44' },
//       { x: '2025-04-17T12:00:00.000Z', y: '20.72' }, { x: '2025-04-17T13:00:00.000Z', y: '20.72' },
//       { x: '2025-04-17T14:00:00.000Z', y: '20.47' }, { x: '2025-04-17T15:00:00.000Z', y: '20.07' },
//       { x: '2025-04-17T16:00:00.000Z', y: '19.96' }, { x: '2025-04-17T17:00:00.000Z', y: '19.92' },
//       { x: '2025-04-17T18:00:00.000Z', y: '19.85' }, { x: '2025-04-17T19:00:00.000Z', y: '19.77' },
//       { x: '2025-04-17T20:00:00.000Z', y: '19.68' }, { x: '2025-04-17T21:00:00.000Z', y: '19.62' },
//       { x: '2025-04-17T22:00:00.000Z', y: '19.66' }, { x: '2025-04-17T23:00:00.000Z', y: '19.77' },
//       { x: '2025-04-18T00:00:00.000Z', y: '19.85' }, { x: '2025-04-18T01:00:00.000Z', y: '19.96' }
//     ] },
//     { name: 'humidity', color: '#008FFB', data: [
//       { x: '2025-04-13T22:00:00.000Z', y: '73.79' }, { x: '2025-04-13T23:00:00.000Z', y: '73.52' },
//       { x: '2025-04-14T00:00:00.000Z', y: '72.68' }, { x: '2025-04-14T01:00:00.000Z', y: '71.19' },
//       { x: '2025-04-14T02:00:00.000Z', y: '69.54' }, { x: '2025-04-14T03:00:00.000Z', y: '68.17' },
//       { x: '2025-04-14T04:00:00.000Z', y: '66.67' }, { x: '2025-04-14T05:00:00.000Z', y: '63.48' },
//       { x: '2025-04-14T06:00:00.000Z', y: '60.73' }, { x: '2025-04-14T07:00:00.000Z', y: '57.51' },
//       { x: '2025-04-14T08:00:00.000Z', y: '54.67' }, { x: '2025-04-14T09:00:00.000Z', y: '53.69' },
//       { x: '2025-04-14T10:00:00.000Z', y: '53.49' }, { x: '2025-04-14T11:00:00.000Z', y: '54.07' },
//       { x: '2025-04-14T12:00:00.000Z', y: '54.18' }, { x: '2025-04-14T13:00:00.000Z', y: '53.84' },
//       { x: '2025-04-14T14:00:00.000Z', y: '53.61' }, { x: '2025-04-14T15:00:00.000Z', y: '53.99' },
//       { x: '2025-04-14T16:00:00.000Z', y: '54.63' }, { x: '2025-04-14T17:00:00.000Z', y: '57.01' },
//       { x: '2025-04-14T18:00:00.000Z', y: '58.65' }, { x: '2025-04-14T19:00:00.000Z', y: '59.75' },
//       { x: '2025-04-14T20:00:00.000Z', y: '61.72' }, { x: '2025-04-14T21:00:00.000Z', y: '62.08' },
//       { x: '2025-04-14T22:00:00.000Z', y: '62.68' }, { x: '2025-04-14T23:00:00.000Z', y: '63.40' },
//       { x: '2025-04-15T00:00:00.000Z', y: '63.64' }, { x: '2025-04-15T01:00:00.000Z', y: '62.57' },
//       { x: '2025-04-15T02:00:00.000Z', y: '59.76' }, { x: '2025-04-15T03:00:00.000Z', y: '56.43' },
//       { x: '2025-04-15T04:00:00.000Z', y: '53.73' }, { x: '2025-04-15T05:00:00.000Z', y: '51.42' },
//       { x: '2025-04-15T06:00:00.000Z', y: '48.43' }, { x: '2025-04-15T07:00:00.000Z', y: '47.22' },
//       { x: '2025-04-15T08:00:00.000Z', y: '46.22' }, { x: '2025-04-15T09:00:00.000Z', y: '43.97' },
//       { x: '2025-04-15T10:00:00.000Z', y: '41.33' }, { x: '2025-04-15T11:00:00.000Z', y: '39.43' },
//       { x: '2025-04-15T12:00:00.000Z', y: '38.94' }, { x: '2025-04-15T13:00:00.000Z', y: '38.42' },
//       { x: '2025-04-15T14:00:00.000Z', y: '37.42' }, { x: '2025-04-15T15:00:00.000Z', y: '36.62' },
//       { x: '2025-04-15T16:00:00.000Z', y: '36.22' }, { x: '2025-04-15T17:00:00.000Z', y: '36.27' },
//       { x: '2025-04-15T18:00:00.000Z', y: '35.79' }, { x: '2025-04-15T19:00:00.000Z', y: '35.58' },
//       { x: '2025-04-15T20:00:00.000Z', y: '35.64' }, { x: '2025-04-15T21:00:00.000Z', y: '35.69' },
//       { x: '2025-04-15T22:00:00.000Z', y: '35.54' }, { x: '2025-04-15T23:00:00.000Z', y: '34.69' },
//       { x: '2025-04-16T00:00:00.000Z', y: '34.12' }, { x: '2025-04-16T01:00:00.000Z', y: '34.45' },
//       { x: '2025-04-16T02:00:00.000Z', y: '35.39' }, { x: '2025-04-16T03:00:00.000Z', y: '35.84' },
//       { x: '2025-04-16T04:00:00.000Z', y: '37.38' }, { x: '2025-04-16T05:00:00.000Z', y: '39.24' },
//       { x: '2025-04-16T06:00:00.000Z', y: '40.32' }, { x: '2025-04-16T07:00:00.000Z', y: '40.56' },
//       { x: '2025-04-16T08:00:00.000Z', y: '40.77' }, { x: '2025-04-16T09:00:00.000Z', y: '38.62' },
//       { x: '2025-04-16T10:00:00.000Z', y: '35.74' }, { x: '2025-04-16T11:00:00.000Z', y: '33.86' },
//       { x: '2025-04-16T12:00:00.000Z', y: '32.94' }, { x: '2025-04-16T13:00:00.000Z', y: '31.93' },
//       { x: '2025-04-16T14:00:00.000Z', y: '31.71' }, { x: '2025-04-16T15:00:00.000Z', y: '31.78' },
//       { x: '2025-04-16T16:00:00.000Z', y: '31.30' }, { x: '2025-04-16T17:00:00.000Z', y: '30.70' },
//       { x: '2025-04-16T18:00:00.000Z', y: '30.76' }, { x: '2025-04-16T19:00:00.000Z', y: '32.56' },
//       { x: '2025-04-16T20:00:00.000Z', y: '35.49' }, { x: '2025-04-16T21:00:00.000Z', y: '39.68' },
//       { x: '2025-04-16T22:00:00.000Z', y: '42.88' }, { x: '2025-04-16T23:00:00.000Z', y: '44.83' },
//       { x: '2025-04-17T00:00:00.000Z', y: '45.47' }, { x: '2025-04-17T01:00:00.000Z', y: '45.72' },
//       { x: '2025-04-17T02:00:00.000Z', y: '46.19' }, { x: '2025-04-17T03:00:00.000Z', y: '46.37' },
//       { x: '2025-04-17T04:00:00.000Z', y: '47.01' }, { x: '2025-04-17T05:00:00.000Z', y: '47.79' },
//       { x: '2025-04-17T06:00:00.000Z', y: '48.57' }, { x: '2025-04-17T07:00:00.000Z', y: '48.79' },
//       { x: '2025-04-17T08:00:00.000Z', y: '49.18' }, { x: '2025-04-17T09:00:00.000Z', y: '48.96' },
//       { x: '2025-04-17T10:00:00.000Z', y: '50.47' }, { x: '2025-04-17T11:00:00.000Z', y: '53.38' },
//       { x: '2025-04-17T12:00:00.000Z', y: '56.35' }, { x: '2025-04-17T13:00:00.000Z', y: '58.77' },
//       { x: '2025-04-17T14:00:00.000Z', y: '60.83' }, { x: '2025-04-17T15:00:00.000Z', y: '62.17' },
//       { x: '2025-04-17T16:00:00.000Z', y: '62.96' }, { x: '2025-04-17T17:00:00.000Z', y: '63.24' },
//       { x: '2025-04-17T18:00:00.000Z', y: '61.00' }, { x: '2025-04-17T19:00:00.000Z', y: '56.78' },
//       { x: '2025-04-17T20:00:00.000Z', y: '54.38' }, { x: '2025-04-17T21:00:00.000Z', y: '52.89' },
//       { x: '2025-04-17T22:00:00.000Z', y: '52.34' }, { x: '2025-04-17T23:00:00.000Z', y: '51.93' },
//       { x: '2025-04-18T00:00:00.000Z', y: '51.84' }, { x: '2025-04-18T01:00:00.000Z', y: '52.86' }
//     ] },
//     { name: 'pressure', color: '#008FFB', data: [
//       { x: '2025-04-13T22:00:00.000Z', y: '99.74' }, { x: '2025-04-13T23:00:00.000Z', y: '99.72' },
//       { x: '2025-04-14T00:00:00.000Z', y: '99.70' }, { x: '2025-04-14T01:00:00.000Z', y: '99.68' },
//       { x: '2025-04-14T02:00:00.000Z', y: '99.62' }, { x: '2025-04-14T03:00:00.000Z', y: '99.56' },
//       { x: '2025-04-14T04:00:00.000Z', y: '99.50' }, { x: '2025-04-14T05:00:00.000Z', y: '99.46' },
//       { x: '2025-04-14T06:00:00.000Z', y: '99.44' }, { x: '2025-04-14T07:00:00.000Z', y: '99.46' },
//       { x: '2025-04-14T08:00:00.000Z', y: '99.48' }, { x: '2025-04-14T09:00:00.000Z', y: '99.51' },
//       { x: '2025-04-14T10:00:00.000Z', y: '99.54' }, { x: '2025-04-14T11:00:00.000Z', y: '99.58' },
//       { x: '2025-04-14T12:00:00.000Z', y: '99.60' }, { x: '2025-04-14T13:00:00.000Z', y: '99.64' },
//       { x: '2025-04-14T14:00:00.000Z', y: '99.68' }, { x: '2025-04-14T15:00:00.000Z', y: '99.63' },
//       { x: '2025-04-14T16:00:00.000Z', y: '99.52' }, { x: '2025-04-14T17:00:00.000Z', y: '99.45' },
//       { x: '2025-04-14T18:00:00.000Z', y: '99.38' }, { x: '2025-04-14T19:00:00.000Z', y: '99.40' },
//       { x: '2025-04-14T20:00:00.000Z', y: '99.31' }, { x: '2025-04-14T21:00:00.000Z', y: '99.21' },
//       { x: '2025-04-14T22:00:00.000Z', y: '99.38' }, { x: '2025-04-14T23:00:00.000Z', y: '99.39' },
//       { x: '2025-04-15T00:00:00.000Z', y: '99.30' }, { x: '2025-04-15T01:00:00.000Z', y: '98.95' },
//       { x: '2025-04-15T02:00:00.000Z', y: '98.85' }, { x: '2025-04-15T03:00:00.000Z', y: '98.76' },
//       { x: '2025-04-15T04:00:00.000Z', y: '98.69' }, { x: '2025-04-15T05:00:00.000Z', y: '98.60' },
//       { x: '2025-04-15T06:00:00.000Z', y: '98.55' }, { x: '2025-04-15T07:00:00.000Z', y: '98.53' },
//       { x: '2025-04-15T08:00:00.000Z', y: '98.60' }, { x: '2025-04-15T09:00:00.000Z', y: '98.78' },
//       { x: '2025-04-15T10:00:00.000Z', y: '99.14' }, { x: '2025-04-15T11:00:00.000Z', y: '99.28' },
//       { x: '2025-04-15T12:00:00.000Z', y: '99.31' }, { x: '2025-04-15T13:00:00.000Z', y: '99.39' },
//       { x: '2025-04-15T14:00:00.000Z', y: '99.50' }, { x: '2025-04-15T15:00:00.000Z', y: '99.58' },
//       { x: '2025-04-15T16:00:00.000Z', y: '99.63' }, { x: '2025-04-15T17:00:00.000Z', y: '99.70' },
//       { x: '2025-04-15T18:00:00.000Z', y: '99.78' }, { x: '2025-04-15T19:00:00.000Z', y: '99.86' },
//       { x: '2025-04-15T20:00:00.000Z', y: '100.03' }, { x: '2025-04-15T21:00:00.000Z', y: '100.36' },
//       { x: '2025-04-15T22:00:00.000Z', y: '100.26' }, { x: '2025-04-15T23:00:00.000Z', y: '100.14' },
//       { x: '2025-04-16T00:00:00.000Z', y: '100.75' }, { x: '2025-04-16T01:00:00.000Z', y: '100.47' },
//       { x: '2025-04-16T02:00:00.000Z', y: '100.26' }, { x: '2025-04-16T03:00:00.000Z', y: '100.47' },
//       { x: '2025-04-16T04:00:00.000Z', y: '100.14' }, { x: '2025-04-16T05:00:00.000Z', y: '99.98' },
//       { x: '2025-04-16T06:00:00.000Z', y: '100.35' }, { x: '2025-04-16T07:00:00.000Z', y: '100.23' },
//       { x: '2025-04-16T08:00:00.000Z', y: '100.26' }, { x: '2025-04-16T09:00:00.000Z', y: '100.43' },
//       { x: '2025-04-16T10:00:00.000Z', y: '100.57' }, { x: '2025-04-16T11:00:00.000Z', y: '100.69' },
//       { x: '2025-04-16T12:00:00.000Z', y: '100.73' }, { x: '2025-04-16T13:00:00.000Z', y: '100.77' },
//       { x: '2025-04-16T14:00:00.000Z', y: '100.82' }, { x: '2025-04-16T15:00:00.000Z', y: '100.87' },
//       { x: '2025-04-16T16:00:00.000Z', y: '100.86' }, { x: '2025-04-16T17:00:00.000Z', y: '100.86' },
//       { x: '2025-04-16T18:00:00.000Z', y: '100.90' }, { x: '2025-04-16T19:00:00.000Z', y: '101.05' },
//       { x: '2025-04-16T20:00:00.000Z', y: '101.56' }, { x: '2025-04-16T21:00:00.000Z', y: '101.73' },
//       { x: '2025-04-16T22:00:00.000Z', y: '101.13' }, { x: '2025-04-16T23:00:00.000Z', y: '101.12' },
//       { x: '2025-04-17T00:00:00.000Z', y: '101.12' }, { x: '2025-04-17T01:00:00.000Z', y: '101.51' },
//       { x: '2025-04-17T02:00:00.000Z', y: '101.29' }, { x: '2025-04-17T03:00:00.000Z', y: '100.94' },
//       { x: '2025-04-17T04:00:00.000Z', y: '100.86' }, { x: '2025-04-17T05:00:00.000Z', y: '100.76' },
//       { x: '2025-04-17T06:00:00.000Z', y: '100.70' }, { x: '2025-04-17T07:00:00.000Z', y: '100.65' },
//       { x: '2025-04-17T08:00:00.000Z', y: '100.68' }, { x: '2025-04-17T09:00:00.000Z', y: '100.74' },
//       { x: '2025-04-17T10:00:00.000Z', y: '100.83' }, { x: '2025-04-17T11:00:00.000Z', y: '100.90' },
//       { x: '2025-04-17T12:00:00.000Z', y: '100.97' }, { x: '2025-04-17T13:00:00.000Z', y: '101.24' },
//       { x: '2025-04-17T14:00:00.000Z', y: '101.64' }, { x: '2025-04-17T15:00:00.000Z', y: '101.65' },
//       { x: '2025-04-17T16:00:00.000Z', y: '101.72' }, { x: '2025-04-17T17:00:00.000Z', y: '101.53' },
//       { x: '2025-04-17T18:00:00.000Z', y: '101.81' }, { x: '2025-04-17T19:00:00.000Z', y: '101.88' },
//       { x: '2025-04-17T20:00:00.000Z', y: '101.23' }, { x: '2025-04-17T21:00:00.000Z', y: '101.19' },
//       { x: '2025-04-17T22:00:00.000Z', y: '101.22' }, { x: '2025-04-17T23:00:00.000Z', y: '101.22' },
//       { x: '2025-04-18T00:00:00.000Z', y: '101.22' }, { x: '2025-04-18T01:00:00.000Z', y: '101.20' }
//     ] },
//     { name: 'gas', color: '#008FFB', data: [
//       { x: '2025-04-13T22:00:00.000Z', y: '711833.75' }, { x: '2025-04-13T23:00:00.000Z', y: '713708.41' },
//       { x: '2025-04-14T00:00:00.000Z', y: '718614.52' }, { x: '2025-04-14T01:00:00.000Z', y: '726589.88' },
//       { x: '2025-04-14T02:00:00.000Z', y: '732557.02' }, { x: '2025-04-14T03:00:00.000Z', y: '736833.50' },
//       { x: '2025-04-14T04:00:00.000Z', y: '742531.95' }, { x: '2025-04-14T05:00:00.000Z', y: '764487.89' },
//       { x: '2025-04-14T06:00:00.000Z', y: '783194.34' }, { x: '2025-04-14T07:00:00.000Z', y: '809062.20' },
//       { x: '2025-04-14T08:00:00.000Z', y: '841097.35' }, { x: '2025-04-14T09:00:00.000Z', y: '850602.13' },
//       { x: '2025-04-14T10:00:00.000Z', y: '857448.91' }, { x: '2025-04-14T11:00:00.000Z', y: '855168.34' },
//       { x: '2025-04-14T12:00:00.000Z', y: '856850.96' }, { x: '2025-04-14T13:00:00.000Z', y: '861009.87' },
//       { x: '2025-04-14T14:00:00.000Z', y: '865018.00' }, { x: '2025-04-14T15:00:00.000Z', y: '863271.93' },
//       { x: '2025-04-14T16:00:00.000Z', y: '859253.52' }, { x: '2025-04-14T17:00:00.000Z', y: '840870.94' },
//       { x: '2025-04-14T18:00:00.000Z', y: '822981.27' }, { x: '2025-04-14T19:00:00.000Z', y: '815371.62' },
//       { x: '2025-04-14T20:00:00.000Z', y: '800183.79' }, { x: '2025-04-14T21:00:00.000Z', y: '782256.59' },
//       { x: '2025-04-14T22:00:00.000Z', y: '777467.08' }, { x: '2025-04-14T23:00:00.000Z', y: '768672.25' },
//       { x: '2025-04-15T00:00:00.000Z', y: '770085.09' }, { x: '2025-04-15T01:00:00.000Z', y: '777809.47' },
//       { x: '2025-04-15T02:00:00.000Z', y: '797691.38' }, { x: '2025-04-15T03:00:00.000Z', y: '825837.05' },
//       { x: '2025-04-15T04:00:00.000Z', y: '835059.97' }, { x: '2025-04-15T05:00:00.000Z', y: '860786.92' },
//       { x: '2025-04-15T06:00:00.000Z', y: '880988.30' }, { x: '2025-04-15T07:00:00.000Z', y: '886938.86' },
//       { x: '2025-04-15T08:00:00.000Z', y: '898957.26' }, { x: '2025-04-15T09:00:00.000Z', y: '921562.21' },
//       { x: '2025-04-15T10:00:00.000Z', y: '945020.09' }, { x: '2025-04-15T11:00:00.000Z', y: '975538.92' },
//       { x: '2025-04-15T12:00:00.000Z', y: '977599.71' }, { x: '2025-04-15T13:00:00.000Z', y: '985976.86' },
//       { x: '2025-04-15T14:00:00.000Z', y: '1003956.09' }, { x: '2025-04-15T15:00:00.000Z', y: '1016690.03' },
//       { x: '2025-04-15T16:00:00.000Z', y: '1025035.96' }, { x: '2025-04-15T17:00:00.000Z', y: '1028288.54' },
//       { x: '2025-04-15T18:00:00.000Z', y: '1031278.72' }, { x: '2025-04-15T19:00:00.000Z', y: '1029532.31' },
//       { x: '2025-04-15T20:00:00.000Z', y: '1021188.07' }, { x: '2025-04-15T21:00:00.000Z', y: '1003990.36' },
//       { x: '2025-04-15T22:00:00.000Z', y: '997775.32' }, { x: '2025-04-15T23:00:00.000Z', y: '1007287.78' },
//       { x: '2025-04-16T00:00:00.000Z', y: '1010998.15' }, { x: '2025-04-16T01:00:00.000Z', y: '983472.04' },
//       { x: '2025-04-16T02:00:00.000Z', y: '956876.60' }, { x: '2025-04-16T03:00:00.000Z', y: '946204.19' },
//       { x: '2025-04-16T04:00:00.000Z', y: '942001.47' }, { x: '2025-04-16T05:00:00.000Z', y: '905560.48' },
//       { x: '2025-04-16T06:00:00.000Z', y: '910570.02' }, { x: '2025-04-16T07:00:00.000Z', y: '918288.38' },
//       { x: '2025-04-16T08:00:00.000Z', y: '912652.50' }, { x: '2025-04-16T09:00:00.000Z', y: '931068.21' },
//       { x: '2025-04-16T10:00:00.000Z', y: '960177.19' }, { x: '2025-04-16T11:00:00.000Z', y: '977381.02' },
//       { x: '2025-04-16T12:00:00.000Z', y: '986949.40' }, { x: '2025-04-16T13:00:00.000Z', y: '992166.86' },
//       { x: '2025-04-16T14:00:00.000Z', y: '989093.94' }, { x: '2025-04-16T15:00:00.000Z', y: '987857.06' },
//       { x: '2025-04-16T16:00:00.000Z', y: '998602.95' }, { x: '2025-04-16T17:00:00.000Z', y: '1001596.51' },
//       { x: '2025-04-16T18:00:00.000Z', y: '992456.42' }, { x: '2025-04-16T19:00:00.000Z', y: '958253.33' },
//       { x: '2025-04-16T20:00:00.000Z', y: '916552.13' }, { x: '2025-04-16T21:00:00.000Z', y: '893936.09' },
//       { x: '2025-04-16T22:00:00.000Z', y: '870014.59' }, { x: '2025-04-16T23:00:00.000Z', y: '836286.09' },
//       { x: '2025-04-17T00:00:00.000Z', y: '813728.10' }, { x: '2025-04-17T01:00:00.000Z', y: '805070.28' },
//       { x: '2025-04-17T02:00:00.000Z', y: '791740.68' }, { x: '2025-04-17T03:00:00.000Z', y: '788934.47' },
//       { x: '2025-04-17T04:00:00.000Z', y: '795291.46' }, { x: '2025-04-17T05:00:00.000Z', y: '786304.20' },
//       { x: '2025-04-17T06:00:00.000Z', y: '769080.84' }, { x: '2025-04-17T07:00:00.000Z', y: '762162.34' },
//       { x: '2025-04-17T08:00:00.000Z', y: '762254.90' }, { x: '2025-04-17T09:00:00.000Z', y: '772709.73' },
//       { x: '2025-04-17T10:00:00.000Z', y: '779190.72' }, { x: '2025-04-17T11:00:00.000Z', y: '770436.12' },
//       { x: '2025-04-17T12:00:00.000Z', y: '749548.84' }, { x: '2025-04-17T13:00:00.000Z', y: '735039.93' },
//       { x: '2025-04-17T14:00:00.000Z', y: '723794.14' }, { x: '2025-04-17T15:00:00.000Z', y: '716309.09' },
//       { x: '2025-04-17T16:00:00.000Z', y: '710812.74' }, { x: '2025-04-17T17:00:00.000Z', y: '707745.76' },
//       { x: '2025-04-17T18:00:00.000Z', y: '722841.73' }, { x: '2025-04-17T19:00:00.000Z', y: '753776.49' },
//       { x: '2025-04-17T20:00:00.000Z', y: '780279.51' }, { x: '2025-04-17T21:00:00.000Z', y: '801038.53' },
//       { x: '2025-04-17T22:00:00.000Z', y: '809915.30' }, { x: '2025-04-17T23:00:00.000Z', y: '804361.48' },
//       { x: '2025-04-18T00:00:00.000Z', y: '787210.76' }, { x: '2025-04-18T01:00:00.000Z', y: '776908.80' }
//     ] }
//   ],
// };

// // Table data for Environment Metrics
// const tableData = [
//   { timestamp: '2025-04-13T22:51:42Z', humidity: 73.79, temperature: 18.85, pressure: 99.74, gas: 711833.75 },
//   { timestamp: '2025-04-13T23:58:62Z', humidity: 73.52, temperature: 18.83, pressure: 99.72, gas: 713708.41 },
//   { timestamp: '2025-04-14T00:36:15Z', humidity: 72.68, temperature: 18.85, pressure: 99.70, gas: 718614.52 },
//   { timestamp: '2025-04-14T01:12:57Z', humidity: 71.19, temperature: 18.96, pressure: 99.68, gas: 726589.88 },
//   { timestamp: '2025-04-14T02:48:95Z', humidity: 69.54, temperature: 19.36, pressure: 99.62, gas: 732557.02 },
//   { timestamp: '2025-04-14T03:56:67Z', humidity: 68.17, temperature: 19.21, pressure: 99.56, gas: 736833.50 },
//   { timestamp: '2025-04-14T04:34:82Z', humidity: 66.67, temperature: 19.35, pressure: 99.50, gas: 742531.95 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
//   { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
// ];

// const EnvironmentMetrics = () => {
//   const [device, setDevice] = useState('2JIOT-Global[Tokyo]');
//   const [fromDate, setFromDate] = useState(new Date('2025-04-13T22:00:00.000Z'));
//   const [toDate, setToDate] = useState(new Date('2025-04-18T01:00:00.000Z'));
//   const [openFrom, setOpenFrom] = useState(false);
//   const [openTo, setOpenTo] = useState(false);
//   const [fetchedData, setFetchedData] = useState(null);
//   const [tableItems, setTableItems] = useState([]);
//   const [page, setPage] = useState(0);
//   const itemsPerPage = 10;
//   const [zoomLevel, setZoomLevel] = useState(1);

//   const screenWidth = Dimensions.get('window').width;
//   const chartWidth = screenWidth * 2 * zoomLevel;
//   const isSmallScreen = screenWidth < 400;

//   const tempChartRef = useRef();
//   const humidityChartRef = useRef();
//   const pressureChartRef = useRef();
//   const gasChartRef = useRef();

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
//         ['Timestamp', 'Humidity', 'Temperature (°C)', 'Pressure', 'Gas'],
//         ...tableItems.map(item => [
//           item.timestamp,
//           item.humidity,
//           item.temperature,
//           item.pressure,
//           item.gas,
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
//     const displayLabels = labels.filter((_, index) => index % Math.max(1, Math.floor(5 / zoomLevel)) === 0);

//     return (
//       <View style={styles.chartContainer}>
//         <Text style={styles.chartTitle}>{title}</Text>
//         <ScrollView horizontal showsHorizontalScrollIndicator={true}>
//           <ViewShot ref={ref} options={{ format: 'png', quality: 0.9 }}>
//             <LineChart
//               data={{
//                 labels: displayLabels,
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
//             />
//           </ViewShot>
//         </ScrollView>
//         <View style={styles.chartButtons}>
//           <TouchableOpacity onPress={() => setZoomLevel(zoomLevel * 1.5)}>
//             <Text style={styles.buttonText}>Zoom In</Text>
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => setZoomLevel(Math.max(0.5, zoomLevel / 1.5))}>
//             <Text style={styles.buttonText}>Zoom Out</Text>
//           </TouchableOpacity>
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
//             {renderChart('Humidity (%)', fetchedData.list[1].data, humidityChartRef)}
//             {renderChart('Pressure', fetchedData.list[2].data, pressureChartRef)}
//             {renderChart('Gas', fetchedData.list[3].data, gasChartRef)}

//             <View style={styles.tableContainer}>
//               <View style={styles.tableHeader}>
//                 <Text style={styles.tableTitle}>Environment Metrics</Text>
//                 <Button mode='contained' onPress={exportTableToCSV}>
//                   <Text>Export</Text>
//                 </Button>
//               </View>
//               <ScrollView horizontal showsHorizontalScrollIndicator={true}>
//                 <DataTable style={styles.table}>
//                   <DataTable.Header>
//                     <DataTable.Title style={styles.tableColumn}>Timestamp</DataTable.Title>
//                     <DataTable.Title numeric style={styles.tableColumn}>Humidity</DataTable.Title>
//                     <DataTable.Title numeric style={styles.tableColumn}>Temperature (°C)</DataTable.Title>
//                     <DataTable.Title numeric style={styles.tableColumn}>Pressure</DataTable.Title>
//                     <DataTable.Title numeric style={styles.tableColumn}>Gas</DataTable.Title>
//                   </DataTable.Header>
//                   <FlatList
//                     data={tableItems.slice(page * itemsPerPage, (page + 1) * itemsPerPage)}
//                     renderItem={({ item, index }) => (
//                       <DataTable.Row style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
//                         <DataTable.Cell style={styles.tableColumn}>{item.timestamp}</DataTable.Cell>
//                         <DataTable.Cell numeric style={styles.tableColumn}>{item.humidity}</DataTable.Cell>
//                         <DataTable.Cell numeric style={styles.tableColumn}>{item.temperature}</DataTable.Cell>
//                         <DataTable.Cell numeric style={styles.tableColumn}>{item.pressure}</DataTable.Cell>
//                         <DataTable.Cell numeric style={styles.tableColumn}>{item.gas}</DataTable.Cell>
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
//   table: { minWidth: 800 },
//   tableColumn: { minWidth: 150, paddingHorizontal: 10 },
//   evenRow: { backgroundColor: '#f9f9f9' },
//   oddRow: { backgroundColor: '#fff' },
// });

// export default EnvironmentMetrics;











































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

// Reduced dummy data for Environment Metrics (10 entries per metric)
const dummyData = {
  list: [
    {
      name: 'temperature',
      color: '#008FFB',
      data: [
        { x: '2025-04-13T22:00:00.000Z', y: '18.85' },
        { x: '2025-04-13T23:00:00.000Z', y: '18.83' },
        { x: '2025-04-14T00:00:00.000Z', y: '18.85' },
        { x: '2025-04-14T01:00:00.000Z', y: '18.96' },
        { x: '2025-04-14T02:00:00.000Z', y: '19.36' },
        { x: '2025-04-14T03:00:00.000Z', y: '19.21' },
        { x: '2025-04-14T04:00:00.000Z', y: '19.35' },
        { x: '2025-04-14T05:00:00.000Z', y: '19.43' },
        { x: '2025-04-14T06:00:00.000Z', y: '19.49' },
        { x: '2025-04-14T07:00:00.000Z', y: '19.55' },
      ],
    },
    {
      name: 'humidity',
      color: '#008FFB',
      data: [
        { x: '2025-04-13T22:00:00.000Z', y: '73.79' },
        { x: '2025-04-13T23:00:00.000Z', y: '73.52' },
        { x: '2025-04-14T00:00:00.000Z', y: '72.68' },
        { x: '2025-04-14T01:00:00.000Z', y: '71.19' },
        { x: '2025-04-14T02:00:00.000Z', y: '69.54' },
        { x: '2025-04-14T03:00:00.000Z', y: '68.17' },
        { x: '2025-04-14T04:00:00.000Z', y: '66.67' },
        { x: '2025-04-14T05:00:00.000Z', y: '63.48' },
        { x: '2025-04-14T06:00:00.000Z', y: '60.73' },
        { x: '2025-04-14T07:00:00.000Z', y: '57.51' },
      ],
    },
    {
      name: 'pressure',
      color: '#008FFB',
      data: [
        { x: '2025-04-13T22:00:00.000Z', y: '99.74' },
        { x: '2025-04-13T23:00:00.000Z', y: '99.72' },
        { x: '2025-04-14T00:00:00.000Z', y: '99.70' },
        { x: '2025-04-14T01:00:00.000Z', y: '99.68' },
        { x: '2025-04-14T02:00:00.000Z', y: '99.62' },
        { x: '2025-04-14T03:00:00.000Z', y: '99.56' },
        { x: '2025-04-14T04:00:00.000Z', y: '99.50' },
        { x: '2025-04-14T05:00:00.000Z', y: '99.46' },
        { x: '2025-04-14T06:00:00.000Z', y: '99.44' },
        { x: '2025-04-14T07:00:00.000Z', y: '99.46' },
      ],
    },
    {
      name: 'gas',
      color: '#008FFB',
      data: [
        { x: '2025-04-13T22:00:00.000Z', y: '711833.75' },
        { x: '2025-04-13T23:00:00.000Z', y: '713708.41' },
        { x: '2025-04-14T00:00:00.000Z', y: '718614.52' },
        { x: '2025-04-14T01:00:00.000Z', y: '726589.88' },
        { x: '2025-04-14T02:00:00.000Z', y: '732557.02' },
        { x: '2025-04-14T03:00:00.000Z', y: '736833.50' },
        { x: '2025-04-14T04:00:00.000Z', y: '742531.95' },
        { x: '2025-04-14T05:00:00.000Z', y: '764487.89' },
        { x: '2025-04-14T06:00:00.000Z', y: '783194.34' },
        { x: '2025-04-14T07:00:00.000Z', y: '809062.20' },
      ],
    },
  ],
};

// Reduced table data for Environment Metrics (10 unique entries)
const tableData = [
  { timestamp: '2025-04-13T22:51:42Z', humidity: 73.79, temperature: 18.85, pressure: 99.74, gas: 711833.75 },
  { timestamp: '2025-04-13T23:58:62Z', humidity: 73.52, temperature: 18.83, pressure: 99.72, gas: 713708.41 },
  { timestamp: '2025-04-14T00:36:15Z', humidity: 72.68, temperature: 18.85, pressure: 99.70, gas: 718614.52 },
  { timestamp: '2025-04-14T01:12:57Z', humidity: 71.19, temperature: 18.96, pressure: 99.68, gas: 726589.88 },
  { timestamp: '2025-04-14T02:48:95Z', humidity: 69.54, temperature: 19.36, pressure: 99.62, gas: 732557.02 },
  { timestamp: '2025-04-14T03:56:67Z', humidity: 68.17, temperature: 19.21, pressure: 99.56, gas: 736833.50 },
  { timestamp: '2025-04-14T04:34:82Z', humidity: 66.67, temperature: 19.35, pressure: 99.50, gas: 742531.95 },
  { timestamp: '2025-04-14T05:24:80Z', humidity: 63.48, temperature: 19.43, pressure: 99.46, gas: 764487.89 },
  { timestamp: '2025-04-14T06:15:30Z', humidity: 60.73, temperature: 19.49, pressure: 99.44, gas: 783194.34 },
  { timestamp: '2025-04-14T07:10:45Z', humidity: 57.51, temperature: 19.55, pressure: 99.46, gas: 809062.20 },
];

const EnvironmentMetrics = () => {
  const [device, setDevice] = useState('2JIOT-Global[Tokyo]');
  const [fromDate, setFromDate] = useState(new Date('2025-04-13T22:00:00.000Z'));
  const [toDate, setToDate] = useState(new Date('2025-04-14T07:00:00.000Z'));
  const [openFrom, setOpenFrom] = useState(false);
  const [openTo, setOpenTo] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);
  const [tableItems, setTableItems] = useState([]);
  const [page, setPage] = useState(0);
  const itemsPerPage = 10;
  const [zoomLevel, setZoomLevel] = useState(1);

  const screenWidth = Dimensions.get('window').width;
  const chartWidth = screenWidth * 2 * zoomLevel;
  const isSmallScreen = screenWidth < 400;

  const tempChartRef = useRef();
  const humidityChartRef = useRef();
  const pressureChartRef = useRef();
  const gasChartRef = useRef();

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
        ['Timestamp', 'Humidity', 'Temperature (°C)', 'Pressure', 'Gas'],
        ...tableItems.map(item => [
          item.timestamp,
          item.humidity,
          item.temperature,
          item.pressure,
          item.gas,
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
            {renderChart('Humidity (%)', fetchedData.list[1].data, humidityChartRef)}
            {renderChart('Pressure', fetchedData.list[2].data, pressureChartRef)}
            {renderChart('Gas', fetchedData.list[3].data, gasChartRef)}

            <View style={styles.tableContainer}>
              <View style={styles.tableHeader}>
                <Text style={styles.tableTitle}>Environment Metrics</Text>
                <Button mode='contained' onPress={exportTableToCSV}>
                  <Text>Export</Text>
                </Button>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                <DataTable style={styles.table}>
                  <DataTable.Header>
                    <DataTable.Title style={styles.tableColumn}>Timestamp</DataTable.Title>
                    <DataTable.Title numeric style={styles.tableColumn}>Humidity</DataTable.Title>
                    <DataTable.Title numeric style={styles.tableColumn}>Temperature (°C)</DataTable.Title>
                    <DataTable.Title numeric style={styles.tableColumn}>Pressure</DataTable.Title>
                    <DataTable.Title numeric style={styles.tableColumn}>Gas</DataTable.Title>
                  </DataTable.Header>
                  <FlatList
                    data={tableItems.slice(page * itemsPerPage, (page + 1) * itemsPerPage)}
                    renderItem={({ item, index }) => (
                      <DataTable.Row style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
                        <DataTable.Cell style={styles.tableColumn}>{item.timestamp}</DataTable.Cell>
                        <DataTable.Cell numeric style={styles.tableColumn}>{item.humidity}</DataTable.Cell>
                        <DataTable.Cell numeric style={styles.tableColumn}>{item.temperature}</DataTable.Cell>
                        <DataTable.Cell numeric style={styles.tableColumn}>{item.pressure}</DataTable.Cell>
                        <DataTable.Cell numeric style={styles.tableColumn}>{item.gas}</DataTable.Cell>
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
  table: { minWidth: 800 },
  tableColumn: { minWidth: 150, paddingHorizontal: 10 },
  evenRow: { backgroundColor: '#f9f9f9' },
  oddRow: { backgroundColor: '#fff' },
});

export default EnvironmentMetrics;

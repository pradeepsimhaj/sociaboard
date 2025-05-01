import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';

const ECGCards = ({ totalUploads, normalResults, abnormalResults }) => {
  return (
    <View style={styles.cardsContainer}>
      <View style={styles.cardWrapper}>
        <LinearGradient colors={['#f0f8ff', '#e6f0fa']} style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>Total ECGs Uploaded</Text>
            <Text style={styles.cardValue}>{totalUploads}</Text>
          </Card.Content>
        </LinearGradient>
        <LinearGradient colors={['#f0f8ff', '#e6f0fa']} style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>ECGs with Normal Results</Text>
            <Text style={styles.cardValue}>{normalResults}</Text>
          </Card.Content>
        </LinearGradient>
        <LinearGradient colors={['#f0f8ff', '#e6f0fa']} style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>ECGs with Abnormal Results</Text>
            <Text style={styles.cardValue}>{abnormalResults}</Text>
          </Card.Content>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    backgroundColor: '#e6f0fa',
    padding: 20,
    marginBottom: 15,
    borderRadius: 8,
  },
  cardWrapper: {
    flexDirection: 'column',
    width: '100%',
    alignSelf: 'center',
  },
  card: {
    width: '100%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 8,
    alignSelf: 'center',
  },
  cardTitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
});

export default ECGCards;

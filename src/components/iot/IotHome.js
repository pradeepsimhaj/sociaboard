import React from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const IotHome = () => {
  const navigation = useNavigation();

  const cards = [
    { id: '1', title: 'Dashboard', onPress: () => navigation.navigate('Dashboard') },
    { id: '2', title: 'Device Metrics', onPress: () => navigation.navigate('DeviceMetrics') },
    { id: '3', title: 'Environment Metrics', onPress: () => navigation.navigate('EnvironmentMetrics') },
    { id: '4', title: 'Device', onPress: () => navigation.navigate('DeviceInformation') },
  ];

  return (
    <LinearGradient colors={['#aaddcc', '#d4aa23']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.greeting}>IoT Home</Text>
        {cards.map((card) => (
          <TouchableOpacity key={card.id} style={styles.card} onPress={card.onPress}>
            <LinearGradient
              colors={['#4a4a4a', '#ff9f55']}
              style={styles.cardGradient}
            >
              <Text style={styles.cardTitle}>{card.title}</Text>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  greeting: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    width: '100%',
    height: 150,
    borderRadius: 15,
    marginBottom: 20,
  },
  cardGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default IotHome;

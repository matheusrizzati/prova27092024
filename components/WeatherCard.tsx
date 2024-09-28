import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type cardProps = {
    pais: string,
    cidade: string,
    tempo: string,
    graus: string
}

const WeatherCard = ( {pais, cidade, tempo, graus}:cardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.country}>{pais}</Text>
      <Text style={styles.city}>{cidade}</Text>
      <View style={styles.row}>
        <Text style={styles.weather}>{tempo}</Text>
        <Text style={styles.temperature}>{graus}°C</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 144,
    borderRadius: 20,
    backgroundColor: '#6F47DD',
    padding: 10,
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginBottom: 16
  },
  country: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  city: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  weather: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  temperature: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default WeatherCard;

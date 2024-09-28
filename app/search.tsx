import WeatherCard from '@/components/WeatherCard';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Touchable, TouchableOpacity } from 'react-native';

export default function Search() {
  const searchIcon = <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="#D4C3FA"
    strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>

  type Dados = {
    cidade: string,
    graus: string,
    estado: string
  }

  const [cidade, setCidade] = useState('')
  const [dados, setDados] = useState<Dados>({ cidade: '', graus: '', estado: '' })
  function getClimate(cidade: string) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=f56bf47dd0644b86bb5234448242709&q=${cidade}&aqi=no`)
      .then(res => res.json())
      .then((data) => {
        const obj = {
          cidade: data?.location.name,
          graus: data.current.temp_c,
          estado: data.current.condition.text
        }
        setDados(obj)
      }
      )
  }

  useEffect(() => getClimate('Barretos'), [])
  return (
    <View style={styles.container}>
      {/* Search bar */}
      <View
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Digite aqui"
            placeholderTextColor="#D4C3FA"
            value={cidade}
            onChangeText={setCidade}
          />
        </View>
        <TouchableOpacity
          style={{ height: 50, width: 50, backgroundColor: '#e7e6eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 4, borderRadius: 8 }}
          onPress={() => getClimate(cidade)}
        >
          {searchIcon}
        </TouchableOpacity>
      </View>

      <View style={styles.weatherCard}>
        <Text style={styles.cityText}>{dados.cidade}</Text>
        <Text style={styles.temperatureText}>{dados.graus}°C</Text>
        <Text style={styles.weatherStateText}>{dados.estado}</Text>
      </View>

      {/* Other information */}
      <View style={styles.otherInfoContainer}>
        <Text style={styles.otherInfoTitle}>Outras informações</Text>
        <View style={styles.infoCards}>
          <WeatherCard pais="Inglaterra" cidade="London" tempo="Clear" graus="13" />
          <WeatherCard pais="Estados Unidos" cidade="New York" tempo="Rain" graus="8" />
          <WeatherCard pais="Brasil" cidade="São Paulo" tempo="Clear" graus="26" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  searchBarContainer: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E6DEFB',
    borderRadius: 50,
    paddingHorizontal: 15,
    marginBottom: 20,
    height: 50,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#6F47DD',
  },
  weatherCard: {
    backgroundColor: '#6F47DD',
    borderRadius: 30,
    paddingVertical: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  weatherIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  cityText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  temperatureText: {
    fontSize: 50,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  weatherStateText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  otherInfoContainer: {
    backgroundColor: '#F4F3FA',
    borderRadius: 20,
    padding: 20,
  },
  otherInfoTitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#000',
  },
  infoCards: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    width: '45%',
    height: 100,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
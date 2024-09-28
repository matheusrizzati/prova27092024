import WeatherCard from "@/components/WeatherCard";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const cloudIcon = <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="24" stroke="#EAEAF5" strokeWidth="2" fill="white" />
    <circle cx="25" cy="25" r="10" stroke="#000000" strokeWidth="2" fill="none" />
    <line x1="25" y1="15" x2="25" y2="35" stroke="#000000" strokeWidth="2" />
    <line x1="15" y1="25" x2="35" y2="25" stroke="#000000" strokeWidth="2" />
    <path d="M25 15 C 20 20, 20 30, 25 35" stroke="#000000" strokeWidth="2" fill="none" />
    <path d="M25 15 C 30 20, 30 30, 25 35" stroke="#000000" strokeWidth="2" fill="none" /></svg>

  function goToSearch(){
   router.navigate("./search")
  }

  return (
    <View
      style={{ paddingHorizontal: 32, paddingTop: 40, display: 'flex', alignItems: 'center'}}
    >
      <View
        style={styles.header}
      >
        <Text>
          Olá User, {"\n"}
          Descubra o clima
        </Text>
        {cloudIcon}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={goToSearch}
      >
        <Text style={styles.buttonText}>Pesquise por uma cidade</Text>
      </TouchableOpacity>
      <Text
        style={styles.h2}
      >Ao redor do mundo</Text>

      <WeatherCard pais="Inglaterra" cidade="London" tempo="Clear" graus="13"/>
      <WeatherCard pais="Estados Unidos" cidade="New York" tempo="Rain" graus="8"/>
      <WeatherCard pais="Brasil" cidade="São Paulo" tempo="Clear" graus="26"/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 60
  },
  headerText: {},
  button:{
    backgroundColor: '#6151C3',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    width: 260,
    height: 60,
    borderRadius: 30,
    marginBottom: 98,
  },
  buttonText:{
    color: 'white',
    fontWeight: "500",
    fontSize: 18
  },
  h2:{
    fontSize: 20,
    marginBottom: 16,
    width: '100%'
  }
})
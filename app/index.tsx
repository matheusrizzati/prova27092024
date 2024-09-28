import { router } from "expo-router";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  
  function goToHome(){
    router.navigate("./home")
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#6151C3',
        padding: 20
      }}
    >
        <View
          style={styles.container}
        >
          <Text style={styles.h1}>Veja como está o tempo ao redor do mundo 🌍️</Text>
          <Text style={styles.h2}>Comece agora gratuitamente</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={goToHome}
          >
            <Text style={styles.buttonText}>Vamos lá</Text>
          </TouchableOpacity>
          <Text style={styles.h3}>Já tem uma conta ? Log in</Text>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    padding: 20,
    paddingTop: 72,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 24,
  },
  h1:{
    fontWeight: "900",
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 16,
  },
  h2:{
    color: '#6B6A71',
    fontSize: 14,
    marginBottom: 60,
  },
  button:{
    backgroundColor: '#6151C3',
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    width: 260,
    height: 60,
    borderRadius: 30,
    marginBottom: 16,
  },
  buttonText:{
    color: 'white',
    fontWeight: "500",
    fontSize: 18
  },
  h3:{
    color: '#393942',
    fontSize: 14,
    marginBottom: 72,
  }
})
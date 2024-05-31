import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')} // Substitua pela sua logo
          style={styles.logo}
        />
        <Text style={styles.title}>NutriApp</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.slogan}>
          Alimente-se com saúde! Descubra como seus hábitos alimentares
          impactam sua saúde e aprenda dicas para uma vida mais saudável.
        </Text>
        {/* <Image
          source={require('./assets/prato_saudavel.png')} // Substitua pela sua imagem
          style={styles.image}
        /> */}
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => props.navigation.navigate("questionsPage")}>
        <Text style={styles.buttonText}>Começar o Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BCD4', // Azul claro
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF', // Branco
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  slogan: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF', // Branco
  },
  image: {
    width: '80%',
    height: 200,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#4CAF50', // Verde vibrante
    padding: 15,
    borderRadius: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF', // Branco
    textAlign: 'center',
  },
});

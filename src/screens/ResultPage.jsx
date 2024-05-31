import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ResultScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')} 
          style={styles.logo}
        />
        <Text style={styles.title}>NutriApp</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.resultTitle}>Seu Resultado:</Text>

        <View style={styles.result}>
          {/* <Image
            source={require('./assets/resultado_positivo.png')} 
            style={styles.resultImage}
          /> */}
          <Text style={styles.resultText}>
            Parabéns! Você mostrou que sabe cuidar da sua saúde fazendo escolhas
            inteligentes e equilibradas.
          </Text>
        </View>

        <Text style={styles.feedback}>
          Continue com seus hábitos saudáveis e lembre-se de consultar um
          nutricionista para um acompanhamento personalizado.
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate("HomePage")}>
          <Text style={styles.buttonText}>Voltar para o Início</Text>
        </TouchableOpacity>
      </View>
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
    height: '15%',
    marginVertical: '10%',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // Branco
  },
  content: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  resultTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF', // Branco
  },
  result: {
    alignItems: 'center',
    marginBottom: 20,
  },
  resultImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF', // Branco
  },
  feedback: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFFFFF', // Branco
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

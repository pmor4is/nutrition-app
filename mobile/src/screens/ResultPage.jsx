import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image } from 'react-native';
import AppButton from '../components/AppButton';

import styles from './styles/ResultPageStyle';

export default function ResultScreen(props) {
  const navigation = useNavigation();

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

        <AppButton
          navigation={navigation}
          buttonTitle="Voltar ao início"
          onPress={() => navigation.navigate("homePage")}
        />
      </View>
    </View>
  );
};


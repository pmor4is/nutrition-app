import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';
import AppButton from '../components/AppButton';

import styles from './styles/ResultPageStyle';
import { QuestionsContext } from '../context/QuestionsContext';
import { calculateTotalScore } from '../controller/ScoreController';


export default function ResultScreen(props) {
  const navigation = useNavigation();

  const { data } = useContext(QuestionsContext);

  const feedbackText = calculateTotalScore(data);

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
            {feedbackText}
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


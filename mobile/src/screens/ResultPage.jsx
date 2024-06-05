import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles/ResultPageStyle';
import AppButton from '../components/AppButton';
import { QuestionsContext } from '../context/QuestionsContext';
import { calculateTotalScore } from '../controller/ScoreController';

import axios from 'axios';

export default function ResultScreen(props) {
  const navigation = useNavigation();

  const { data } = useContext(QuestionsContext);

  const feedbackText = calculateTotalScore(data);
  
  async function saveQuestions() {
    await axios.post('https://nutrition-app-server.vercel.app/questions', {
      "answer1": data.answer1,
      "answer2": data.answer2,
      "answer3": data.answer3,
      "answer4": data.answer4,
      "answer5": data.answer5,
      "answer6": data.answer6,
      "answer7": data.answer7,
      "answer8": data.answer8,
      "answer9": data.answer9,
      "answer10": data.answer10
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.error(error);
    });
  }
  
  useEffect(() => {
    saveQuestions();
  })

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
          onPress={() => {
            navigation.navigate("homePage")
          }}
        />
      </View>
    </View>
  );
};


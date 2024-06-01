import { useNavigation } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';
import AppButton from '../components/AppButton';

import styles from './styles/ResultPageStyle';
import { QuestionsContext } from '../context/QuestionsContext';

const DebugContext = () => {
  const { data } = useContext(QuestionsContext);

  return (
    <View>
      <Text>Estado do Contexto:</Text>
      <Text>answer1: {data.answer1}</Text>
      <Text>answer2: {data.answer2}</Text>
      <Text>answer3: {data.answer3}</Text>
      <Text>answer4: {data.answer4}</Text>
      <Text>answer5: {data.answer5}</Text>
      <Text>answer6: {data.answer6}</Text>
      <Text>answer7: {data.answer7}</Text>
      <Text>answer8: {data.answer8}</Text>
      <Text>answer9: {data.answer9}</Text>
      <Text>answer10: {data.answer10}</Text>
    </View>
  );
};

export default function ResultScreen(props) {
  const navigation = useNavigation();

  const {data} = useContext(QuestionsContext);

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
      <DebugContext />
    </View>
  );
};


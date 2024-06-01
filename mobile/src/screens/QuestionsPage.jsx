import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';

import { QuestionsData } from '../data/QuestionsData';
import AppButton from '../components/AppButton';
import OptionBox from '../components/OptionBox';

import styles from './styles/QuestionsPageStyle'

// TESTE
import { QuestionsContext } from '../context/QuestionsContext'; // Importe o contexto

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
// Fim do test

export default function QuestionScreen(props) {
    const navigation = useNavigation();

    const { data, setData } = useContext(QuestionsContext);
    const [question, setQuestion] = useState([]);
    const [index, setIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        setQuestion(QuestionsData)
    }, [])

    let currentQuestion = question[index];

    // Armazenamento de resposta no contexto
    useEffect(() => {
        if (selectedOption !== null) { 
            setData({
                // Como é uma única pagina que usa useEffect, é necessário ...data para trazer as questões armazenadas antes no contexto
                ...data,
                [`answer${index + 1}`]: selectedOption //Index + 1 pois as respostas no contexto começam com 1
            });
        }
    }, [selectedOption, index]); 

    const nextQuestion = () => {
        if (index < question?.length - 1) {
            setIndex((i) => i + 1);
            setSelectedOption(null);
        } else {
            navigation.navigate("resultPage")
        }
    }

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
                <Text style={styles.question}>
                    {currentQuestion?.question}
                </Text>

                <View style={styles.options}>
                    <OptionBox
                        optionTitle={currentQuestion?.options[0]}
                        onPress={() => setSelectedOption(0)}
                        isSelected={selectedOption === 0}
                    />
                    <OptionBox
                        optionTitle={currentQuestion?.options[1]}
                        onPress={() => setSelectedOption(1)}
                        isSelected={selectedOption === 1}
                        
                    />

                    <OptionBox
                        optionTitle={currentQuestion?.options[2]}
                        onPress={() => setSelectedOption(2)}
                        isSelected={selectedOption === 2}
                    />
                </View>
                <View>
                    <AppButton
                        navigation={navigation}
                        onPress={nextQuestion}
                        buttonTitle="Próxima pergunta"
                        disabled={selectedOption === null}
                    />
                </View>
                {/* TESTE TESTE */}
                <DebugContext />
                {/* TESTE TESTE */}
            </View>
        </View>
    );
};


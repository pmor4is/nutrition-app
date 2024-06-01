import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';

import AppButton from '../components/AppButton';
import OptionBox from '../components/OptionBox';

import { QuestionsData } from '../data/QuestionsData';
import { QuestionsContext } from '../context/QuestionsContext'; // Importe o contexto

import styles from './styles/QuestionsPageStyle'

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
                        optionTitle={currentQuestion?.options[0].text}
                        onPress={() => setSelectedOption(0)}
                        isSelected={selectedOption === 0}
                    />
                    <OptionBox
                        optionTitle={currentQuestion?.options[1].text}
                        onPress={() => setSelectedOption(1)}
                        isSelected={selectedOption === 1}
                        
                    />
                    <OptionBox
                        optionTitle={currentQuestion?.options[2].text}
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
            </View>
        </View>
    );
};


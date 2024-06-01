import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';

import { QuestionsData } from '../data/QuestionsData';
import AppButton from '../components/AppButton';
import OptionBox from '../components/OptionBox';

import styles from './styles/QuestionsPageStyle'

export default function QuestionScreen(props) {
    const navigation = useNavigation();

    const [question, setQuestion] = useState([]);
    const [index, setIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        setQuestion(QuestionsData)
    }, [])

    let currentQuestion = question[index];

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
                    />
                </View>
            </View>
        </View>
    );
};


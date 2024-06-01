import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';

import styles from './styles/OptionBoxStyle';

import { QuestionsContext } from '../context/QuestionsContext';

export default function OptionBox(props) {

    const { optionTitle, onPress, isSelected } = props;

    // const { data, setData } = useContext(QuestionsContext);

    return (
        <TouchableOpacity
            style={[styles.option, isSelected ? styles.selected : null]}
            onPress={onPress}
        >
            <Text
                style={[styles.optionText, isSelected ? styles.selectedText : null]}
            >
                {optionTitle}
            </Text>
        </TouchableOpacity>
    )
}
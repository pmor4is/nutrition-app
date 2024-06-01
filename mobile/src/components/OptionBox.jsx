import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from './styles/OptionBoxStyle';

export default function OptionBox(props) {

    const { optionTitle, onPress, isSelected } = props;

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
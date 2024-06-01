import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles/AppButtonStyle'

export default function AppButton(props) {
    const { buttonTitle, onPress } = props; // Recebe as props navigation e route

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}
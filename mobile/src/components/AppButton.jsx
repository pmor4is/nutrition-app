import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles/AppButtonStyle'

export default function AppButton(props) {
    const { navigation, route, buttonTitle } = props; // Recebe as props navigation e route

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(route.name)}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#4CAF50', // Verde vibrante
        padding: 15,
        borderRadius: 10,
        margin: 20,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFFFFF', // Branco
        textAlign: 'center',
    },
    disabledButton: {
        backgroundColor: '#ccc', // Cor desabilitada
    },
})

export default styles;
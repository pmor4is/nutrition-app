import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    option: {
        backgroundColor: '#FFFFFF', // Branco
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
    },
    optionText: {
        fontSize: 16,
        color: '#00BCD4', // Azul claro
    },
    selected: { // Estilo para a opção selecionada
        backgroundColor: '#4CAF50', // Verde vibrante 
    },
    selectedText: {
        color: '#FFFFFF',
    }
})

export default styles;
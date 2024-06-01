import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00BCD4', // Azul claro
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%',
        marginVertical: '10%',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF', // Branco
    },
    content: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    question: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 20,
        color: '#FFFFFF', // Branco
    },
    options: {
        width: '100%',
    },
});

export default styles;
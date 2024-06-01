import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00BCD4', // Azul claro
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '30%',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FFFFFF', // Branco
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingHorizontal: 20,
    },
    slogan: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        color: '#FFFFFF', // Branco
    },
    image: {
        width: '80%',
        height: 200,
        resizeMode: 'contain',
    },
});


export default styles;
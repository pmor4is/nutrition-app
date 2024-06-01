import { StyleSheet } from 'react-native'

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
    resultTitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
      color: '#FFFFFF', // Branco
    },
    result: {
      alignItems: 'center',
      marginBottom: 20,
    },
    resultImage: {
      width: 150,
      height: 150,
      marginBottom: 10,
    },
    resultText: {
      fontSize: 18,
      textAlign: 'center',
      marginBottom: 20,
      color: '#FFFFFF', // Branco
    },
    feedback: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
      color: '#FFFFFF', // Branco
    },
  });

export default styles;
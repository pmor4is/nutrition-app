import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

export default function QuestionScreen(props) {
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
                    Quantos copos de água você bebe por dia?
                </Text>

                <View style={styles.options}>
                    <TouchableOpacity style={styles.option} onPress={() => { }}>
                        <Text style={styles.optionText}>a) Não bebo muita água;</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option} onPress={() => { }}>
                        <Text style={styles.optionText}>b) Menos de quatro copos;</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.option} onPress={() => { }}>
                        <Text style={styles.optionText}>c) Mais de cinco copos.</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => props.navigation.navigate("resultPage")}>
                        <Text style={styles.buttonText}>Começar o Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

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
});

import React from 'react';
import { Text, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import AppButton from '../components/AppButton';
import styles from './styles/HomepageStyle'

export default function HomeScreen(props) {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/logo.png')} // Substitua pela sua logo
          style={styles.logo}
        />
        <Text style={styles.title}>NutriApp</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.slogan}>
          Alimente-se com saúde! Descubra como seus hábitos alimentares
          impactam sua saúde e aprenda dicas para uma vida mais saudável.
        </Text>
        {/* <Image
          source={require('./assets/prato_saudavel.png')} // Substitua pela sua imagem
          style={styles.image}
        /> */}
      </View>

      <AppButton
        navigation={navigation}
        buttonTitle="Começar o quiz"
        onPress={() => navigation.navigate("questionsPage")}
      />
    </View>
  );
};
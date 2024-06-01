import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

import Homepage from './src/screens/Homepage';
import QuestionsPage from './src/screens/QuestionsPage';
import ResultPage from './src/screens/ResultPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='homePage' component={Homepage} />
          <Stack.Screen name='questionsPage' component={QuestionsPage} />
          <Stack.Screen name='resultPage' component={ResultPage} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}
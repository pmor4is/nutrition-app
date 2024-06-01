import { QuestionsData } from '../data/QuestionsData';

export const calculateTotalScore = (data) => {

    let totalScore = 0;
    for (let i = 0; i < 10; i++) {
        const selectedAnswerIndex = data[`answer${i + 1}`];
        if (selectedAnswerIndex !== null) {
            const selectedWeight = QuestionsData[i].options[selectedAnswerIndex].weight;
            totalScore += selectedWeight;
        }
    }
    if (totalScore <= 10) {
        return "Reflita seus hábitos alimentares, e lembre-se sempre que uma alimentação desregulada pode levar à obesidade, diabetes, hipertensão, problemas no coração, desnutrição, entre outros. Reveja sua dieta alimentar e tente melhorar, seu corpo e sua saúde agradecem.";
    } else if (totalScore <= 20) {
        return "Sua alimentação está boa, mas ainda não é a ideal. Analise seus hábitos alimentares e verifique o que pode mudar.";
    } else {
        return "Parabéns, você mostrou que sabe cuidar de sua saúde fazendo escolhas inteligentes e equilibradas.";
    }
};
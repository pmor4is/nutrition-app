import React, { createContext, useState } from 'react';

export const QuestionsContext = createContext();

const initialState = {
    answer1: '',
    answer2: '',
    answer3: '',
    answer4: '',
    answer5: '',
    answer6: '',
    answer7: '',
    answer8: '',
    answer9: '',
    answer10: '',
};

export const QuestionsProvider = ({children}) => {
    const [data, setData] = useState(initialState);

    return (
        <QuestionsContext.Provider value={{data, setData}} >
            {children}
        </QuestionsContext.Provider>
    )
}
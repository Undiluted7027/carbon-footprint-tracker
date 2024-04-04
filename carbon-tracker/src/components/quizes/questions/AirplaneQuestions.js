import React from 'react';
import jsonData from './questions.json';

const getMainQuestion = () => {
    // console.log(jsonData.content);
    return jsonData.content;
}

export default getMainQuestion;

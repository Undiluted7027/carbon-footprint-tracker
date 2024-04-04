// import React from 'react'
import jsonData from './questions.json'

const generateSub = (id) => {
    console.log(jsonData.content.questions.sub_questions[id]);
    return jsonData.content.questions.sub_questions[id];
}

export default generateSub;

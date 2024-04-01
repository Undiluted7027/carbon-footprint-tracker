import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Nav.css';
import	'./Quiz.css';
import './Dashboard.css';
import Counter from './c02counter';

const FoodQuiz = () => {

    const questions = [
        "How does reducing meat consumption benefit the environment?",
        "What are the benefits of eating locally sourced food?",
        "How can individuals reduce food waste at home?",
        "What is the significance of organic farming in sustainable food consumption?",
        "What are the environmental impacts of overfishing on marine ecosystems?",
        "How do plant-based diets contribute to lower carbon emissions?",
        "What role does packaging play in food waste, and how can it be minimized?",
        "How can composting food waste contribute to a more sustainable food system?",
        "What are some challenges in making sustainable food choices accessible to everyone?",
        "How does food waste contribute to climate change?",
        "What are the benefits of seasonal eating for the environment?",
        "In what ways can technology help reduce food waste and improve food distribution?",
        "What role do governments and policy play in promoting sustainable food consumption?",
        "How can consumers influence the food industry towards more sustainable practices?",
        "What are the health benefits associated with sustainable eating habits?"
      ];
    
    const navigate = useNavigate();
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [usedIndices, setUsedIndices] = useState([]);
    const [c02estimation, setC02Estimation] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    
    const generateUniqueRandomIndex = () => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * questions.length);
      } while (usedIndices.includes(randomIndex));
      return randomIndex;
    };

    const nextQuestion = () => {
      if (usedIndices.length < questions.length - 1) {
        const randomIndex = generateUniqueRandomIndex();
        setUsedIndices(checkedIndices => [...checkedIndices, randomIndex]);
        setCurrentQuestionIndex(randomIndex);
        setQuestionNumber(questionNumber => questionNumber + 1);
      } else {
          alert("You have completed the quiz!");
          navigate('/');
      }
    };

  return (
    // questions[randomIndex]
    <div>
      <h1>Food Quiz</h1>
        <div className='quiz'>
          <div className='questionContainer'>
            <p className='questionText'> Question #{questionNumber} </p>
            <p className='questionText'> {questions[currentQuestionIndex]} </p>
          </div>
          <div className = "ansContainer">
            <button class = "ansBtn" >Almost Always</button>
            <button class = "ansBtn" >Generally</button>
            <button class = "ansBtn" >Rarely</button>
            <button class = "ansBtn" >Almost Never</button>
          </div>
      </div>
      <p className='questionText'> CO2 Emission: {c02estimation} </p>
      <button class = "nextBtn" onClick={nextQuestion}>Next Question</button>
    </div> 
  );
}

export default FoodQuiz;

import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


const TransportQuiz = () => {

    const questions = [
        "What are the benefits of using public transportation compared to private vehicles?",
        "How does cycling reduce one's carbon footprint?",
        "Can electric vehicles help combat climate change? How?",
        "What is the most energy-efficient mode of transportation?",
        "How does carpooling contribute to reducing emissions?",
        "What are some examples of green transportation technologies being developed today?",
        "How can cities encourage the use of green transportation?",
        "What is the environmental impact of high-speed trains?",
        "How do walking and biking contribute to a cleaner environment?",
        "What are some of the challenges in adopting electric vehicles widely?",
        "How do hybrid vehicles differ from electric vehicles in terms of environmental impact?",
        "In what ways does green transportation improve urban living?",
        "What role do governments have in promoting green transportation?",
        "How can individuals make a difference in reducing transportation-related emissions?",
        "What are the health benefits associated with green transportation methods?"
      ];

      const randomIndex = Math.floor(Math.random() * questions.length);
      const counter = 1;
      // const incrementCounter = () => { counter + 1; }
      const randomQuestion = questions[randomIndex];
      const randomIndexStorage = [];
      const c02estimation = 0;
  return (
    // questions[randomIndex]
    <div>
      <h1>Food Quiz</h1>
        <div className='quiz'>
          <div className='questionContainer'>
            <p className='questionText'> Question #{counter} </p>
            <p className='questionText'> {questions[randomIndex]} </p>
          </div>
          <div className = "ansContainer">
            <button class = "ansBtn">Almost Always</button>
            <button class = "ansBtn">Generally</button>
            <button class = "ansBtn">Rarely</button>
            <button class = "ansBtn">Almost Never</button>
          </div>
      </div>
    </div> 
  );
}

export default TransportQuiz;
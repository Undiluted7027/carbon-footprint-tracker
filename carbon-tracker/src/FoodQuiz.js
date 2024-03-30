import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

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

      const randomIndex = Math.floor(Math.random() * questions.length);
      const counter = 1;
      // const incrementCounter = () => { counter + 1; }
      const randomQuestion = questions[randomIndex];
      const randomIndexStorage = [];
  return (
    // questions[randomIndex]
    <div>
      <h1>Food Quiz</h1>
      <div className='dashboardContainer'>
        <p className='dashboardLeftValue'> Question #{counter} </p>
        <p className='dashboardLeftValue'> {questions[randomIndex]} </p>
      </div>
      <div id = "ansGroup" class = "hidden">
        <button class = "ansBtn">Ans1</button>
        <button class = "ansBtn">Ans2</button>
        <button class = "ansBtn">Ans3</button>
        <button class = "ansBtn">Ans4</button>
      </div>
    </div> 
  );
}

export default FoodQuiz;

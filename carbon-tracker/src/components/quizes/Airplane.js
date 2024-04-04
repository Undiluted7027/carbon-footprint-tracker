// Quiz.js
import React, { useState, useEffect } from "react";
import Question from "./questions/Questions";
import questionsData from "./questions/questions.json";
import { useAuth } from "../../contexts/AuthContext";
import '../../Quiz.css';

const Quiz = () => {
  const { currentUser } = useAuth();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]); // Store user answers as an array
  const [loading, setLoading] = useState(false);
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  useEffect(() => {
    setQuestions(questionsData.content.questions.sub_questions);
  }, []);

  const handleAnswerChange = (index, value) => {
    // Update userAnswers array with the new value at the specified index
    setUserAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[index] = value;
      return updatedAnswers;
    });
  };

  const calculateCarbonFootprint = async() => {
    if (currentUser) {
      try {
        const token = await currentUser.getIdToken();
        const response = await fetch(`http://localhost:3001/api/transportation/${currentUser.uid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }, 
        });
        const carbonFootprint = await response.text();
        setCarbonFootprint(carbonFootprint); // Return the carbon footprint value
      } catch (error) {
        console.error(error.message);
      }
    }
    return 'dummy'; // Return an empty string if currentUser is not available
  }
  

  const handleNext = async () => {
    // Move to the next question
    const qid = questions[currentQuestionIndex].qid;
    if (currentUser) {
      try {
        setLoading(true);
        const token = await currentUser.getIdToken();
        const response = await fetch(
          `http://localhost:3001/api/transportation/${currentUser.uid}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ [qid]: userAnswers }),
          }
        );
        console.log(await response.text());
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setLoading(false);
        // updatedAnswers = {};
      } catch (error) {
        setLoading(false);
        console.error(error.message);
      }
    }
    // console.log(answers);
    // setUserAnswer("");
  };

  const currentQues = questions[currentQuestionIndex];

  return (
    <div className="quiz">
    <div className="quizAirplane">
      {currentQues && (
        <Question
          question={{
            inputNum: currentQues.inputNum,
            options: currentQues.answers,
            inputType: currentQues.element,
            content: currentQues.content,
            placeholders: currentQues.placeholders,
          }}
          handleAnswerChange={handleAnswerChange}
          userAnswers={userAnswers}
        />
      )}

      {currentQuestionIndex === questions.length && (
        <div>
        <p>Congratulations! You have completed the quiz.</p>
        <button onClick={calculateCarbonFootprint}>Calculate</button>
          {carbonFootprint && <p>Carbon Footprint: {carbonFootprint}</p>}
        </div>
      )}
      {currentQuestionIndex < questions.length && (
        <button
          onClick={handleNext}
          // className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          className='nextBtn'
        >
          Next
        </button>
      )}
    </div>
    </div>
  );
};

export default Quiz;

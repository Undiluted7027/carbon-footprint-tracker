import React from 'react'
import Question from './Question'
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [qid, setQid] = useState("");
    const [answers, setAnswers] = useState([]);
    const [selectedAnswer, setSelectedAnswer] = useState(null); // Define selectedAnswer state

    const questions = [
        {
            text: 'How much do you travel by a gas car?',
            qid: "distance_gas_car",
            inputType: 'slider',
            minValue: 0,
            maxValue: 1000,
            answer: 0,
        },
        {
            text: 'How much do you travel by electric car?',
            qid: "distance_electric_car",
            inputType: 'slider',
            minValue: 0,
            maxValue: 1000,
            answer: 0,
        },
        // Add more questions here...
    ];

    const { currentUser } = useAuth(); // Assuming you have a custom hook to access the current user

    useEffect(() => {
        const getIdToken = async () => {
            if (currentUser) {
                try {
                    const idToken = await currentUser.getIdToken();
                    console.log('ID Token:', idToken);
                    return idToken;
                    // Now you can use this ID token to send requests to your backend
                } catch (error) {
                    console.error('Error getting ID token:', error);
                }
            }
        };

        getIdToken();
    }, [currentUser]);

    const handleAnswerSelect = async (selectedAnswer, qid) => {
        if (currentUser) {
            try {
                // Send the selected answer and corresponding qid to the backend
                const token = await currentUser.getIdToken();
                const response = await fetch(`http://localhost:3001/api/transportation/${currentUser.uid}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({"data":{ qid, answer: selectedAnswer }}),
                });

                // Handle the response if needed
                console.log(await response.text());

                // Move to the next question
                setCurrentQuestionIndex(currentQuestionIndex + 1);

                // Clear the selected answer for the next question
                setSelectedAnswer(null);
            } catch (error) {
                console.error('Error handling answer selection:', error);
            }
        };
    }

    const calculateCarbonFootprint = (cf) => {
        return cf;
    }

    return (
        <div>
            {currentQuestionIndex < questions.length ? (
                <div>
                    <Question
                        qid={qid} // Pass the qid to the Question component
                        question={questions[currentQuestionIndex]} 
                        onAnswerSelect={setSelectedAnswer} // Pass setSelectedAnswer as prop
                    />
                    <button onClick={() => handleAnswerSelect(selectedAnswer, questions[currentQuestionIndex].qid)}>
                        Next
                    </button>
                </div>
                
            ) : (
                <div>
                    <h2>Quiz Complete</h2>
                    <p>Estimated Carbon Footprint: {calculateCarbonFootprint(0)} kg CO2e</p>
                </div>
            )}
        </div>
    );

}

export default Quiz;


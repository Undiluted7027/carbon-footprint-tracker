import React from 'react';
import { useState } from 'react';

function Question({ question, onAnswerSelect }) {
    const [value, setValue] = useState("0");
    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // } 
    console.log(question);
  const renderInput = () => {
    switch (question.inputType) {
      case 'slider':
        return (
          <input 
            // style={{color: "green", padding: "1em", fontSize: '1.5em'}} // Enclose the value of padding in quotes
            type="range" 
            min={question.minValue} 
            max={question.maxValue} 
            // value={question.answer || question.minValue} 
            onChange={(e) => onAnswerSelect(parseInt(e.target.value))} // Ensure onAnswerSelect is correctly called
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>{question.text}</h2>
      {renderInput()}
    </div>
  );
}

export default Question;

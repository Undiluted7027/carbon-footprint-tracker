import React from "react";
import SliderInput from "../answers/SliderInput";
import OptionsInput from "../answers/OptionsInput";
import NumberInput from "../answers/NumberInput";
import TextInput from "../answers/TextInput";

const Question = ({ question, handleAnswerChange, userAnswers }) => {
  const renderInput = () => {
    const inputs = [];
    for (let i = 0; i < parseInt(question.inputNum); i++) {
      switch (question.inputType) {
        case "options":
          inputs.push(
            <OptionsInput
              key={i}
              options={question.options}
              value={userAnswers[i]}
              onChange={(value) => handleAnswerChange(i, value)} // Use the common event handler
            />
          );
          break;
        case "slidebar":
          inputs.push(
            <SliderInput
              key={i}
              min={question.options[0]}
              max={question.options[1]}
              value={userAnswers[i]}
              onChange={(value) => handleAnswerChange(i, value)} // Use the common event handler
            />
          );
          break;
        case "number":
          inputs.push(
            <NumberInput
              key={i}
              placeholder={question.placeholders[i]}
              value={userAnswers[i]} // Pass the userAnswer as value
              onChange={(value) => handleAnswerChange(i, value)} // Use the common event handler
            />
          );
          break;
        case "text":
        default:
          inputs.push(
            <TextInput
              key={i}
              placeholder={question.placeholders[i]}
              value={userAnswers[i]} // Pass the userAnswer as value
              onChange={(value) => handleAnswerChange(i, value)} // Use the common event handler
            />
          );
          break;
      }
    }
    return inputs;
  };

  return (
    <div>
      <h2>{question.content}</h2>
      {renderInput()}
    </div>
  );
};

export default Question;

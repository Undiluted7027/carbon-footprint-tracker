import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';


const WasteManagementQuiz = () => {

    const questions = [
            "What are the key benefits of recycling for the environment?",
            "How does composting organic waste help reduce greenhouse gas emissions?",
            "In what ways can reducing plastic usage contribute to waste management?",
            "What is the significance of the 'Reduce, Reuse, Recycle' hierarchy in waste management?",
            "How does electronic waste (e-waste) recycling benefit the environment?",
            "What are some innovative technologies in waste management being developed today?",
            "How can cities improve their waste management systems to become more sustainable?",
            "What are the environmental impacts of landfill waste?",
            "How do waste-to-energy plants work, and what are their benefits?",
            "What are some of the challenges in implementing widespread composting programs?",
            "How do biodegradable and compostable materials differ in terms of environmental impact?",
            "In what ways can effective waste management improve urban living?",
            "What role do governments have in promoting sustainable waste management practices?",
            "How can individuals contribute to better waste management in their daily lives?",
            "What are the health and environmental benefits of minimizing food waste?"
        ];

      const randomIndex = Math.floor(Math.random() * questions.length);

    return (
        questions[randomIndex]
     );
}

export default WasteManagementQuiz;

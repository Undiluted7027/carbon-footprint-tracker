import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useState } from "react";

// const TransportQuiz = () => {
//   const [qid, setQid] = useState(0);
//   const [ans, setAns] = useState([]);
//   const [selectedUnit, setSelectedUnit] = useState("");
//   // const questions = [
//   //   {
//   //     question: "What percentage of your transportation is done by public transport (e.g., bus, train)?",
//   //     datatype: Number,
//   //     element: "slidebar",
//   //     options: [],
//   //   },
//   //   {
//   //     question: "What percentage of your transportation is done by walking or cycling?",
//   //     datatype: Number,
//   //     element: "slidebar",
//   //     options: [],
//   //   },
//   //   {
//   //     question: "What percentage of your transportation is done by electric vehicles?",
//   //     datatype: Number,
//   //     element: "slidebar",
//   //     options: [],
//   //   },
//   //   {
//   //     question: "What percentage of your transportation is done by hybrid vehicles?",
//   //     datatype: Number,
//   //     element: "slidebar",
//   //     options: [],
//   //   },
//   //   {
//   //     question: "How much did you travel by car today?",
//   //     datatype: Number,
//   //     units: ["km", "mile", "m"],
//   //     selectedUnit: "",
//   //     element: "slidebar",
//   //     options: [],
//   //   },
//   // ];

//   const randomIndex = Math.floor(Math.random() * questions.length);
//   const counter = 1;
//   // const incrementCounter = () => { counter + 1; }
//   const randomQuestion = questions[randomIndex];
//   const randomIndexStorage = [];
//   const c02estimation = 0;
//   return (
//     // questions[randomIndex]
//     <div>
//       <h1>Food Quiz</h1>
//       <div className="quiz">
//         <div className="questionContainer">
//           <p className="questionText" onChange={(e) => setQid(counter)}>
//             {" "}
//             Question #{counter}{" "}
//           </p>
//           <p className="questionText"> {questions[randomIndex]} </p>
//         </div>
//         <div className="ansContainer">
//           <button className="ansBtn">Almost Always</button>
//           <button className="ansBtn">Generally</button>
//           <button className="ansBtn">Rarely</button>
//           <button className="ansBtn">Almost Never</button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default TransportQuiz;

import React from 'react';
import './App.css';
import Nav from './Nav';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransportQuiz from './TransportQuiz';
import WasteManagementQuiz from './WasteManagementQuiz';
import FoodQuiz from './FoodQuiz';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/TransportQuiz" element={<TransportQuiz />} />
          <Route path="/WasteManagementQuiz" element={<WasteManagementQuiz />} />
          <Route path="/FoodQuiz" element={<FoodQuiz />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Dashboard />
//     </div>
//   );
// }

// export default App;

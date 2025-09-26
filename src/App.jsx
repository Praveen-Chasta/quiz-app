import { useState } from "react";
import "./App.css";
import Quiz from "./components/Quiz";

const qBank = [
  {
    id: 1,
    question: "What is the capital of Haryana?",
    options: ["Yamunanagar", "Panipat", "Gurgaon", "Chandigarh"],
    answer: "Chandigarh",
  },
  {
    id: 2,
    question: "What is the capital of Punjab?",
    options: ["Patiala", "Ludhiana", "Amritsar", "Chandigarh"],
    answer: "Chandigarh",
  },
  {
    id: 3,
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    answer: "Delhi",
  },
  {
    id: 4,
    question: "What is the capital of Uttarakhad?",
    options: ["Roorkee", "Haridwar", "Dehradun", "Nanital"],
    answer: "Dehradun",
  },
  {
    id: 5,
    question: "What is capital of Uttar Pradesh?",
    options: ["GB Nagar", "Lucknow", "Prayagraj", "Agra"],
    answer: "Lucknow",
  },
];

function App() {
  const [quizResult, setQuizResult] = useState({
    correctAnswer: 0,
    showResult: false,
  });

  return (
    <div className="app-container">
      {quizResult.showResult ? (
        <div className="quiz-result-card">
          <h2>🎉 Quiz Completed!</h2>
          <p>
            You got <span className="score">{quizResult.correctAnswer}</span>{" "}
            out of <span className="total">{qBank.length}</span> correct!
          </p>
          <button
            className="retry-btn"
            onClick={() => window.location.reload()}
          >
            Retry Quiz
          </button>
        </div>
      ) : (
        <Quiz setQuizResult={setQuizResult} qBank={qBank} />
      )}
    </div>
  );
}

export default App;

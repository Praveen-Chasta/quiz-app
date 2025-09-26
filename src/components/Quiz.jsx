import { useState } from "react";

const Quiz = ({ setQuizResult, qBank }) => {
  const [selectedOption, setSelectedOption] = useState({});

  const handleSelectedOption = (qid, op) => {
    setSelectedOption((prev) => ({ ...prev, [qid]: op }));
  };

  const handleSubmit = () => {
    let totalCorrect = 0;

    qBank.forEach((item) => {
      if (selectedOption[item.id] === item.answer) {
        totalCorrect++;
      }
    });

    setQuizResult({
      correctAnswer: totalCorrect,
      showResult: true,
    });
  };

  return (
    <div className="quiz-container">
      {qBank.map((item) => (
        <div key={item.id} className="quiz-question">
          <h2>
            Q {item.id} {item.question}
          </h2>
          <ul className="quiz-options">
            {item.options.map((op, index) => (
              <li key={index}>
                <label>
                  <input
                    type="radio"
                    name={`question-${item.id}`}
                    value={op}
                    checked={selectedOption[item.id] === op}
                    onChange={() => handleSelectedOption(item.id, op)}
                  />
                  {op}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Quiz;

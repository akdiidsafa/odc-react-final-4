import { useState, useCallback } from 'react';
import Question from './Question.jsx';
import Summary from './Summary.jsx';
import QUESTIONS from '../questions.js';

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;


  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevAnswers) => [...prevAnswers, selectedAnswer]);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 md:p-8 bg-gradient-to-b from-quiz-card to-quiz-cardDark rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.4),0_0_40px_rgba(176,149,255,0.1)]">
      <Question
        key={activeQuestionIndex} 
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
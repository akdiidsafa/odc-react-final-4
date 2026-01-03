import { useRef } from 'react';

export default function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  
  const baseClasses = "w-full py-4 px-6 text-base font-medium rounded-full transition-all duration-300 cursor-pointer";
  
  const defaultClasses = "bg-gradient-to-br from-purple-200 to-purple-300 text-quiz-dark hover:from-purple-100 hover:to-purple-200 hover:-translate-y-0.5 hover:shadow-[0_4px_15px_rgba(176,149,255,0.4)]";
  

  const stateClasses = {
    selected: "bg-gradient-to-br from-yellow-300 to-yellow-400 text-quiz-dark shadow-[0_0_15px_rgba(245,216,97,0.5)]",
    correct: "bg-gradient-to-br from-green-400 to-green-500 text-green-950 shadow-[0_0_15px_rgba(74,222,128,0.5)]",
    wrong: "bg-gradient-to-br from-red-400 to-red-500 text-red-950 shadow-[0_0_15px_rgba(248,113,113,0.5)]"
  };

  const disabledClasses = "cursor-not-allowed opacity-70";

  // Animations d'entrée
  const animationClasses = [
    'animate-fade-in-delay-1',
    'animate-fade-in-delay-2',
    'animate-fade-in-delay-3',
    'animate-fade-in-delay-4'
  ];

  return (
    <ul className="list-none p-0 m-0 mt-8 flex flex-col gap-3">
      {shuffledAnswers.current.map((answer, index) => {
        const isSelected = selectedAnswer === answer;
        const isDisabled = answerState !== '';

        let buttonClasses = baseClasses;
        
        if (answerState === 'answered' && isSelected) {
          buttonClasses += ` ${stateClasses.selected}`;
        } else if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
          buttonClasses += ` ${stateClasses[answerState]}`;
        } else {
          buttonClasses += ` ${defaultClasses}`;
        }

        if (isDisabled) {
          buttonClasses += ` ${disabledClasses}`;
        }

        return (
          <li key={answer} className={animationClasses[index] || ''}>
            <button
              onClick={() => onSelect(answer)}
              className={buttonClasses}
              disabled={isDisabled}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
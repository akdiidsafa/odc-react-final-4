import quizCompleteImg from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);
  const skippedPercent = Math.round((skippedAnswers.length / userAnswers.length) * 100);
  const correctPercent = Math.round((correctAnswers.length / userAnswers.length) * 100);
  const wrongPercent = 100 - skippedPercent - correctPercent;
  return (
    <div className="max-w-xl mx-auto mt-12 p-6 md:p-10 bg-gradient-to-b from-quiz-card to-quiz-cardDark rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.4),0_0_40px_rgba(176,149,255,0.1)] text-center animate-fade-in">
      <img src={quizCompleteImg}  alt="Quiz terminé" className="w-32 h-32 object-contain mx-auto mb-4 drop-shadow-[0_0_10px_rgba(176,149,255,0.5)]" />
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-quiz-accentLight to-quiz-accent bg-clip-text text-transparent">Quiz Terminé !</h2>
      <div className="flex justify-center gap-8 md:gap-12 mb-8 pb-8 border-b border-white/10 flex-wrap">
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-400 to-purple-400 bg-clip-text text-transparent">
            {skippedPercent}%
          </span>
          <span className="text-sm text-gray-400 uppercase tracking-wider mt-1">
            passées
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent">
            {correctPercent}%
          </span>
          <span className="text-sm text-gray-400 uppercase tracking-wider mt-1">
            correctes
          </span>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
            {wrongPercent}%
          </span>
          <span className="text-sm text-gray-400 uppercase tracking-wider mt-1">
            incorrectes
          </span>
        </div>
      </div>

      <ol className="list-none p-0 m-0 text-left space-y-4">
        {userAnswers.map((answer, index) => {
          let answerClasses = "text-center py-3 px-6 rounded-full font-semibold";
          
          if (answer === null) {
            answerClasses += " bg-gray-500/20 text-gray-400 italic";
          } else if (answer === QUESTIONS[index].answers[0]) {
            answerClasses += " bg-green-400/20 text-green-400";
          } else {
            answerClasses += " bg-red-400/20 text-red-400";
          }

          return (
            <li  key={index}  className="bg-white/5 rounded-xl p-6 relative">
              <h3 className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-br from-purple-600 to-purple-800 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium shadow-lg"> {index + 1}</h3>
              <p className="text-gray-200 text-center mt-2 mb-4"> {QUESTIONS[index].text} </p>
              <p className={answerClasses}>{answer ?? 'Passée'} </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
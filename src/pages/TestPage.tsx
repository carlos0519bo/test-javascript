import { useState } from 'react';
import FadeIn from 'react-fade-in';
import { questions } from '../utils/questions';
import { Question } from '../components/Question';
import JS from '../assets/js.png';
import { FinalInformation } from '../components';
import { useQuestionsStore } from '../store/useQuestionsStore';
import { Quest } from '../interfaces/quest';

export const TestPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<Quest>();
  const { saveAnswers, increaseScore } = useQuestionsStore();

  const handleOptionSelect = (option: Quest) => {
    setSelectedOption(option);
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    selectedOption && saveAnswers(selectedOption);
    setSelectedOption(undefined);
    if (selectedOption?.isCorrect) {
      increaseScore();
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center bg-gradient-to-tr from-amber-300 to-yellow-600 px-5 md:px-60 inset-x-0">
      {currentQuestionIndex === questions.length ? (
        <FinalInformation />
      ) : (
        <FadeIn transitionDuration={800}>
          <img src={JS} alt="" width={60} />
          <h3 className="mb-5 mt-5 text-lg font-medium text-gray-900 dark:text-black">
            {questions[currentQuestionIndex].title}
          </h3>
          {questions[currentQuestionIndex].options.map((question) => (
            <div className="grid gap-6 mb-4" key={question.textoRespuesta}>
              <Question
                quest={question}
                handleOptionSelect={handleOptionSelect}
                selectedOption={selectedOption}
              />
            </div>
          ))}

          <button
            className={`w-40 bg-transparent hover:bg-zinc-600 text-zinc-700 font-semibold hover:text-white py-2 px-4 border border-zinc-600 hover:border-transparent mt-2 rounded-lg transition-all ${
              !selectedOption && 'cursor-not-allowed'
            }`}
            onClick={nextQuestion}
            disabled={!selectedOption}
          >
            Siguiente
          </button>
        </FadeIn>
      )}
    </div>
  );
};

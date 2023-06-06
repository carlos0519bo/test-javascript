import { useState } from 'react';
import FloatingButton from '../components/FloatingButton';
import { Modal } from '../components/Modal';
import { useQuestionsStore } from '../store/useQuestionsStore';
import { questions } from '../utils/questions';

export const ResultPage = () => {
  const [showModal, setShowModal] = useState(false);
  const { userAnswers, punctuation } = useQuestionsStore();
  const percentageCorrect = (punctuation / questions.length) * 100;

  const quest = questions.map((q) => q.options);
  const answers = userAnswers.map((q) => q.textoRespuesta);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  console.log('preguntas:', quest);
  console.log('respuestas:', answers);

  const message = () => {
    let message;
    if (percentageCorrect < 25) {
      message =
        'Aún necesitas mucho por aprender. ¡No te desanimes! Sigue practicando y verás cómo mejoras.';
    } else if (percentageCorrect >= 25 && percentageCorrect < 50) {
      message =
        'Vas por buen camino, pero aún hay margen de mejora. Continúa estudiando y practicando para obtener mejores resultados.';
    } else if (percentageCorrect >= 50 && percentageCorrect < 70) {
      message =
        '¡Excelente progreso! Estás obteniendo buenas respuestas, pero aún puedes mejorar. Sigue esforzándote.';
    } else if (percentageCorrect >= 70 && percentageCorrect < 100) {
      message =
        '¡Muy bien! Estás cerca de alcanzar un gran nivel. Sigue así y pronto llegarás al dominio completo del tema.';
    } else if (percentageCorrect === 100) {
      message =
        '¡Felicitaciones! Has respondido correctamente todas las preguntas. ¡Eres un experto en este tema!';
    }

    return message;
  };

  return (
    <div className="flex flex-col bg-gradient-to-tr from-amber-300 to-yellow-600 px-5 md:px-60">
      <div className="flex items-center justify-between mt-8">
        <p className="text-5xl md:text-6xl font-bold text-white mb-2 drop-shadow-md">
          Resultado
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 text-white drop-shadow-md hover:cursor-pointer hover:text-stone-300 transition-all"
          onClick={handleOpenModal}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>

      <p className="text-1xl md:text-xl text-white">
        <span className="text-2xl md:text-2xl font-bold text-slate-900">
          {punctuation}{' '}
        </span>
        {punctuation === 1 ? 'respuesta correcta ' : 'respuestas correctas '}
        de {questions.length}
      </p>
      <hr/>
      <p className="md:text-2xl font-bold text-slate-900 my-6">{message()}</p>

      <div
        className={`flex items-center justify-center w-full p-5 transition-all rounded-lg bg-teal-600 mb-6 `}
      >
        <div className="text-sm font-bold">Revisa tus respuestas</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 ml-2 top-0 left-0 animate-bounce"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
          />
        </svg>
      </div>

      {questions.map((question) => (
        <div key={question.title} className="mb-3">
          <p className="mb-2 font-semibold">{question.title}</p>
          {question.options.map((q) => (
            <div
              className={`items-center justify-between w-full p-5 transition-all rounded-lg bg-white mb-3`}
              key={q.textoRespuesta}
            >
              <div className="flex">
                <div className="w-full text-sm">{q.textoRespuesta}</div>
                {q.isCorrect && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 text-green-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
      <FloatingButton />
      {showModal && <Modal isOpen={showModal} handleCloseModal={handleCloseModal}/>}
    </div>
  );
};

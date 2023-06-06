import { useNavigate } from 'react-router-dom';
import { useQuestionsStore } from '../store/useQuestionsStore';

interface Props {
  isOpen: boolean;
  handleCloseModal: () => void;
}

export const Modal = ({ isOpen, handleCloseModal }: Props) => {
  const navigate = useNavigate();
  const { emptyResponseArray } = useQuestionsStore();

  const restartTest = () => {
    emptyResponseArray();
    navigate('/test');
  };

  const goToHome = () => {
    emptyResponseArray();
    navigate('/');
  };

  return (
    <div
      tabIndex={-1}
      className={`fixed inset-0 flex items-center justify-center p-4 ${
        isOpen ? 'visible' : 'hidden'
      }`}
    >
      <div className="relative w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              ¡Gracias por visitarnos! ♥️
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="small-modal"
              onClick={handleCloseModal}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-6 space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Espero que hayas disfrutado de la experiencia y que haya sido útil
              para poner a prueba tus conocimientos.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Si te ha gustado esta aplicación y te ha resultado útil, nos
              encantaría contar con tu ayuda para correr la voz. Te invito a que
              compartas tu experiencia con tus amigos y colegas, y los invites a
              probarla también.
            </p>
          </div>

          <div className="flex items-center justify-between p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            <button
              data-modal-hide="small-modal"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={restartTest}
            >
              Empezar de nuevo
            </button>
            <button
              data-modal-hide="small-modal"
              type="button"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={goToHome}
            >
              Ir a pagina principal
            </button>
          </div>
          <div className="w-full flex justify-center">
            <a
              href="https:www.linkedin.com/in/carlos-lopezc93"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline mb-2"
              target="_blank"
            >
              By Carlos López 👽
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

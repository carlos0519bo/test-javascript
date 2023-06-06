import { useNavigate } from 'react-router-dom';
import { useQuestionsStore } from '../store/useQuestionsStore';
import FadeIn from 'react-fade-in';
import Confetti from 'react-confetti';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

export const FinalInformation = () => {
  const { name, endTest } = useQuestionsStore();
  const navigate = useNavigate();

  const toRestulsPage = () => {
    endTest();
    navigate('/results');
  };

  return (
    <div className="flex flex-col md:items-center justify-center">
      <FadeIn transitionDuration={800}>
        <p className="text-5xl md:text-8xl font-bold text-white md:text-center">
          ¡Felicidades <span className="capitalize">{name}</span>!
        </p>
        <p className="text-2xl my-5 font-medium"> Has finalizado el test 😎</p>
        <button
          className="w-40 bg-transparent hover:bg-zinc-600 text-zinc-700 font-semibold hover:text-white py-2 px-4 border border-zinc-600 hover:border-transparent rounded-lg"
          onClick={toRestulsPage}
        >
          Ver resultado
        </button>
      </FadeIn>
      <Confetti width={windowWidth} height={windowHeight} recycle={false} />
    </div>
  );
};

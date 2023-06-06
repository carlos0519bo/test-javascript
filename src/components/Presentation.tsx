import JS from '../assets/js.png';
import FadeIn from 'react-fade-in';

export const Presentation = () => {
  return (
    <div className="flex md:w-1/2 justify-center py-10 items-center bg-gradient-to-tr from-amber-300 to-yellow-600 px-6 md:px-0 h-3/6 md:h-full rounded-br-[50%] md:rounded-br-none">
      <FadeIn transitionDuration={800}>
        <div>
          <img src={JS} alt="" width={60} height={40} />
          <h1 className="text-white font-bold text-4xl font-sans mt-1">
            Test JavaScript
          </h1>
          <p className="text-white mt-1">
            Comprueba tus conocimientos del lenguaje de programación más popular
          </p>
        </div>
      </FadeIn>
    </div>
  );
};

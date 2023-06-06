import { ChangeEvent, FormEvent, useState } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";
import { useNavigate } from "react-router-dom";
import { useQuestionsStore } from "../store/useQuestionsStore";

export const WelcomForm = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const { saveUserName } = useQuestionsStore();
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.length === 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    saveUserName(name);
    setName("");
    navigate("/test");
  };

  return (
    <div className='flex md:w-1/2 justify-center py-10 items-center'>
      <FadeIn transitionDuration={800} className='w-9/12 md:w-4/12'>
        <form onSubmit={handleSubmit}>
          <h1 className='text-gray-800 font-bold text-2xl mb-1'>Bienvenido</h1>
          <p className='text-sm font-normal text-gray-600 mb-4'>
            ¡Empieza ahora!
          </p>
          <div
            className={`flex items-center border-2 py-2 px-3 rounded-2xl mb-4 ${
              error && "border-rose-500"
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-gray-400'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                clipRule='evenodd'
              />
            </svg>
            <input
              className='pl-2 outline-none border-none'
              type='text'
              placeholder='Nombre *'
              value={name}
              onChange={handleChange}
            />
          </div>
          {error && <p className='text-rose-500 text-sm'>Campo obligatorio</p>}
          <button
            type='submit'
            className='block w-full bg-amber-300 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 uppercase hover:bg-amber-400'
          >
            Empezar
          </button>
        </form>
      </FadeIn>
    </div>
  );
};

import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-amber-300 to-yellow-600">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">Página no encontrada</p>
      <button
        onClick={() => navigate('/')}
        className={`bg-transparent hover:bg-zinc-600 text-zinc-700 font-semibold hover:text-white py-2 px-4 border border-zinc-600 hover:border-transparent rounded-lg transition-all duration-300`}
      >
        Volver a la página principal
      </button>
    </div>
  );
};

import { Presentation, WelcomForm } from '../components';

export const HomePage = () => {
  return (
    <div className="h-screen md:flex">
      <Presentation />
      <WelcomForm />
    </div>
  );
};

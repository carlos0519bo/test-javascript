import { ReactNode } from 'react';
import { Navigate} from 'react-router-dom';


interface Props {
  children?: ReactNode;
  isIdentified: boolean;
  isFinished?: boolean;
}

export const PrivateRoute = ({ children, isIdentified }: Props) => {
  if (!isIdentified) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

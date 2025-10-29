import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { JSX } from 'react';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useAuth();

  if (!user) {
    // Se não há usuário logado, redireciona para a página de login
    return <Navigate to="/login" />;
  }

  // Se há um usuário, renderiza o componente filho
  return children;
};

export default ProtectedRoute;
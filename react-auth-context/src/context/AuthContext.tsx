import { createContext, useState, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

// Define a interface para os dados do contexto de autenticação
interface AuthContextData {
  user: string | null;
  login: (email: string) => void;
  logout: () => void;
}

// Cria o contexto com um valor inicial undefined
const AuthContext = createContext<AuthContextData | undefined>(undefined);

// Define a interface para as props do provedor
interface AuthProviderProps {
  children: ReactNode;
}

// Cria o componente Provedor
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string | null>(localStorage.getItem('user')); // Pega o usuário do localStorage se existir
  const navigate = useNavigate();

  // Função de login
  const login = (email: string) => {
    setUser(email);
    localStorage.setItem('user', email); // Salva o usuário no localStorage para persistência
    navigate('/dashboard'); // Redireciona para o dashboard após o login
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user'); // Remove o usuário do localStorage
    navigate('/login'); // Redireciona para a tela de login
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook customizado para usar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
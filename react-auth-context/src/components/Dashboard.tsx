import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="container dashboard-container">
      <h2>Dashboard</h2>
      {user && <p>Bem-vindo, {user}!</p>}
      <button onClick={logout}>Sair</button>
    </div>
  );
};

export default Dashboard;
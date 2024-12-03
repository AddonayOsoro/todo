import { useAuth } from '../contexts/AuthContext';
import Login from './Login';

export default function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return children;
}
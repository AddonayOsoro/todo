import { useAuth } from './contexts/AuthContext';
import TodoList from './components/TodoList';
import PrivateRoute from './components/PrivateRoute';

export default function App() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto">
        {isAuthenticated && (
      <>
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Todo App
        </h1>
          <button
            onClick={logout}
            className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Logout
          </button>
      </>
        )}
        <PrivateRoute>
          <TodoList />
        </PrivateRoute>
      </div>
    </div>
  );
}
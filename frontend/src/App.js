import './App.css';
import AppRouter from './Approuter/AppRouter';
import { AuthProvider } from './AuthContext';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;

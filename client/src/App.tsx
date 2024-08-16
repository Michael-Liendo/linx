import { Routes } from './Routes';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <AuthProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </>
  );
}

export default App;

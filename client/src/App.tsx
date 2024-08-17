import { Routes } from './Routes';
import { Toaster } from './components/ui/toaster';
import { AuthProvider } from './context/AuthContext';
import { LinksProvider } from './context/LinksContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <>
      <AuthProvider>
        <LinksProvider>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Routes />
          </ThemeProvider>
        </LinksProvider>
      </AuthProvider>
      <Toaster />
    </>
  );
}

export default App;

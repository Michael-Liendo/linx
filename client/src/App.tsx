import { Routes } from './Routes';
import { AuthProvider } from './context/AuthContext';
import { LinksProvider } from './context/LinxContext';

function App() {
  return (
    <>
      <AuthProvider>
        <LinksProvider>
          <Routes />
        </LinksProvider>
      </AuthProvider>
    </>
  );
}

export default App;

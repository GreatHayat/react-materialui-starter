import React from 'react';
import { AuthProvider } from './context/authContext';
import MainLayOut from './components/layout';
import Routes from './routes';

function App() {
  return (
    <AuthProvider>
      <MainLayOut>
        <Routes />
      </MainLayOut>
    </AuthProvider>
  );
}

export default App;

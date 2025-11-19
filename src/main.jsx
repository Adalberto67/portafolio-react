// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/GlobalStyles.css'; // Importa tus estilos globales
import { ThemeProvider } from './context/ThemeContext'; // Importa el proveedor del tema

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envuelve toda la aplicación en el proveedor de tema */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

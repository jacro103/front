import React from 'react';
import { Navigate } from 'react-router-dom';

const Protected = ({ isAuthenticated, children }) => {
  if (!isAuthenticated) {
    // Si no está autenticado, redirige al login
    return <Navigate to="/login" replace />;
  }

  // Si está autenticado, muestra el contenido protegido
  return (
    <div>
      <h1>Ya funciona</h1>
      {children}
    </div>
  );
};

export default Protected;

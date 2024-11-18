import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Protected from './components/Protected';
import Login from './components/Login';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/protected"
          element={
            <Protected isAuthenticated={isAuthenticated}>
              {/* Contenido protegido */}
              <p>Bienvenido al área protegida.</p>
            </Protected>
          }
        />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </Router>
  );
};

export default App;

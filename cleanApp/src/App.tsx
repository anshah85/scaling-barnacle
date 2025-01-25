import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import DebrisCleanup from './pages/DebrisCleanup';
import PreventiveMeasures from './pages/PreventiveMeasures';

const App: React.FC = () => {
  return (
    <Routes>
      {/* HOME PAGE */}
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      {/* DEBRIS CLEANUP PAGE */}
      <Route
        path="/cleanup"
        element={
          <Layout>
            <DebrisCleanup />
          </Layout>
        }
      />

      {/* PREVENTIVE MEASURES PAGE */}
      <Route
        path="/prevention"
        element={
          <Layout>
            <PreventiveMeasures />
          </Layout>
        }
      />

      {/* CATCH-ALL (404) */}
      <Route
        path="*"
        element={
          <Layout>
            <div>
              <h2>Page not found</h2>
              <p>We couldn't find what you were looking for.</p>
            </div>
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;

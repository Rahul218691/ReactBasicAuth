import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import AuthRoute from './customRoutes/AuthRoute';
import PrivateRoute from './customRoutes/PrivateRoute';

const App = () =>{
  return (
    <Router>
    <div className="app">
      <Routes>
          <Route path='/' element={
            <AuthRoute>
              <LoginPage />
            </AuthRoute>
          }/>
          <Route path='/dashboard'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }/>
      </Routes>
    </div>  
    </Router>
  );
}

export default App;

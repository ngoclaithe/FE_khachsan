import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
// import LoginPage from '../pages/LoginPage';
import Dashboard from '../pages/Dashboard';
import PrivateRoute from './PrivateRoute'; 
import { useAuth } from '../context/AuthContext';



const Logout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    logout();
    navigate('/');
  }, [navigate, logout]);

  return null;
};

export const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/dashboard',
    element: (
      <PrivateRoute allowedRoles={['admin']}>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: '/logout',
    element: <Logout />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

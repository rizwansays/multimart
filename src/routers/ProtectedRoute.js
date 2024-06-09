import React from 'react'
import useAuth from '../customhooks/useAuth'
import { Navigate } from 'react-router-dom'
export default function ProtectedRoute({children}) {
  const {currentUser} = useAuth();

  return currentUser ? children : <Navigate to='/login' />
};

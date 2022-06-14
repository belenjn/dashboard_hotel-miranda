import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { authContext } from '../App';

export function RequireAuth({ children }) {
  let location = useLocation(); 
  const {authenticated} = useContext(authContext);

  if (!authenticated.authenticated) {

    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}


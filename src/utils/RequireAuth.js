import { Navigate, useLocation } from 'react-router-dom'

export function RequireAuth({ children, authenticated }) {
  let location = useLocation()
  if (!authenticated) {

    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}
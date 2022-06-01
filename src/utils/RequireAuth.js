import { Navigate, useLocation } from "react-router-dom"

export const RequireAuth = ({authenticated, children}) => {
    let location = useLocation();

    if(!authenticated) {
        return <Navigate to="/login" state={{from: location}} replace />
    }
  return children
}

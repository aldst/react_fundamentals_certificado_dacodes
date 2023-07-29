import { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = (): JSX.Element => {
  const [authenticated, ] = useState(false);
  const getToken = () =>{
    return sessionStorage.getItem('token')
  }
  const token = getToken()
  if (authenticated || token) return <Outlet />
  return <Navigate to={'/'} />
};

export default PrivateRoute;
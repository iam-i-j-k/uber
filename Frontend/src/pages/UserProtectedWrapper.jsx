import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UserProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Retrieve token from localStorage

  useEffect(() => {
    // Navigate to login if no token is found
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  

  return <>{children}</>;
};

export default UserProtectedWrapper;

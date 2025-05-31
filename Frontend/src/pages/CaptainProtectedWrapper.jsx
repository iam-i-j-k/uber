import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainProtectedWrapper = ({ children }) => {
    const navigate = useNavigate();
    const { captain, setCaptain } = useContext(CaptainDataContext);
    const [ isLoading, setIsLoading ] = useState(true);
    const token = localStorage.getItem('token'); // Retrieve token from localStorage

  
    useEffect(() => {
      // Navigate to login if no token is found
      if (!token) {
        navigate('/captain-login');
      }
    }, [token, navigate]);
  
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(response => {
        if(response.status === 200){
            setCaptain(response.data.captain)
            setIsLoading(false)
        }
    }).catch(err => {
        // If token is invalid, remove it from localStorage and navigate to login
        localStorage.removeItem('token');
        navigate('/captain-login');
        setIsLoading(false)
    })
    
    if(isLoading){
        return (
            <div>Loading...</div>
        )
    }
  
    return <>{children}</>;
  };

export default CaptainProtectedWrapper
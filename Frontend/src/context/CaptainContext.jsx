import { createContext, useContext, useState } from 'react';

export const CaptainDataContext = createContext();

export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isOnline, setIsOnline] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [currentRide, setCurrentRide] = useState(null);
    const [loading, setLoading] = useState(false);

    // Login captain
    const loginCaptain = async (credentials) => {
        setLoading(true);
        try {
            // API call to login
            // Update captain state
            setIsAuthenticated(true);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Logout captain
    const logoutCaptain = () => {
        setCaptain(null);
        setIsAuthenticated(false);
        setIsOnline(false);
        setCurrentLocation(null);
        setCurrentRide(null);
    };

    // Update captain status
    const updateOnlineStatus = (status) => {
        setIsOnline(status);
    };

    // Update location
    const updateLocation = (location) => {
        setCurrentLocation(location);
    };

    // Update current ride
    const updateCurrentRide = (ride) => {
        setCurrentRide(ride);
    };

    const value = {
        captain,
        setCaptain,
        isAuthenticated,
        isOnline,
        currentLocation,
        currentRide,
        loading,
        loginCaptain,
        logoutCaptain,
        updateOnlineStatus,
        updateLocation,
        updateCurrentRide
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};
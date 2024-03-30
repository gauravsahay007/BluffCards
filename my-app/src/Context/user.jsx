import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

const UserDataProvider = ({ children }) => {
    const [state, setState] = useState({
        name: "invalid",
        email: "",
        handle: [],
        role: 0,
    });  
    return (
        <UserContext.Provider value={{ state, setState }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserData = () => useContext(UserContext);

export default UserDataProvider;

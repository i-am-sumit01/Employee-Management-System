import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage } from '../Utils/localStorage';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [UserData, setUserData] = useState(null)

    useEffect(()=>{
        const {employees, admin} = getLocalStorage()
        setUserData({employees, admin})
        
    }, [])

    return (
        <div>
            <AuthContext.Provider value={UserData}>
                {children}
               {/* { console.log(UserData)} */}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
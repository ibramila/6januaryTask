import React, { createContext } from 'react'

export const MainContext = createContext();

function ContextProvider({ children }) {

    const values = {

    }
    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider>
    )
}

export default ContextProvider
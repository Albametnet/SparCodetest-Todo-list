import React, {useState} from "react"

const MainContext = React.createContext();

function MainContextProvider({children}) {

    return (
        <MainContext.Provider >
            {children}
        </MainContext.Provider>
    )
}

export {MainContextProvider, MainContext}
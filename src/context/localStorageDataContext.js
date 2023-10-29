import { createContext, useContext, useState } from "react";

const LocalStorageDataContext = createContext()

export function useLocalStorageDataContext() {
    return useContext(LocalStorageDataContext)
}

export function LocalStorageDataContextProvider({ children }) {

    const [localStorageData, setLocalStorageData] = useState(() => {
        if (localStorage.getItem('EasyLifeFindsUserWishListDataBase') === null) {
            localStorage.setItem('EasyLifeFindsUserWishListDataBase', JSON.stringify([]))
        }
        return JSON.parse(localStorage.getItem('EasyLifeFindsUserWishListDataBase'))
    })

    function updateLocalStorageData(updatedLocalDataBase) {
        localStorage.setItem('EasyLifeFindsUserWishListDataBase', JSON.stringify(localStorageData))
        setLocalStorageData(updatedLocalDataBase)
    }

    return <LocalStorageDataContext.Provider value={[localStorageData, updateLocalStorageData]}>
        {children}
    </LocalStorageDataContext.Provider>
}
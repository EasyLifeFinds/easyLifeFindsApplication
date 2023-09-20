import { createContext, useContext, useEffect, useState } from "react";

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

    useEffect(() => {
        console.log("Use Effect in Local Storage context running.....")
        localStorage.setItem('EasyLifeFindsUserWishListDataBase', JSON.stringify([...new Set(localStorageData)]))
    }, [localStorageData])

    function updateLocalStorageData(updatedLocalDataBase) {
        console.log("Update Local Storage Data running....")
        setLocalStorageData(updatedLocalDataBase)
    }

    return <LocalStorageDataContext.Provider value={[localStorageData, updateLocalStorageData]}>
        {children}
    </LocalStorageDataContext.Provider>
}
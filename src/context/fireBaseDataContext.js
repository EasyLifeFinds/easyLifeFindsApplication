import { createContext, useContext, useEffect, useState } from 'react'
import { db } from '../data/Data.js'
import { collection, doc, getDocs } from 'firebase/firestore'

const FireBaseDataContext = createContext()

export function useFireBaseDataContext() {
    return useContext(FireBaseDataContext)
}

export function FireBaseDataContextProvider({ children }) {

    const [fireStoreData, setFireStoreData] = useState([])

    async function setFireStoreDataFromFireStore() {
        const productCollection = collection(db, 'products')
        const productsSnapshot = await getDocs(productCollection);
        const productList = productsSnapshot.docs.map(doc => doc.data());
        const docData = productList.map(doc => doc.dataObj)
        setFireStoreData(docData)
    }

    useEffect(() => {
        console.log("Calling GetFireStore in Context use Effect")
        setFireStoreDataFromFireStore()
    }, [])

    return (
        <FireBaseDataContext.Provider value={fireStoreData}>
            {children}
        </FireBaseDataContext.Provider>
    )
}
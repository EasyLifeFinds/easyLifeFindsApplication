import { useRef } from "react"
import { useLocalStorageDataContext } from "../context/localStorageDataContext"

export default function Product({ product }) {

    let [localStorageData, updateLocalStorageData] = useLocalStorageDataContext()

    let wishListButtonRef = useRef()

    function upDateUserWishList(obj) {
        wishListButtonRef.current.classList.add("disabled:opacity-75")
        wishListButtonRef.current.setAttribute("disabled","true")
        console.log("Object to add -->", obj, )
        let tempLocalStorage = localStorageData
        tempLocalStorage.push(obj)
        console.log('LocalStorage user wishList -->', tempLocalStorage)
        updateLocalStorageData(tempLocalStorage)
    }

    return (
        <div className="text-[12px] sm:text-sm max-w-24 border p-2 m-1">
            <div>
                <img src={require("../images/place-holder-image.png")} />
            </div>
            <div className="min-w-24">
                {product.productName}.
                <div className="flex justify-between">
                    <div>
                        {product.genericName}.
                    </div>
                    <div>
                        <button className="rounded-none bg-slate-700 text-white px-2" ref={wishListButtonRef} onClick={() => { upDateUserWishList(product) }}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
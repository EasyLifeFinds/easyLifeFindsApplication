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
        <>
         <div className="sm:text-xs p-2 border m-2">
                    <div>
                        <img src={product.imageSrc} className="h-[100%] w-auto block ml-auto mr-auto"/>
                    </div>
                    <div className="grid gap-2 m-1">
                        <div className="font-medium text-xs">
                            {product.genericName}
                        </div>
                        <div className="font-light text-xs">
                            {product.productName}
                        </div>
                        <div className="text-[10px] font-medium">
                            Listed by {product.productLister}
                        </div>
                        <div className="flex justify-around">
                            <button onClick={() => {
                                window.open(new URL(product.productLink), "_blank");
                        }} className="bg-[#396B31] text-white w-[5vw] py-1">
                                buy
                            </button>
                        <button className="rounded-none bg-slate-400 text-white w-[5vw] py-1" ref={wishListButtonRef} onClick={() => { upDateUserWishList(product) }}>
                                save
                            </button>
                        </div>
                    </div>
            </div>
            </>
    )
}
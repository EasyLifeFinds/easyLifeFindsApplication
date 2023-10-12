import { useRef, Suspense } from "react"
import { useLocalStorageDataContext } from "../context/localStorageDataContext"
import { RxInfoCircled } from "react-icons/rx";
import Loader from "./loader"

export default function Product({ product, showProductDetails }) {

    let [localStorageData, updateLocalStorageData] = useLocalStorageDataContext()

    let wishListButtonRef = useRef()

    function upDateUserWishList(obj) {
        wishListButtonRef.current.classList.add("disabled:opacity-75")
        wishListButtonRef.current.setAttribute("disabled", "true")
        console.log("Object to add -->", obj,)
        let tempLocalStorage = localStorageData
        tempLocalStorage.push(obj)
        console.log('LocalStorage user wishList -->', tempLocalStorage)
        updateLocalStorageData(tempLocalStorage)
    }

    return (
        <>
            <div className="sm:text-xs p-2 border m-2 z-10">
                <div className="flex justify-end" >
                    <RxInfoCircled className="text-[#396B31] text-sm cursor-pointer shadow-sm" onClick={() => { showProductDetails(product.id.concat(product.genericName)) }} />
                </div>
                <div className="min-h-[25vh]">
                    <Suspense fallback={<Loader />}>
                        <img src={product.imageSrc} className="h-[100%] w-auto block m-auto" />
                    </Suspense>
                </div>
                <div className="grid gap-1 m-1">
                    <div className="font-medium text-xs">
                        {product.genericName}
                    </div>
                    <div className="font-extralight text-[12px]">
                        {product.productName}
                    </div>
                    <div className="text-[10px] font-light">
                        Listed by {product.productLister}
                    </div>
                    <div className="flex justify-around text-[15px] md:text-md">
                        <button onClick={() => {
                            window.open(new URL(product.productLink), "_blank");
                        }} className="bg-[#396B31] text-white  w-20 md:w-16 py-1">
                            buy
                        </button>
                        <button className="rounded-none bg-slate-400  text-white w-20 md:w-16 py-1" ref={wishListButtonRef} onClick={() => { upDateUserWishList(product) }}>
                            save
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
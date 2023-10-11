import { useRef, Suspense } from "react"
import { useLocalStorageDataContext } from "../context/localStorageDataContext"
import { RxInfoCircled } from "react-icons/rx";
import Loader from "./loader"
import DisplayFullProductDetails from "./displayFullProductDetails";

export default function Product({ product }) {

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

    function showFullProductDetails(id) {
        console.log("Id -->", id)
        document.getElementById(id).classList.remove("opacity-0")
    }


    return (
        <>
            <div className="sm:text-xs p-2 border m-2" data-id={product.id}>
                <div className="flex justify-end cursor-pointer" onClick={() => { showFullProductDetails(product.id) }}>
                    <RxInfoCircled className="text-[#396B31] -translate-y-1 translate-x-1 text-sm" />
                </div>
                <div className="min-h-[18vh]">
                    <Suspense fallback={<Loader />}>
                        <img src={product.imageSrc} className="h-[100%] w-auto block m-auto" />
                    </Suspense>
                </div>
                <div className="grid gap-1 m-1">
                    <div className="font-medium text-xs">
                        {product.genericName}
                    </div>
                    <div className="font-light text-[12px]">
                        {product.productName}
                    </div>
                    <div className="text-[10px] font-light">
                        Listed by {product.productLister}
                    </div>
                    <div className="flex justify-around">
                        <button onClick={() => {
                            window.open(new URL(product.productLink), "_blank");
                        }} className="bg-[#396B31] text-white w-20 md:w-16 py-1">
                            buy
                        </button>
                        <button className="rounded-none bg-slate-400 text-white w-20 md:w-16 py-1" ref={wishListButtonRef} onClick={() => { upDateUserWishList(product) }}>
                            save
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute left-[50vw] right-auto opacity-0" id={product.id}>
                <DisplayFullProductDetails productDetails={product} />
            </div>
        </>
    )
}
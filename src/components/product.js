import { useRef, Suspense } from "react"
import { useLocalStorageDataContext } from "../context/localStorageDataContext"
import { RxInfoCircled } from "react-icons/rx";
import Loader from "./loader"
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"
import toast, { Toaster } from 'react-hot-toast';

export default function Product({ product, showProductDetails }) {

    let [localStorageData, updateLocalStorageData] = useLocalStorageDataContext()

    let wishListButtonRef = useRef()
    let navigate = useNavigate()
    let location = useLocation()

    function upDateUserWishList(obj) {
        toast.success('Successfully created!');
        wishListButtonRef.current.classList.add("disabled:opacity-75")
        wishListButtonRef.current.setAttribute("disabled", "true")
        let tempLocalStorage = localStorageData
        tempLocalStorage.push(obj)
        updateLocalStorageData(tempLocalStorage)
    }

    return (
        <>
            <div className="sm:text-xs p-2 border m-2 z-10">
                <Toaster />
                <div className="flex justify-end" >
                    <RxInfoCircled className="text-[#396B31] text-md font-semibold cursor-pointer shadow-sm" onClick={() => { showProductDetails(product.id.concat(product.genericName)) }} />
                </div>
                <div className="min-h-[10rem]">
                    <Suspense fallback={<Loader />}>
                        <img src={product.imageSrc} alt={product.genericName} className="h-[100%] w-auto block m-auto" />
                    </Suspense>
                </div>
                <div className="grid gap-1 m-1">
                    <div className="min-h-[1rem] font-medium text-[12px] md:text-xs">
                        {product.genericName}
                    </div>
                    <div className="min-h-[2.2rem] font-extralight text-[11px]">
                        {product.productName}
                    </div>
                    {
                        (location.pathname != "/listerProducts") &&
                        <div className="flex text-[12px] md:text-xs font-light">
                            Listed by :
                            <div className="text-blue-500  cursor-pointer mx-1 underline" onClick={() => { navigate('listerProducts', { state: { listerTag: product.productLister.toLowerCase() } }) }}>
                                {product.productLister.toLowerCase()}
                            </div>
                        </div>
                    }
                    <div className="flex justify-around text-[12px] sm:text-[15px] md:text-md my-1">
                        <button onClick={() => {
                            window.open(new URL(product.productLink), "_blank");
                        }} className="bg-[rgb(57,107,49)] text-white px-4 py-1">
                            buy
                        </button>
                        {
                            location.pathname !== "/wishlist" &&
                            <button className="rounded-none bg-slate-400  text-white px-4 py-1" ref={wishListButtonRef} onClick={() => { upDateUserWishList(product) }}>
                                save
                            </button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
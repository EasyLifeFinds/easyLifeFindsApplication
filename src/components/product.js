import { useLocalStorageDataContext } from "../context/localStorageDataContext"

export default function Product({ product, addProductToWishList }) {

    return (
        <div className="text-[12px] sm:text-sm max-w-24 border p-2 m-1">
            <div>
                <img src={require("../images/place-holder-image.png")} />
            </div>
            <div className="min-w-24">
                {product.dataObj.productName}.
                <div className="flex justify-between">
                    <div>
                        {product.dataObj.genericName}.
                    </div>
                    <div>
                        <button className="rounded-none bg-slate-700 text-white px-2" onClick={() => { addProductToWishList(product) }}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
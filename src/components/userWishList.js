import { useEffect } from "react";
import { useLocalStorageDataContext } from "../context/localStorageDataContext";
import Product from "./product";

export default function UserWishList() {

    const [localStorageData, updateLocalStorageData] = useLocalStorageDataContext()

    console.log('User Wish List Component -- >', localStorageData)


    return <>
        <div className="flex justify-center m-2 font-light text-lg underline">
            You have {localStorageData.length} products
        </div>

        {
            <ul className="grid md:grid-cols-3 md:m-1 md:gap-2 lg:grid-cols-4 lg:gap-4 lg:m-2 ">
                {
                    localStorageData.map(data => (<li key={data.id}> <Product product={data} addProductToWishList={updateLocalStorageData} /> </li>))
                }
            </ul>
        }
    </>

}
import { useLocalStorageDataContext } from "../context/localStorageDataContext";
import Product from "./product";
import DisplayFullProductDetails from "./displayFullProductDetails"


export default function UserWishList() {

    const [localStorageData, updateLocalStorageData] = useLocalStorageDataContext()

    let prevId;

    function showFullProductDetails(id) {
        if (prevId === undefined) {
            prevId = id
            document.getElementById(id).classList.remove("hidden")
        }
        else {
            document.getElementById(prevId).classList.add("hidden")
            prevId = id
            document.getElementById(id).classList.remove("hidden")
        }
    }
    function closeFullProductDetailsContainer(id) {
        document.getElementById(id).classList.add("hidden")
    }
    return <>
        <div className="flex justify-center m-2 font-light text-lg underline">
            You have {localStorageData.length} products saved
        </div>

        {
            <ul className="grid grid-cols-2 md:grid-cols-3 md:m-1 md:gap-2 lg:grid-cols-5 lg:gap-2 lg:m-2 ">
                {
                    localStorageData.map(data =>
                    (
                        <li key={data.id.concat(data.genericName)}>
                            <div>
                                <Product product={data} showProductDetails={showFullProductDetails} />
                            </div>
                            <div className="absolute md:absolute md:left-[50vw] hidden" id={data.id.concat(data.genericName)} >
                                <DisplayFullProductDetails productDetails={data} closeProductDetails={closeFullProductDetailsContainer} />
                            </div>
                        </li>
                    ))
                }
            </ul>
        }
    </>

}
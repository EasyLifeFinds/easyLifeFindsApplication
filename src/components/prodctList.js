import { useEffect, useState } from "react"
import { useFireBaseDataContext } from "../context/fireBaseDataContext"
import FiltersList from "./filtersList"
import Product from "./product"
import { useLocalStorageDataContext } from "../context/localStorageDataContext"

export default function ProductList() {

    let fireBaseData = useFireBaseDataContext()
    let [localStorageData, updateLocalStorageData] = useLocalStorageDataContext()

    const [fireBaseDataState, setFireBaseDataState] = useState([])

    useEffect(() => {
        setFireBaseDataState(fireBaseData)
    }, [fireBaseData])

    function clearFilter() {
        setFireBaseDataState(fireBaseData)
    }

    function filterButton(event) {
        let fireBaseDataFiltered = fireBaseData.filter((data) => data.dataObj.productDepartment === event.target.closest("li").id)
        setFireBaseDataState(fireBaseDataFiltered)
    }

    function upDateUserWishList(obj) {
        console.log("Display Ful Details -->", obj)
        let tempLocalStorage = localStorageData
        tempLocalStorage.push(obj)
        console.log('LocalStorage user wishList -->', tempLocalStorage)
        updateLocalStorageData(tempLocalStorage)
    }

    return (
        <div>
            <FiltersList filterButton={filterButton} clearFilter={clearFilter} />

            <div className="flex justify-center m-2 font-light text-lg underline">
                We found {fireBaseDataState.length} products
            </div>

            {/* TO-DO  : displayFullProductDetails when tapped on button details. */}
            {/* <div className="absolute ml-[43vw]">
                <div className=" border m-1 max-w-[25vw]">
                    <div className="text-xl bg-black text-whit p-2">
                        Hello
                    </div>
                    <div>
                        This is product description
                    </div>
                </div>
            </div> */}

            <ul className="grid md:grid-cols-3 md:m-1 md:gap-2 lg:grid-cols-4 lg:gap-4 lg:m-2 ">
                {
                    fireBaseDataState.map(data => (<li key={data.dataObj.id}> <Product product={data} addProductToWishList={upDateUserWishList} /> </li>))
                }
            </ul>


        </div>
    )
}
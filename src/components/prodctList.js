import { useEffect, useState } from "react"
import { useFireBaseDataContext } from "../context/fireBaseDataContext"
import { useLocalStorageDataContext } from "../context/localStorageDataContext"
import FiltersList from "./filtersList"
import Product from "./product"
import WishListNavButton  from "./wishListNavigationButton"

export default function ProductList() {

    let fireBaseData = useFireBaseDataContext()

    const [fireBaseDataState, setFireBaseDataState] = useState([])
    const [localStorageData, updateLocalStorageData] = useLocalStorageDataContext()

    useEffect(() => {
        setFireBaseDataState(fireBaseData)
        let filteredArray = []
        localStorageData.forEach(element => {
            let tempArray = fireBaseData.filter(ev => ev.id != element.id)
            filteredArray.push(...tempArray)
        });
        console.log("Filtered Array -- > ", [...new Set(filteredArray)])

    }, [fireBaseData])

    function clearFilter() {
        setFireBaseDataState(fireBaseData)
    }

    function filterButton(event) {
        let fireBaseDataFiltered = fireBaseData.filter((data) => data.productDepartment === event.target.closest("li").id)
        setFireBaseDataState(fireBaseDataFiltered)
    }

    return (
        <div>
            <FiltersList filterButton={filterButton} clearFilter={clearFilter} />
            <div className="flex justify-end m-2 font-light text-xs">
                <div>
                    We found {fireBaseDataState.length} products
                </div>
            </div>
            <WishListNavButton />
            <div>
                <ul className="grid md:grid-cols-3 md:m-1 md:gap-2 lg:grid-cols-4 lg:gap-2 lg:m-2 ">
                    {
                        fireBaseDataState.map(data => (<li key={data.id}> <Product product={data} /> </li>))
                    }
                </ul>
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
        </div>
    )
}
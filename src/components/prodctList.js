import { useEffect, useState } from "react"
import { useFireBaseDataContext } from "../context/fireBaseDataContext"
import { useLocalStorageDataContext } from "../context/localStorageDataContext"
import FiltersList from "./filtersList"
import Product from "./product"
import WishListNavButton from "./wishListNavigationButton"
import DisplayFullProductDetails from "./displayFullProductDetails"

export default function ProductList() {

    let fireBaseData = useFireBaseDataContext()

    const [fireBaseDataState, setFireBaseDataState] = useState([])
    const [localStorageData, updateLocalStorageData] = useLocalStorageDataContext()

    let prevId;

    useEffect(() => {
        setFireBaseDataState(fireBaseData)
        let filteredArray = []
        localStorageData.forEach(element => {
            let tempArray = fireBaseData.filter(ev => ev.id != element.id)
            filteredArray.push(...tempArray)
        });
    }, [fireBaseData])

    function clearFilter() {
        setFireBaseDataState(fireBaseData)
    }

    function filterButton(event) {
        let fireBaseDataFiltered = fireBaseData.filter((data) => data.productDepartment === event.target.closest("li").id)
        setFireBaseDataState(fireBaseDataFiltered)
    }

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

    return (
        <div>
            <FiltersList filterButton={filterButton} clearFilter={clearFilter} />
            <div className="flex justify-end mx-2 font-light text-xs mt-[-0.8rem] sm:mt-0">
                <div>
                    There are {fireBaseDataState.length} products
                </div>
            </div>
            <WishListNavButton />
            <div>
                <ul className="grid grid-cols-2 md:grid-cols-3 md:m-1 md:gap-2 lg:grid-cols-5 lg:gap-2 lg:m-2 ">
                    {
                        fireBaseDataState.map(data =>
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
            </div>
        </div>
    )
}
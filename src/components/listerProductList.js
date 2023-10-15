import { useLocation } from "react-router-dom"
import { useFireBaseDataContext } from "../context/fireBaseDataContext"
import { useState } from "react"
import Product from "./product"
import DisplayFullProductDetails from "./displayFullProductDetails"

export default function ListerProductList() {

    let location = useLocation()
    let fireBaseData = useFireBaseDataContext()
    let prevId
    const [listerProducts, setListerProducts] = useState(() => {
        let products = fireBaseData.filter(ele => ele.productLister.toLowerCase() === location.state.listerTag)
        return products
    })
    // useEffect(() => {
    //     let listerProducts = fireBaseData.filter(ele => ele.productLister.toLowerCase() === location.state.listerTag)
    //     setListerProducts(listerProducts)
    // }, [])
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

            <div className="flex justify-between content-center align-middle font-light text-[#396B31]  mx-5 mt-2">
                <div className="">
                Products listed by {location.state.listerTag}
                </div>
                <div className="text-sm">
                We Found {listerProducts.length } products.
                </div>
            </div>
            <div>
                <ul className="grid md:grid-cols-3 md:m-1 md:gap-2 lg:grid-cols-5 lg:gap-2 lg:m-2 ">
                    {
                        listerProducts.map(data =>
                        (
                            <li key={data.id.concat(data.genericName)}>
                                <div className="">
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
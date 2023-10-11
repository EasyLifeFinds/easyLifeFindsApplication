export default function DisplayFullProductDetails({ productDetails, closeProductDetails }) {

    return (
        <div className="flex bg-white border border-[#396B31] shadow-md -translate-x-2/4 -translate-y-2/4 p-2 rounded-sm z-50" id="displayFullProductDetailsContainer">
            <div className="">
                <img src={productDetails.imageSrc} className="h-[100%] w-auto block m-auto" />
            </div>
            <div>
                <div>
                    {productDetails.genericName}
                </div>
                <div>
                    {productDetails.productName}
                </div>
                <div>
                    <button onClick={() => { closeProductDetails(productDetails.id.concat(productDetails.genericName)) }} className="bg-black text-white cursor-pointer">
                        close
                    </button>
                </div>
            </div>

        </div>
    )
}
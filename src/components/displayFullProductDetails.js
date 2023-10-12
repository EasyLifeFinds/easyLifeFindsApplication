export default function DisplayFullProductDetails({ productDetails, closeProductDetails }) {
    return (
        <div className="bg-white w-[80vw] ml-[10vw] md:ml-[0vw] md:w-[35vw] border border-[#396B31] shadow-md md:-translate-x-2/4 -translate-y-2/4 p-2 rounded-sm" id="fullProductDetailsContainer">
            <div className=" text-md md:text-md text-[#396B31] font-light text-center underline">
                Full Product Details
            </div>
            <div className="grid grid-flow-col grid-cols-3">
                <div className="flex justify-center items-center m-1">
                    <img src={productDetails.imageSrc} />
                </div>
                <div className="col-span-2 m-2">
                    <div className="text-[10px] md:text-[15px] font-light my-1">
                        Product Description : {productDetails.productDescription}.
                    </div>
                    <div>
                        <div className="text-[10px] md:text-xs">
                            <div className="font-extralight my-1">
                                Product Name : {productDetails.productName};
                            </div>
                            <div className="font-light my-1">
                                {
                                    productDetails.productDepartment === 1 &&
                                    <>
                                        Department : kitchen({productDetails.productDepartment })
                                    </>
                                }
                                {
                                    productDetails.productDepartment === 2 &&
                                    <>
                                        Department : Bedroom({productDetails.productDepartment})
                                    </>
                                }{
                                    productDetails.productDepartment === 3 &&
                                    <>
                                        Department : HomeOffice({productDetails.productDepartment})
                                    </>
                                }{
                                    productDetails.productDepartment === 4 &&
                                    <>
                                        Department : Furniture({productDetails.productDepartment})
                                    </>
                                }{
                                    productDetails.productDepartment === 5 &&
                                    <>
                                        Department : Kids({productDetails.productDepartment})
                                    </>
                                }{
                                    productDetails.productDepartment === 6 &&
                                    <>
                                        Department : Electronics({productDetails.productDepartment})
                                    </>
                                }{
                                    productDetails.productDepartment === 7 &&
                                    <>
                                        Department : Bathroom({productDetails.productDepartment})
                                    </>
                                }{
                                    productDetails.productDepartment === 8 &&
                                    <>
                                        Department : Pets({productDetails.productDepartment})
                                    </>
                                }{
                                    productDetails.productDepartment === 9 &&
                                    <>
                                        Department : Seasonal({productDetails.productDepartment})
                                    </>
                                }{
                                    productDetails.productDepartment === 10 &&
                                    <>
                                        Department : Auto({productDetails.productDepartment})
                                    </>
                                }
                                {
                                    productDetails.productDepartment === 11 &&
                                    <>
                                        Department : HardWare({productDetails.productDepartment})
                                    </>
                                }{
                                    productDetails.productDepartment === 12 &&
                                    <>
                                        Department : Home({productDetails.productDepartment})
                                    </>
                                }
                            </div>
                            <div className="font-extralight my-1">
                                Listed by : {productDetails.productLister}
                            </div>

                        </div>

                        <div>
                            <button onClick={() => { closeProductDetails(productDetails.id.concat(productDetails.genericName)) }} className="flex justify-center bg-[#396B31] w-[50%] md:w-auto text-[10px] md:text-lg text-white cursor-pointer px-2 my-2">
                                close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
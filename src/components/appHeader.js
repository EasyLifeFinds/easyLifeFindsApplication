import { useNavigate } from "react-router-dom"
import SellerSignUpForm from "./sellerSignUpForm"

export default function AppHeader() {

    const navigate = useNavigate()

    function printListerSignUpFormDetails(obj) {
        console.log("lister details --> ", obj)
    }

    function showSignUpForListerForm(ev) {
        ev.preventDefault()
        document.getElementById("listerSignupForm").classList.remove("hidden")
    }

    return (
        <div>
            <div className="flex align-middle justify-between  border-b p-5 shadow-md">
                <button className="text-[#396B31] text-sm sm:font-light sm:text-2xl" onClick={() => { navigate('/') }}>
                    EasyLifeFinds
                </button>
                <div className="flex items-center gap-x-2">
                    <div className="hidden text-[5px] sm:text-sm sm:block text-gray-600 border border-gray-600 sm:rounded-full hover:cursor-pointer sm:px-2" onClick={showSignUpForListerForm}>
                        get newsletter
                    </div>
                    <div className="rounded-full w-6 sm:w-9 h-auto">
                        <img src={require("../images/canadaflag.avif")} />
                    </div>
                </div>
            </div>
            <div className="absolute z-50 ml-[50vw] mt-[5vh] bg-white p-5 -translate-x-2/4 border border-[#396B31] rounded-sm shadow-md hidden" id="listerSignupForm">
                <SellerSignUpForm printFormDetails={printListerSignUpFormDetails} showSingUpForm={showSignUpForListerForm} />
            </div>
        </div>
    )
}
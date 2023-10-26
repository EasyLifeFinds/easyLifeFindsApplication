import { useNavigate } from "react-router-dom"
import SellerSignUpForm from "./sellerSignUpForm"

export default function AppHeader() {

    const navigate = useNavigate()

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
                {/* <div>
                    <ul className="m-0 p-0 flex">
                        <li className="text-[5px] sm:text-sm sm:block text-[#396B31] border border-[#396B31] sm:rounded-full hover:cursor-pointer hover:text-white hover:bg-[#396B31] sm:px-[1rem] sm:mx-1" onClick={() => navigate('wishlist')}>
                            wish list
                        </li>
                        <li className="text-[5px] sm:text-sm sm:block text-[#396B31] border border-[#396B31] sm:rounded-full hover:cursor-pointer hover:text-white hover:bg-[#396B31] sm:px-[1rem] sm:mx-1"  onClick={showSignUpForListerForm}>
                            news letter
                        </li>
                        <li>
                            <img src={require("../images/canadaflag.avif")} className="rounded-full w-6 sm:w-9 h-auto" />
                        </li>
                    </ul>

                </div> */}
                <div className=" flex items-center gap-x-2">
                    <div className=" text-[12px] sm:text-sm sm:flex text-[#396B31] border border-[#396B31] rounded-full hover:cursor-pointer hover:text-white hover:bg-[#396B31] px-1 sm:px-2" onClick={() => navigate('wishlist')}>
                        wish list
                    </div>
                    <div className=" text-[12px] sm:text-sm sm:flex text-[#396B31] border border-[#396B31] rounded-full hover:cursor-pointer hover:text-white hover:bg-[#396B31] px-1 sm:px-2" onClick={showSignUpForListerForm}>
                        news letter
                    </div>
                    <div className=" sm:flex rounded-full w-6 sm:w-9 h-auto">
                        <img src={require("../images/canadaflag.avif")} />
                    </div>
                </div>
            </div>
            <div className="absolute z-50 ml-[50vw] mt-[5vh] bg-white p-5 -translate-x-2/4 border border-[#396B31] rounded-sm shadow-md hidden" id="listerSignupForm">
                <SellerSignUpForm />
            </div>
        </div>
    )
}
import { useNavigate } from "react-router-dom"
import NewsLetterSignUpForm from "./newsLetterSignUpForm"
import ContactForm from "./contactForm"
import { useRef } from "react"

export default function AppHeader() {

    const navigate = useNavigate()

    let signUpFormRef = useRef(null)
    let contactFormRef = useRef(null)


    function showSignUpForListerForm(ev) {
        ev.preventDefault()
        if (signUpFormRef.current !== null || signUpFormRef.current !== undefined) {
            signUpFormRef.current.classList.remove("hidden")
        }
    }
    function showContactForm(ev) {
        ev.preventDefault()
        if (contactFormRef.current !== null || contactFormRef.current !== undefined) {
            contactFormRef.current.classList.remove("hidden")
        }
    }


    return (
        <div>
            <div className="flex align-middle justify-between border-b p-5 shadow-md">
                <button className="text-[#396B31] text-sm sm:font-light sm:text-lg md:text-2xl" onClick={() => { navigate('/') }}>
                  <h1>
                  EasyLifeFinds
                    </h1> 
                </button>
                <div className=" flex items-center gap-x-2">
                    <div className="hidden md:block text-[12px] sm:text-sm sm:flex text-[#396B31] border border-[#396B31] rounded-full hover:cursor-pointer hover:text-white hover:bg-[#396B31] px-1 sm:px-2" onClick={() => navigate('wishlist')}>
                        wish list
                    </div>
                    <div className=" text-[12px] sm:text-sm sm:flex text-[#396B31] border border-[#396B31] rounded-full hover:cursor-pointer hover:text-white hover:bg-[#396B31] px-1 sm:px-2" onClick={showSignUpForListerForm}>
                        news letter
                    </div>
                    <div className=" text-[12px] sm:text-sm sm:flex text-[#396B31] border border-[#396B31] rounded-full hover:cursor-pointer hover:text-white hover:bg-[#396B31] px-1 sm:px-2" onClick={showContactForm}>
                       Contact
                    </div>
                    <div className=" sm:flex rounded-full w-6 sm:w-9 h-auto">
                        <img src={require("../images/canadaflag.avif")} />
                    </div>
                </div>
            </div>
            <div ref={signUpFormRef} className="hidden">
                <NewsLetterSignUpForm newsLetterFormRef={signUpFormRef} />
            </div>
            <div ref={contactFormRef} className="hidden">
                <ContactForm contactLetterFormRef={contactFormRef} />
            </div>
        </div>
    )
}

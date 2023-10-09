import { useRef, useState } from "react"

export default function SellerSignUpForm({ printFormDetails }) {

    const name = [
        "dwayne johnson",
        "kevin hart",
        "sylvester stallone",
        "arnold schwarzenegger",
        "seteve carell",
        "jonah hill",
        "brad pitt",
        "robert downey",
        "jeff bezos",
        "steve jobs",
        "bill gates",
        "elon musk"
    ]

    const [formName, setFormName] = useState(() => {
        return name[Math.floor(Math.random() * name.length)]
    })

    let email = useRef("")
    let firstName = useRef("")
    let secondName = useRef("")

    function closeSignUpForm(ev) {
        ev.preventDefault()
        document.getElementById("listerSignupForm").classList.add("hidden")
    }

    function sellerSignUpFormSubmitted(ev) {
        ev.preventDefault()
        console.log(email.current.value, firstName.current.value, secondName.current.value)
        printFormDetails({ listerEmail: email.current.value, listerFirstName: firstName.current.value, listerSecondName: secondName.current.value })
    }
    return (
        <div>
            <form onSubmit={sellerSignUpFormSubmitted}>
                <div>
                    <input type="email" ref={email} className="required:border-red-500 placeholder-slate-400 border border-slate-600 p-1 m-1 sm:w-[98%]" placeholder={`${formName.split(" ").join("_")}@gmail.com`} />
                </div>
                <div className="sm:flex sm:justify-between">
                    <div>
                        <input type="text" ref={firstName} className="required:border-red-500 placeholder-slate-400 border border-slate-600 p-1 m-1" placeholder={formName.split(" ")[0]} />
                    </div>
                    <div>
                        <input type="text" ref={secondName} className="required:border-red-500 placeholder-slate-400 border border-slate-600 p-1 m-1" placeholder={formName.split(" ")[1]} />
                    </div>
                </div>
                <div className="flex justify-around mt-1">
                    <input type="submit" className="bg-slate-800 text-white px-2" value="submit" />
                    <button className="bg-slate-600 text-white px-2" onClick={closeSignUpForm}>cancel</button>
                </div>
            </form>
        </div>
    )
}
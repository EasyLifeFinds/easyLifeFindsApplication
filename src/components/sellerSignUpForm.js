import { useRef, useState } from "react"
import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../data/Data"


export default function SellerSignUpForm() {

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

    async function addUserForNewLetterToFireStore(obj) {
        await setDoc(doc(collection(db, "usersNewsLetter")),
            obj
        )
            .then((suc) => {
                alert("Success")
                document.getElementById("listerSignupForm").classList.add("hidden")
                return true
            })
            .catch((err) => {
                alert("Failed")
                return false
            })
    }

    let email = useRef("")
    let firstName = useRef("")
    let secondName = useRef("")

    function closeSignUpForm(ev) {
        ev.preventDefault()
        document.getElementById("listerSignupForm").classList.add("hidden")
    }

    function sellerSignUpFormSubmitted(ev) {
        ev.preventDefault()
        addUserForNewLetterToFireStore({ listerEmail: email.current.value, listerFirstName: firstName.current.value, listerSecondName: secondName.current.value })
    }

    return (
        <div>
            <form onSubmit={sellerSignUpFormSubmitted}>
                <div>
                    <input type="email" ref={email} required className="placeholder-slate-400 border border-slate-600 p-1 m-1 sm:w-[98%]" placeholder={`${formName.split(" ").join("_")}@gmail.com`} />
                </div>
                <div className="sm:flex sm:justify-between">
                    <div>
                        <input type="text" ref={firstName} className="placeholder-slate-400 border border-slate-600 p-1 m-1" placeholder={formName.split(" ")[0]} />
                    </div>
                    <div>
                        <input type="text" ref={secondName} className="placeholder-slate-400 border border-slate-600 p-1 m-1" placeholder={formName.split(" ")[1]} />
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
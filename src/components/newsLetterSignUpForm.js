import { useRef, useState } from "react"
import { collection, setDoc, doc } from "firebase/firestore";
import { db,NamesEmail } from "../data/Data"


export default function NewsLetterSignUpForm({newsLetterFormRef}) {


    const [formName, setFormName] = useState(() => {
        return NamesEmail[Math.floor(Math.random() * NamesEmail.length)]
    })

    async function addUserForNewLetterToFireStore(obj) {
        await setDoc(doc(collection(db, "usersNewsLetter")),
            obj
        )
            .then((suc) => {
                alert("Success")
                newsLetterFormRef.current.classList.add("hidden")
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
        if (newsLetterFormRef.current !== null && newsLetterFormRef.current !== undefined) {
            newsLetterFormRef.current.classList.add("hidden")
        }
    }

    function sellerSignUpFormSubmitted(ev) {
        ev.preventDefault()
        addUserForNewLetterToFireStore({ listerEmail: email.current.value, listerFirstName: firstName.current.value, listerSecondName: secondName.current.value })
    }

    return (
        <div>
        <div className="absolute z-25 bg-white w-[100%] h-[100%] opacity-50"></div>
        <div className=" absolute mt-[5vh] ml-[50vw] -translate-x-1/2 bg-[#fff] p-5 border-2 border-[#396B31] rounded-sm shadow-lg z-50 w-[35%]">
             <div className="text-lg text-center text-[#396B31]">
                Sign Up for newsletter
            </div>
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
                    <input type="submit" className="bg-[#396B31] text-white px-2" value="submit" />
                    <button className="bg-slate-400 text-white px-2" onClick={closeSignUpForm}>cancel</button>
                </div>
            </form> 
        </div>
        </div>
    )
}

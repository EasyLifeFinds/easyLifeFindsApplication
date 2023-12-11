import React,{useRef} from 'react'

function ContactForm({contactLetterFormRef}) {


    let email = useRef("")
    let subject = useRef("")
    let information = useRef("")

    function addcontactFormToFireStore(obj){
console.log('-->',obj)
    }

    function closeSignUpForm(ev) {
        ev.preventDefault()
        if (contactLetterFormRef.current !== null && contactLetterFormRef.current !== undefined) {
            contactLetterFormRef.current.classList.add("hidden")
        }
    }

    function contactFormSubmitted(ev) {
        ev.preventDefault()
        addcontactFormToFireStore({responseEmail: email.current.value, contactSubject: subject.current.value, contactInformation: information.current.value})
    }

  return (
    <div>
                <div className="absolute z-25 bg-white w-[100%] h-[100%] opacity-50"></div>
                <div className=" absolute mt-[5vh] ml-[50vw] -translate-x-1/2 bg-[#fff] p-5 border-2 border-[#396B31] rounded-sm shadow-lg z-50 w-[35%]">
             <div className="text-lg text-center text-[#396B31]">
Contact form           
 </div>
            <form onSubmit={contactFormSubmitted}>
                <div>
                    <input type="email" ref={email} className="placeholder-slate-400 border border-slate-600 p-1 m-1 sm:w-[98%]" placeholder='Your email' />
                </div>
                <div>
                    <div>
                        <input type="text" ref={subject} className="placeholder-slate-400 border border-slate-600 p-1 m-1 sm:w-[98%]" placeholder='Subject' />
                    </div>
                    <div>
                        <textarea type="text" ref={information} className="placeholder-slate-400 border border-slate-600 p-1 m-1 sm:w-[98%] h-[5em]" placeholder='How can we help' />
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

export default ContactForm

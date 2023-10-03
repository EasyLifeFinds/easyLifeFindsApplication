import { useNavigate } from "react-router-dom"
import { LiaBookmark } from "react-icons/lia";

export default function AppHeader() {

    const navigate = useNavigate()

    return (
        <div className="flex align-middle justify-between font-light text-2xl border-b p-5 shadow-md">
            <button className="text-[#396B31]" onClick={() => { navigate('/') }}>
                EasyLifeFinds
            </button>
            <div className="flex items-center">
                <div className="rounded-full w-9 h-auto">
                    <img src={require("../images/canadaflag.avif")} />
                </div>
            </div>
        </div>
    )
}
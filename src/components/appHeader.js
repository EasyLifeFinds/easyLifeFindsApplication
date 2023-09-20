import { useNavigate } from "react-router-dom"

export default function AppHeader() {

    const navigate = useNavigate()

    return (
        <div className="flex align-middle justify-between font-light text-2xl border-b p-5  shadow-md">
            <button className="text-[#396B31]" onClick={() => { navigate('/') }}>
                EasyLifeFinds
            </button>

            <div className="flex items-center space-x-5 underline">
                <button className="text-slate-800 " onClick={() => { navigate('wishlist') }}>Wish List</button>
                <div className="rounded-full w-9 h-auto">
                    <img src={require("../images/canadaflag.avif")} />
                </div>
            </div>
        </div>
    )
}
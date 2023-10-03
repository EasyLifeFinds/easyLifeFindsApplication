import { LiaBookmark } from "react-icons/lia";
import { useNavigate } from "react-router-dom"

export default function WishListNavButton() {
    const navigate = useNavigate()

    return (
        <div>
            <div className="bg-[#396B31] px-5 py-1 mx-5 rounded-lg hover:-translate-y-1 fixed bottom-5 right-5">
                <button onClick={() => { navigate('wishlist') }}>
                    <LiaBookmark className="text-4xl text-white" />
                </button>
            </div>
        </div>
    )
}